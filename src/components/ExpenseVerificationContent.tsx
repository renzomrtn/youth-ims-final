import { useState, useEffect } from "react";
import { Search, Plus, Info, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useExpenseVerification } from "../contexts/ExpenseVerificationContext";
import { ExpenseVerificationModal, ExpenseVerificationData } from "./ExpenseVerificationModal";
import { ExpenseVerificationDetailView } from "./ExpenseVerificationDetailView";
import { FlaggingData } from "./FlaggingModal";

const LINE_ITEM_LOOKUP: Record<string, string> = {
  "LI-2025/810-2K2Q": "HIV/AIDS Awareness Seminar",
  "LI-2025/909-9KCY": "Anti-Illegal Drugs Seminar",
  "LI-2025/908-LTTC": "Leadership Training Camp",
  "LI-2025/907-K98N": "Environmental Cleanup Drive",
  "LI-2025/906-P48T": "Youth Sports Festival"
};

interface ExpenseVerificationContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onSubPageChange?: (subPage: string | undefined) => void;
}

interface ExpenseItem {
  id: string;
  lineItemId?: string; 
  lineItem: string;
  areaOfParticipation?: string;
  budget: number;
  totalAmount: number;
  expenditurePeriod: {
    from: string;
    to: string;
  };
  submittedBy: string;
  status: "Verified" | "Unverified" | "Pending" | "Flagged";
  particulars?: {
    id: string;
    description: string;
    amount: number;
    dateOfExpense: string;
    receipt?: string;
    hasAttachment?: boolean;
  }[];
  flaggingData?: FlaggingData;
}

