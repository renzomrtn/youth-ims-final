import { createContext, useContext, useState, ReactNode } from "react";

export interface Particular {
  id: string;
  description: string;
  amount: number;
  dateOfExpense: string;
  receipt?: File;
  hasAttachment: boolean;
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

interface ExpenseItem {
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
}

interface ExpenseVerificationContextType {
  expenseItems: ExpenseItem[];
  addExpenseItem: (item: ExpenseItem) => void;
  updateExpenseItem: (id: string, updates: Partial<ExpenseItem>) => void;
  setExpenseItems: (items: ExpenseItem[]) => void;
}

const ExpenseVerificationContext = createContext<ExpenseVerificationContextType | undefined>(undefined);

export function ExpenseVerificationProvider({ children }: { children: ReactNode }) {
  const [expenseItems, setExpenseItems] = useState<ExpenseItem[]>([
    {
      id: "1",
      lineItemId: "ID: LI-2025/810-26ZQ",
      lineItem: "HIV/AIDS Awareness Seminar",
      areaOfParticipation: "Adolescent and Youth Health",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Flagged"
    },
    {
      id: "2",
      lineItemId: "ID: LI-2025/801-LZXIE",
      lineItem: "Anti-Illegal Drugs Seminar",
      areaOfParticipation: "Peace Building and Security",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Verified"
    },
    {
      id: "3",
      lineItemId: "ID: LI-2025/802-ZWPK",
      lineItem: "Leadership Training Camp",
      areaOfParticipation: "Quality Education",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Verified"
    },
    {
      id: "4",
      lineItemId: "ID: LI-2025/803-9JKL",
      lineItem: "Environmental Cleanup Drive",
      areaOfParticipation: "Sports Development",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Verified"
    },
    {
      id: "5",
      lineItemId: "ID: LI-2025/804-82HQ",
      lineItem: "Youth Sports Festival",
      areaOfParticipation: "Good Governance",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Verified"
    }
  ]);

  const addExpenseItem = (item: ExpenseItem) => {
    setExpenseItems(prev => [item, ...prev]);
  };

  const updateExpenseItem = (id: string, updates: Partial<ExpenseItem>) => {
    setExpenseItems(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  return (
    <ExpenseVerificationContext.Provider value={{ expenseItems, addExpenseItem, updateExpenseItem, setExpenseItems }}>
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