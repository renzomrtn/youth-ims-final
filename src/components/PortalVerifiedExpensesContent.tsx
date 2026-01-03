import { useState, useEffect } from "react";
import { ChevronLeft, Search } from "lucide-react";
import { useExpenseVerification } from "../contexts/ExpenseVerificationContext";

interface PortalVerifiedExpensesContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onBack: () => void;
}

const LINE_ITEM_LOOKUP: Record<string, string> = {
  "LI-2025/810-2K2Q": "HIV/AIDS Awareness Seminar",
  "LI-2025/909-9KCY": "Anti-Illegal Drugs Seminar",
  "LI-2025/908-LTTC": "Leadership Training Camp",
  "LI-2025/907-K98N": "Environmental Cleanup Drive",
  "LI-2025/906-P48T": "Youth Sports Festival"
};

export function PortalVerifiedExpensesContent({ 
  darkMode, 
  viewMode, 
  onBack 
}: PortalVerifiedExpensesContentProps) {
  const { expenseItems, isLoading, error, updateExpenseItem } = useExpenseVerification();
  const [selectedYear, setSelectedYear] = useState("2026");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [portalStatus, setPortalStatus] = useState<Record<string, { published: boolean; enabled: boolean }>>({});

  const years = ["2026","2025", "2024", "2023", "2022"];

  const [initialStatusLoaded, setInitialStatusLoaded] = useState(false);

  useEffect(() => {
    if (!initialStatusLoaded && expenseItems.length > 0) {
      const initialStatus: Record<string, { published: boolean; enabled: boolean }> = {};
      expenseItems.forEach(item => {
        initialStatus[item.id] = {
          published: true,
          // If status is Verified, the toggle should be "on" (true)
          enabled: item.status === "Verified"
        };
      });
      setPortalStatus(initialStatus);
      setInitialStatusLoaded(true);
    }
  }, [expenseItems, initialStatusLoaded]);

  const getLineItemName = (id: string) => LINE_ITEM_LOOKUP[id] || id;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(amount);
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    });
  };

  // Show both Verified and Unverified so we can toggle them back and forth
  const displayableExpenses = expenseItems.filter(item => 
    item.status === "Verified" || item.status === "Unverified"
  );

  const filteredExpenses = displayableExpenses.filter(expense => {
    const dateToCheck = expense.expenditurePeriod?.from || expense.createdAt || "";
    const expenseYear = new Date(dateToCheck).getFullYear().toString();
    const matchesYear = expenseYear === selectedYear;
    
    const lineItemName = getLineItemName(expense.lineItem).toLowerCase();
    const lineItemId = expense.lineItem.toLowerCase();
    const query = searchQuery.toLowerCase();
    
    const matchesSearch = lineItemName.includes(query) || lineItemId.includes(query);
    
    return matchesYear && matchesSearch;
  });

  const togglePublishStatus = async (expenseId: string) => {
    const newPublishedStatus = !(portalStatus[expenseId]?.published ?? true);
    setPortalStatus(prev => ({
      ...prev,
      [expenseId]: { ...prev[expenseId], published: newPublishedStatus }
    }));

    try {
      await fetch(
        `https://zolnypttxhaidighpedk.supabase.co/functions/v1/make-server-0521b783/portal/expense/${expenseId}/publish-status`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvbG55cHR0eGhhaWRpZ2hwZWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyNzQ2MzIsImV4cCI6MjA4Mjg1MDYzMn0.A00que2Eho7ufWguNNTLh2srHt8Jk_lVMTyJCi0a-t0`,
          },
          body: JSON.stringify({ published: newPublishedStatus }),
        }
      );
    } catch (error) {
      console.error("Error updating publish status:", error);
    }
  };

  const toggleEnableStatus = async (expenseId: string) => {
    const isCurrentlyEnabled = portalStatus[expenseId]?.enabled ?? false;
    const newEnabledStatus = !isCurrentlyEnabled;
    
    // Toggle Logic: On = Verified, Off = Unverified
    const newStatus = newEnabledStatus ? "Verified" : "Unverified";

    // Optimistically update local UI toggle
    setPortalStatus(prev => ({
      ...prev,
      [expenseId]: { ...prev[expenseId], enabled: newEnabledStatus }
    }));

    try {
      // Update the main database status via Context
      await updateExpenseItem(expenseId, { status: newStatus });
      
      // Update the portal display endpoint
      await fetch(
        `https://zolnypttxhaidighpedk.supabase.co/functions/v1/make-server-0521b783/portal/expense/${expenseId}/display-status`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvbG55cHR0eGhhaWRpZ2hwZWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyNzQ2MzIsImV4cCI6MjA4Mjg1MDYzMn0.A00que2Eho7ufWguNNTLh2srHt8Jk_lVMTyJCi0a-t0`,
          },
          body: JSON.stringify({ enabled: newEnabledStatus }),
        }
      );
    } catch (error) {
      console.error("Error updating display status:", error);
      // Revert UI on failure
      setPortalStatus(prev => ({
        ...prev,
        [expenseId]: { ...prev[expenseId], enabled: isCurrentlyEnabled }
      }));
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full bg-[#f3f3f3] dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-400">Loading verified expenses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full bg-[#f3f3f3] dark:bg-gray-900">
        <p className="text-red-500">Error loading expenses: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 px-8 pt-6 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#4a5565] dark:text-gray-400 hover:text-[#174499] dark:hover:text-blue-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Portal Management</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 px-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`py-4 px-1 relative ${
                selectedYear === year
                  ? "text-[#155dfc] dark:text-blue-400"
                  : "text-[#4a5565] dark:text-gray-400"
              }`}
            >
              <span>{year}</span>
              {selectedYear === year && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#155dfc] dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white dark:bg-gray-800 overflow-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl text-black dark:text-white">Portal Expense Visibility</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {filteredExpenses.length} expense{filteredExpenses.length !== 1 ? 's' : ''} shown
              </p>
            </div>
            
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Expenses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <tr>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 font-semibold">Line Item</th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 font-semibold">Line Item Information</th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 font-semibold">Total Spent</th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 font-semibold">Expenditure Period</th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 font-semibold">Portal Display</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.length > 0 ? (
                  filteredExpenses.map((expense) => {
                    const isVerified = expense.status === "Verified";
                    return (
                      <tr key={expense.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-6 py-6 font-medium text-[#101828] dark:text-gray-200">
                          {getLineItemName(expense.lineItem)}
                        </td>
                        <td className="px-6 py-6">
                          <div className="text-sm text-[#4a5565] dark:text-gray-400">
                            <p><span className="font-semibold">ID:</span> {expense.lineItem}</p>
                            <p><span className="font-semibold">Budget:</span> {formatCurrency(expense.budget)}</p>
                          </div>
                        </td>
                        <td className="px-6 py-6 font-semibold text-[#101828] dark:text-gray-200">
                          {formatCurrency(expense.totalAmountSpent)}
                        </td>
                        <td className="px-6 py-6 text-sm text-[#4a5565] dark:text-gray-400">
                          <p><span className="font-semibold">From:</span> {formatDisplayDate(expense.expenditurePeriod?.from || "")}</p>
                          <p><span className="font-semibold">To:</span> {formatDisplayDate(expense.expenditurePeriod?.to || "")}</p>
                        </td>
                        <td className="px-6 py-6">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            isVerified ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}>
                            {expense.status}
                          </span>
                        </td>
                        <td className="px-6 py-6">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={isVerified}
                              onChange={() => toggleEnableStatus(expense.id)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                            <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                              {isVerified ? "Visible" : "Hidden"}
                            </span>
                          </label>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}