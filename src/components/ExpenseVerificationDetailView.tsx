import { ArrowLeft, FileImage } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { FlaggingModal, FlaggingData } from "./FlaggingModal";
import { FlaggedExpenseResponseModal, CorrectionData } from "./FlaggedExpenseResponseModal";
import { Particular, useExpenseVerification } from "../contexts/ExpenseVerificationContext";

interface ExpenseItem {
  id: string;
  particular: string;
  amount: number;
  date: string;
  hasAttachment: boolean;
}

interface ExpenseVerificationDetailViewProps {
  darkMode: boolean;
  onBack: () => void;
  expenseItemId: string;
  lineItemId: string;
  lineItemTitle: string;
  lineItemArea: string;
  budget: number;
  totalAmountSpent: number;
  fromDate: string;
  toDate: string;
  submittedBy: string;
  status: "Verified" | "Unverified" | "Pending" | "Flagged";
  flaggingData?: FlaggingData | null;
  particulars?: Particular[];
}

export function ExpenseVerificationDetailView({
  darkMode,
  onBack,
  expenseItemId,
  lineItemId,
  lineItemTitle,
  lineItemArea,
  budget,
  totalAmountSpent,
  fromDate,
  toDate,
  submittedBy,
  status,
  flaggingData,
  particulars,
}: ExpenseVerificationDetailViewProps) {
  const { user } = useAuth();
  const { updateExpenseItem, refreshData } = useExpenseVerification();
  const [selectedExpenseIds, setSelectedExpenseIds] = useState<string[]>([]);
  const [isFlaggingModalOpen, setIsFlaggingModalOpen] = useState(false);
  const [isFlaggedExpenseResponseModalOpen, setIsFlaggedExpenseResponseModalOpen] = useState(false);

  // FIXED: Generate unique IDs for particulars that don't have them
  const expenseItems: ExpenseItem[] = particulars 
    ? particulars.map((p, index) => ({
        id: p.id || `particular-${index}`, // Use existing ID or generate one based on index
        particular: p.description,
        amount: p.amount,
        date: p.dateOfExpense,
        hasAttachment: !!p.receiptName || p.hasAttachment || false
      }))
    : [];

  const handleCheckboxChange = (expenseId: string) => {
    setSelectedExpenseIds((prev) =>
      prev.includes(expenseId)
        ? prev.filter((id) => id !== expenseId)
        : [...prev, expenseId]
    );
  };

  const handleFlagClick = () => {
    if (selectedExpenseIds.length > 0) {
      setIsFlaggingModalOpen(true);
    } else {
      alert("Please select at least one expense item to flag.");
    }
  };

  const handleApproveClick = async () => {
    await updateExpenseItem(expenseItemId, {
      status: "Verified",
      flaggingData: null
    });
    
    setSelectedExpenseIds([]);
    await refreshData();
    onBack();
  };

  const handleFlaggingConfirm = async (data: FlaggingData) => {
    const enrichedFlaggingData = {
      ...data,
      flaggedBy: user?.name || "Unknown User",
      flaggedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    
    await updateExpenseItem(expenseItemId, {
      status: "Flagged",
      flaggingData: enrichedFlaggingData
    });
    
    setSelectedExpenseIds([]);
    setIsFlaggingModalOpen(false);
    await refreshData();
    onBack();
  };

  const handleFlaggedExpenseResponseConfirm = async (data: CorrectionData) => {
    if (particulars) {
      const updatedParticulars = particulars.map((particular, index) => {
        const particularId = particular.id || `particular-${index}`;
        const correction = data.corrections.find(c => c.expenseId === particularId);
        
        if (correction) {
          return {
            ...particular,
            description: correction.particular || particular.description,
            amount: correction.amount || particular.amount,
            dateOfExpense: correction.dateOfExpense 
              ? new Date(correction.dateOfExpense).toISOString().split('T')[0]
              : particular.dateOfExpense,
          };
        }
        
        return particular;
      });

      // Recalculate the total amount spent based on updated particulars
      const newTotalAmountSpent = updatedParticulars.reduce((sum, p) => sum + p.amount, 0);
      
      await updateExpenseItem(expenseItemId, {
        status: "Pending",
        flaggingData: null,
        particulars: updatedParticulars,
        totalAmountSpent: newTotalAmountSpent
      });
    } else {
      await updateExpenseItem(expenseItemId, {
        status: "Pending",
        flaggingData: null
      });
    }
    
    setSelectedExpenseIds([]);
    setIsFlaggedExpenseResponseModalOpen(false);
    await refreshData();
    onBack();
  };

  const getSelectedExpenses = () => {
    return expenseItems.filter((item) => selectedExpenseIds.includes(item.id));
  };

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
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

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      <div className="flex-1 overflow-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-black dark:text-white hover:text-[#174499] dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Expense Verification</span>
            </button>
            {getStatusBadge(status)}
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Line Item Details */}
            <div className="mb-8">
              <h2 className="text-2xl text-black dark:text-white mb-6">
                {lineItemTitle}
              </h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Line Item ID</p>
                    <p className="text-black dark:text-white">{lineItemId}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Area of Advocacy</p>
                    <p className="text-black dark:text-white">{lineItemArea}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Budget</p>
                    <p className="text-black dark:text-white">{formatCurrency(budget)}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Total Amount Spent</p>
                    <p className="text-black dark:text-white text-xl font-semibold">{formatCurrency(totalAmountSpent)}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Expenditure Period</p>
                    <p className="text-black dark:text-white">From: {fromDate}</p>
                    <p className="text-black dark:text-white">To: {toDate}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Submitted By</p>
                    <p className="text-black dark:text-white">{submittedBy}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expense Items Table */}
            <div className="mb-6">
              <h3 className="text-lg text-black dark:text-white mb-4">Expense Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      {(user?.role === "SKF Auditor" || user?.role === "SKF President") && status !== "Verified" && (
                        <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300 w-16"></th>
                      )}
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Particulars</th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Amount</th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Date of Expense</th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Attachment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenseItems.length > 0 ? (
                      expenseItems.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        >
                          {(user?.role === "SKF Auditor" || user?.role === "SKF President") && status !== "Verified" && (
                            <td className="px-6 py-4">
                              <input
                                type="checkbox"
                                className="w-4 h-4 border-2 border-gray-400 rounded"
                                checked={selectedExpenseIds.includes(item.id)}
                                onChange={() => handleCheckboxChange(item.id)}
                              />
                            </td>
                          )}
                          <td className="px-6 py-4 text-black dark:text-white">{item.particular}</td>
                          <td className="px-6 py-4 text-black dark:text-white">{formatCurrency(item.amount)}</td>
                          <td className="px-6 py-4 text-black dark:text-white">{item.date}</td>
                          <td className="px-6 py-4">
                            {item.hasAttachment && (
                              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors">
                                <FileImage className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                          No expense items found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Budget Summary and Action Buttons */}
            <div className="flex justify-end">
              <div className="w-96 space-y-4">
                <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-4">
                  <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                  <span className="text-xl text-black dark:text-white font-semibold">{formatCurrency(budget)}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b-2 border-gray-300 dark:border-gray-600">
                  <span className="text-gray-600 dark:text-gray-400">Total Amount Spent:</span>
                  <span className="text-xl text-black dark:text-white font-semibold">{formatCurrency(totalAmountSpent)}</span>
                </div>

                {/* Action Buttons for Treasurer */}
                {user?.role === "SKF Treasurer" && status === "Flagged" && (
                  <div className="pt-4">
                    <button
                      className="w-full px-8 py-2.5 bg-[#174499] hover:bg-[#0f2f6b] text-white rounded-lg transition-colors"
                      onClick={() => setIsFlaggedExpenseResponseModalOpen(true)}
                    >
                      Respond to Flag
                    </button>
                  </div>
                )}

                {/* Action Buttons for Auditor and President */}
                {(user?.role === "SKF Auditor" || user?.role === "SKF President") && status !== "Verified" && (
                  <div className="flex gap-3 pt-4">
                    <button
                      className="flex-1 px-6 py-2.5 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-lg transition-colors"
                      onClick={handleFlagClick}
                    >
                      Flag
                    </button>
                    <button
                      className="flex-1 px-6 py-2.5 bg-[#174499] hover:bg-[#0f2f6b] text-white rounded-lg transition-colors"
                      onClick={handleApproveClick}
                    >
                      Approve
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flagging Modal */}
      <FlaggingModal
        isOpen={isFlaggingModalOpen}
        onClose={() => setIsFlaggingModalOpen(false)}
        onConfirm={handleFlaggingConfirm}
        lineItemTitle={lineItemTitle}
        selectedExpenses={getSelectedExpenses()}
      />

      {/* Flagged Expense Response Modal */}
      <FlaggedExpenseResponseModal
        isOpen={isFlaggedExpenseResponseModalOpen}
        onClose={() => setIsFlaggedExpenseResponseModalOpen(false)}
        onConfirm={handleFlaggedExpenseResponseConfirm}
        flaggingData={flaggingData || null}
      />
    </div>
  );
}