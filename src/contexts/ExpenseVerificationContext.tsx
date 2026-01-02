import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// ============================================
// TYPES & INTERFACES
// ============================================

export interface Particular {
  id: string;
  description: string;
  amount: number;
  dateOfExpense: string;
  hasAttachment: boolean;
  receipt?: File; 
}

export interface FlaggingData {
  lineItem: string;
  selectedExpenses: {
    id: string;
    particular: string;
    amount: number;
    date: string;
  }[];
  fieldsToCorrect: {
    particular: boolean;
    amount: boolean;
    dateOfExpense: boolean;
    attachment: boolean;
  };
  remarks: string;
  flaggedBy?: string;
  flaggedDate?: string;
}

export interface ExpenseItem {
  id: string;
  lineItemId: string;
  lineItem: string;
  areaOfParticipation: string;
  budget: number;
  totalAmountSpent: number;
  fromDate: string;
  toDate: string;
  submittedBy: string;
  status: "Verified" | "Unverified" | "Pending" | "Flagged";
  particulars?: Particular[];
  flaggingData?: FlaggingData | null;
  createdAt?: string;
  updatedAt?: string;
}

interface ExpenseVerificationContextType {
  expenseItems: ExpenseItem[];
  isLoading: boolean;
  error: string | null;
  addExpenseItem: (item: ExpenseItem) => Promise<void>;
  updateExpenseItem: (id: string, updates: Partial<ExpenseItem>) => Promise<void>;
  verifyExpense: (id: string, data: { verifiedBy: string; remarks: string }) => Promise<void>;
  flagExpense: (id: string, data: { reason: string; flaggedBy: string }) => Promise<void>;
  refreshData: () => Promise<void>;
}

// ============================================
// CONTEXT & PROVIDER
// ============================================

const API_BASE = "https://zolnypttxhaidighpedk.supabase.co/functions/v1/make-server-0521b783/expenses";

// REPLACE THIS with your actual Anon Key from Supabase Dashboard -> Project Settings -> API
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvbG55cHR0eGhhaWRpZ2hwZWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyNzQ2MzIsImV4cCI6MjA4Mjg1MDYzMn0.A00que2Eho7ufWguNNTLh2srHt8Jk_lVMTyJCi0a-t0"; 

const HEADERS = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
};

const ExpenseVerificationContext = createContext<ExpenseVerificationContextType | undefined>(undefined);

export function ExpenseVerificationProvider({ children }: { children: ReactNode }) {
  const [expenseItems, setExpenseItems] = useState<ExpenseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 1. Fetch All Expenses (GET)
  const refreshData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(API_BASE, {
        method: "GET",
        headers: HEADERS,
      });
      
      if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch expenses`);
      
      const data = await response.json();
      // Handle KV storage potentially returning an object or array
      const itemsArray = Array.isArray(data) ? data : Object.values(data);
      setExpenseItems(itemsArray as ExpenseItem[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  // 2. Create Expense (POST)
  const addExpenseItem = async (item: ExpenseItem) => {
    try {
      // Calculate total from particulars if not provided
      const totalFromParticulars = item.particulars 
        ? item.particulars.reduce((sum, p) => sum + p.amount, 0)
        : 0;
      
      const itemToSave = {
        ...item,
        totalAmountSpent: item.totalAmountSpent || totalFromParticulars,
      };
      
      const response = await fetch(API_BASE, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(itemToSave),
      });
      if (!response.ok) throw new Error("Failed to create expense");
      
      const savedItem = await response.json();
      setExpenseItems(prev => [savedItem, ...prev]);
    } catch (err) {
      console.error("Add error:", err);
      throw err;
    }
  };

  // 3. Update Expense (PUT)
  const updateExpenseItem = async (id: string, updates: Partial<ExpenseItem>) => {
    try {
      // If particulars are being updated, recalculate totalAmountSpent
      let updatesToSend = { ...updates };
      if (updates.particulars) {
        const newTotal = updates.particulars.reduce((sum, p) => sum + p.amount, 0);
        updatesToSend.totalAmountSpent = newTotal;
      }
      
      const response = await fetch(`${API_BASE}/${id}`, {
        method: "PUT",
        headers: HEADERS,
        body: JSON.stringify(updatesToSend),
      });
      if (!response.ok) throw new Error("Failed to update expense");
      
      const updated = await response.json();
      setExpenseItems(prev => prev.map(item => (item.id === id ? updated : item)));
    } catch (err) {
      console.error("Update error:", err);
      throw err;
    }
  };

  // 4. Verify Expense (POST /verify)
  const verifyExpense = async (id: string, data: { verifiedBy: string; remarks: string }) => {
    try {
      const response = await fetch(`${API_BASE}/${id}/verify`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to verify expense");
      
      await refreshData();
    } catch (err) {
      console.error("Verification error:", err);
      throw err;
    }
  };

  // 5. Flag Expense (POST /flag)
  const flagExpense = async (id: string, data: { reason: string; flaggedBy: string }) => {
    try {
      const response = await fetch(`${API_BASE}/${id}/flag`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to flag expense");
      
      await refreshData();
    } catch (err) {
      console.error("Flagging error:", err);
      throw err;
    }
  };

  return (
    <ExpenseVerificationContext.Provider 
      value={{ 
        expenseItems, 
        isLoading, 
        error,
        addExpenseItem, 
        updateExpenseItem, 
        verifyExpense, 
        flagExpense,
        refreshData 
      }}
    >
      {children}
    </ExpenseVerificationContext.Provider>
  );
}

export function useExpenseVerification() {
  const context = useContext(ExpenseVerificationContext);
  if (context === undefined) {
    throw new Error("useExpenseVerification must be used within an ExpenseVerificationProvider");
  }
  return context;
}