export function ExpenseVerificationContent({ darkMode, viewMode, onSubPageChange }: ExpenseVerificationContentProps) {
  const { user } = useAuth();
  const { expenseItems, addExpenseItem, isLoading, error } = useExpenseVerification();
  const [activeTab, setActiveTab] = useState("current");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedBarangay, setSelectedBarangay] = useState("Caliang");
  const [isExpenseVerificationModalOpen, setIsExpenseVerificationModalOpen] = useState(false);
  const [selectedExpenseItem, setSelectedExpenseItem] = useState<ExpenseItem | null>(null);

  useEffect(() => {
    if (onSubPageChange) {
      onSubPageChange(activeTab);
    }
  }, [activeTab, onSubPageChange]);

  const getLineItemName = (id: string) => LINE_ITEM_LOOKUP[id] || id;

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const formatPeriod = (item: ExpenseItem) => {
    if (!item.expenditurePeriod) return "N/A";
    const from = formatDisplayDate(item.expenditurePeriod.from);
    const to = formatDisplayDate(item.expenditurePeriod.to);
    return (
      <div className="flex flex-col space-y-1">
        <div className="text-black dark:text-white">
          <span className="text-gray-600 dark:text-gray-400">From:</span> {from}
        </div>
        <div className="text-black dark:text-white">
          <span className="text-gray-600 dark:text-gray-400">To:</span> {to}
        </div>
      </div>
    );
  };

  const filterItems = (items: ExpenseItem[]) => {
    return items.filter(item => {
      const name = getLineItemName(item.lineItem).toLowerCase();
      const code = item.lineItem.toLowerCase();
      const query = searchQuery.toLowerCase();
      return name.includes(query) || code.includes(query) || (item.submittedBy?.toLowerCase() || "").includes(query);
    });
  };

  const currentItems = filterItems(expenseItems.filter(item => item.status !== "Verified"));
  const pastItems = filterItems(expenseItems.filter(item => item.status === "Verified"));
  const monitoringItems = filterItems(expenseItems);

  const formatCurrency = (amount: number | undefined | null) => {
    const value = amount ?? 0;
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(value);
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      Verified: { bg: "bg-[#d1fae5]", border: "border-[#6ee7b7]", text: "text-[#047857]", dot: "bg-[#10b981]" },
      Unverified: { bg: "bg-[#fffbeb]", border: "border-[#fe9a00]", text: "text-[#e17100]", dot: "bg-[#fe9a00]" },
      Pending: { bg: "bg-gray-100", border: "border-gray-300", text: "text-gray-600", dot: "bg-gray-400" },
      Flagged: { bg: "bg-[#fff7f7]", border: "border-[#fe0000]", text: "text-[#e10000]", dot: "bg-[#fe0000]" }
    };
    const style = statusStyles[status as keyof typeof statusStyles] || statusStyles.Pending;
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${style.bg} ${style.border} ${style.text}`}>
        <span className={`w-2 h-2 rounded-full ${style.dot} mr-2`} />
        {status}
      </span>
    );
  };

  const handleExpenseVerificationConfirm = (data: ExpenseVerificationData) => {
    const totalAmount = data.particulars.reduce((sum, p) => sum + (p.amount || 0), 0);
    const newExpenseItem: any = {
      lineItem: data.lineItem, 
      budget: data.budget,
      totalAmount: totalAmount,
      expenditurePeriod: {
        from: data.expenditurePeriod.from,
        to: data.expenditurePeriod.to
      },
      submittedBy: user?.name || "Unknown User",
      status: "Pending",
      particulars: data.particulars
    };
    addExpenseItem(newExpenseItem);
    setIsExpenseVerificationModalOpen(false);
  };

  if (isLoading) return <div className="p-20 text-center dark:text-white">Loading expenses...</div>;
  if (error) return <div className="p-20 text-center text-red-500 font-bold">Error: {error}</div>;

  if (selectedExpenseItem) {
    return (
      <ExpenseVerificationDetailView
        darkMode={darkMode}
        onBack={() => setSelectedExpenseItem(null)}
        expenseItemId={selectedExpenseItem.id}
        lineItemId={selectedExpenseItem.lineItem}
        lineItemTitle={getLineItemName(selectedExpenseItem.lineItem)}
        lineItemArea={selectedExpenseItem.areaOfParticipation || "N/A"}
        budget={selectedExpenseItem.budget}
        totalAmountSpent={selectedExpenseItem.totalAmount}
        fromDate={selectedExpenseItem.expenditurePeriod.from}
        toDate={selectedExpenseItem.expenditurePeriod.to}
        submittedBy={selectedExpenseItem.submittedBy}
        status={selectedExpenseItem.status}
        flaggingData={selectedExpenseItem.flaggingData || null}
        particulars={selectedExpenseItem.particulars as any}
      />
    );
  }

  const renderTable = (items: ExpenseItem[]) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Line Item</th>
            <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Line Item Information</th>
            <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Total Amount Spent</th>
            <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Expenditure Period</th>
            <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Submitted By</th>
            <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Status</th>
            <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="px-6 py-4 text-black dark:text-white">{getLineItemName(item.lineItem)}</td>
              <td className="px-6 py-4">
                <div className="flex flex-col space-y-1">
                  <div className="text-black dark:text-white">
                    <span className="text-gray-600 dark:text-gray-400">ID:</span> {item.lineItem}
                  </div>
                  <div className="text-black dark:text-white">
                    <span className="text-gray-600 dark:text-gray-400">Area of Advocacy:</span> {item.areaOfParticipation || "N/A"}
                  </div>
                  <div className="text-black dark:text-white">
                    <span className="text-gray-600 dark:text-gray-400">Budget:</span> {formatCurrency(item.budget)}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-black dark:text-white">{formatCurrency(item.totalAmount)}</td>
              <td className="px-6 py-4">
                {formatPeriod(item)}
              </td>
              <td className="px-6 py-4 text-black dark:text-white">{item.submittedBy}</td>
              <td className="px-6 py-4">{getStatusBadge(item.status)}</td>
              <td className="px-6 py-4">
                <button 
                  onClick={() => setSelectedExpenseItem(item)}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                >
                  <Info className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {isExpenseVerificationModalOpen && (
        <ExpenseVerificationModal
          isOpen={isExpenseVerificationModalOpen}
          onClose={() => setIsExpenseVerificationModalOpen(false)}
          onConfirm={handleExpenseVerificationConfirm}
        />
      )}

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8">
        <div className="flex gap-8">
          {["Current Verifications", "Past Verifications", "Verifications Monitoring"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "Current Verifications" ? "current" : tab === "Past Verifications" ? "past" : "monitoring")}
              className={`py-4 relative ${
                (activeTab === "current" && tab === "Current Verifications") ||
                (activeTab === "past" && tab === "Past Verifications") ||
                (activeTab === "monitoring" && tab === "Verifications Monitoring")
                  ? "text-[#174499] dark:text-blue-400"
                  : "text-[#606060] dark:text-gray-400"
              }`}
            >
              <span>{tab}</span>
              {((activeTab === "current" && tab === "Current Verifications") ||
                (activeTab === "past" && tab === "Past Verifications") ||
                (activeTab === "monitoring" && tab === "Verifications Monitoring")) && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#174499] dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-black dark:text-white">
              {activeTab === "current" ? "Expense Verification" : activeTab === "past" ? "Past Expense Verifications" : "Expense Verification per Barangay"}
            </h2>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search expenses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder:text-gray-400"
              />
              {activeTab === "current" && user?.role === "SKF Treasurer" && (
                <button 
                  onClick={() => setIsExpenseVerificationModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#174499] hover:bg-[#0f2f6b] text-white rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Submit Verification
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          {activeTab === "current" && renderTable(currentItems)}
          {activeTab === "past" && renderTable(pastItems)}
          {activeTab === "monitoring" && renderTable(monitoringItems)}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button className="px-4 py-2 bg-[#174499] text-white rounded">
              {currentPage}
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}