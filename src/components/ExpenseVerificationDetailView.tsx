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
  expenseItemId: string; // Add this to identify which expense item to update
  lineItemId: string;
  lineItemTitle: string;
  lineItemArea: string;
  budget: number;
  totalAmountSpent: number;
  fromDate: string;
  toDate: string;
  submittedBy: string;
  status: "Verified" | "Unverified" | "Pending" | "Flagged";
  flaggingData?: FlaggingData | null; // Pass flagging data for flagged items
  particulars?: Particular[]; // Add particulars prop
}

export function ExpenseVerificationDetailView({
  darkMode,
  onBack,
  expenseItemId, // Accept the expense item ID
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
  particulars, // Accept particulars
}: ExpenseVerificationDetailViewProps) {
  const { user } = useAuth();
  const { updateExpenseItem } = useExpenseVerification();
  const [selectedExpenseIds, setSelectedExpenseIds] = useState<string[]>([]);
  const [isFlaggingModalOpen, setIsFlaggingModalOpen] = useState(false);
  const [isFlaggedExpenseResponseModalOpen, setIsFlaggedExpenseResponseModalOpen] = useState(false);

  // Use actual particulars if provided, otherwise fallback to mock data
  const expenseItems: ExpenseItem[] = particulars 
    ? particulars.map(p => ({
        id: p.id,
        particular: p.description,
        amount: p.amount,
        date: p.dateOfExpense,
        hasAttachment: p.hasAttachment
      }))
    : [
      {
        id: "1",
        particular: "Venue Rental (1-day seminar)",
        amount: 12000.00,
        date: "September 1, 2025",
        hasAttachment: true,
      },
      {
        id: "2",
        particular: "Meals and Snacks for Participants (80 pax)",
        amount: 15000.00,
        date: "September 1, 2025",
        hasAttachment: true,
      },
      {
        id: "3",
        particular: "Honorarium for Speaker / Resource Person",
        amount: 8000.00,
        date: "September 1, 2025",
        hasAttachment: true,
      },
      {
        id: "4",
        particular: "Seminar Kits (IDs, pens, notebooks, folders)",
        amount: 11000.00,
        date: "September 1, 2025",
        hasAttachment: true,
      },
      {
        id: "5",
        particular: "IEC Materials Printing (Tarpaulin, flyers, posters)",
        amount: 9555.56,
        date: "September 1, 2025",
        hasAttachment: true,
      },
    ];

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

  const handleApproveClick = () => {
    // Update the expense item status to "Verified"
    updateExpenseItem(expenseItemId, {
      status: "Verified",
      flaggingData: null // Clear any flagging data
    });
    
    // Reset selection
    setSelectedExpenseIds([]);
    
    // Go back to the list view to see the updated status
    onBack();
  };

  const handleFlaggingConfirm = (data: FlaggingData) => {
    console.log("Flagging data:", data);
    
    // Add flagged by and date information
    const enrichedFlaggingData = {
      ...data,
      flaggedBy: user?.name || "Unknown User",
      flaggedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    
    // Update the expense item status to "Flagged" and save flagging data
    updateExpenseItem(expenseItemId, {
      status: "Flagged",
      flaggingData: enrichedFlaggingData
    });
    
    // Reset selection and close modal
    setSelectedExpenseIds([]);
    setIsFlaggingModalOpen(false);
    
    // Optionally go back to the list view to see the updated status
    onBack();
  };

  const handleFlaggedExpenseResponseConfirm = (data: CorrectionData) => {
    console.log("Correction data:", data);
    
    // Apply corrections to the particulars
    if (particulars) {
      const updatedParticulars = particulars.map(particular => {
        // Find if this particular has corrections
        const correction = data.corrections.find(c => c.expenseId === particular.id);
        
        if (correction) {
          // Apply corrections to this particular
          return {
            ...particular,
            description: correction.particular || particular.description,
            amount: correction.amount || particular.amount,
            dateOfExpense: correction.dateOfExpense 
              ? new Date(correction.dateOfExpense).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })
              : particular.dateOfExpense,
          };
        }
        
        return particular;
      });

      // Calculate new total amount spent
      const newTotalAmountSpent = updatedParticulars.reduce((sum, p) => sum + p.amount, 0);
      
      // Update the expense item with corrected particulars and new total
      updateExpenseItem(expenseItemId, {
        status: "Pending",
        flaggingData: null,
        particulars: updatedParticulars,
        totalAmountSpent: newTotalAmountSpent
      });
    } else {
      // If no particulars, just update status
      updateExpenseItem(expenseItemId, {
        status: "Pending",
        flaggingData: null
      });
    }
    
    // Reset and close modal
    setSelectedExpenseIds([]);
    setIsFlaggedExpenseResponseModalOpen(false);
    
    // Go back to the list view to see the updated status
    onBack();
  };

  const getSelectedExpenses = () => {
    return expenseItems.filter((item) => selectedExpenseIds.includes(item.id));
  };

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Verified":
        return (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#d1fae5] border border-[#6ee7b7] text-[#047857]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] mr-2"></span>
            <span className="text-xs">Verified</span>
          </div>
        );
      case "Unverified":
        return (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fffbeb] border border-[#fe9a00] text-[#e17100]">
            <span className="w-2 h-2 rounded-full bg-[#fe9a00] mr-2"></span>
            <span className="text-xs">Unverified</span>
          </div>
        );
      case "Pending":
        return (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-gray-600">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
            <span className="text-xs">Pending</span>
          </div>
        );
      case "Flagged":
        return (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fff7f7] border border-[#fe0000] text-[#e10000]">
            <span className="w-2 h-2 rounded-full bg-[#fe0000] mr-2"></span>
            <span className="text-xs">Flagged</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f3f3f3] dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg mx-8 mt-8 mb-8">
        {/* Tabs - Showing Current Verifications as active */}
        <div className="px-8 pt-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-8">
            {["Current Verifications", "Past Verifications", "Verifications Monitoring"].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-1 relative ${
                  tab === "Current Verifications"
                    ? "text-[#155dfc] dark:text-blue-400"
                    : "text-[#4a5565] dark:text-gray-400"
                }`}
              >
                <span>{tab}</span>
                {tab === "Current Verifications" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#155dfc] dark:bg-blue-400" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Back Button and Status Badge */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-black dark:text-white hover:text-[#3b5998] dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            {getStatusBadge(status)}
          </div>

          {/* Line Item Details */}
          <div className="mb-8">
            <h2 className="text-xl text-black dark:text-white mb-4">
              Line Item: <br />
              {lineItemTitle}
            </h2>

            <div className="space-y-2 text-black dark:text-white">
              <p>
                <span className="font-semibold">Line Item Information:</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">ID:</span> {lineItemId}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Area of Advocacy:</span> {lineItemArea}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Budget:</span> {formatCurrency(budget)}
              </p>
            </div>

            <div className="mt-4 space-y-2 text-black dark:text-white">
              <p>
                <span className="font-semibold">Total Amount Spent:</span> <br />
                {formatCurrency(totalAmountSpent)}
              </p>
            </div>

            <div className="mt-4 space-y-2 text-black dark:text-white">
              <p>
                <span className="font-semibold">Expenditure Period:</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">From:</span> {fromDate}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">To:</span> {toDate}
              </p>
            </div>

            <div className="mt-4 space-y-2 text-black dark:text-white">
              <p>
                <span className="font-semibold">Submitted By:</span> <br />
                {submittedBy}
              </p>
            </div>
          </div>

          {/* Expense Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  {/* Only show checkbox column for Auditor/President and when NOT Verified */}
                  {(user?.role === "SKF Auditor" || user?.role === "SKF President") && status !== "Verified" && (
                    <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300 w-16">
                      {/* Checkbox column */}
                    </th>
                  )}
                  <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                    Particulars
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                    Date of Expense
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                    Attachment
                  </th>
                </tr>
              </thead>
              <tbody>
                {expenseItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    {/* Only show checkboxes for Auditor/President and when NOT Verified */}
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
                    <td className="px-6 py-4">
                      <p className="text-black dark:text-white">{item.particular}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-black dark:text-white">{formatCurrency(item.amount)}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-black dark:text-white">{item.date}</p>
                    </td>
                    <td className="px-6 py-4">
                      {item.hasAttachment && (
                        <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors">
                          <FileImage className="w-4 h-4 text-[#6d798e] dark:text-gray-400" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Budget Summary and Action Buttons */}
          <div className="mt-8 flex items-end justify-end">
            <div className="w-96 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="text-black dark:text-white">Budget:</span>
                <span className="text-xl text-black dark:text-white">{formatCurrency(budget)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="text-black dark:text-white">Total Amount Spent:</span>
                <span className="text-xl text-black dark:text-white">{formatCurrency(totalAmountSpent)}</span>
              </div>

              {/* Action Buttons - Different for different roles */}
              {user?.role === "SKF Treasurer" && status === "Flagged" && (
                <div className="flex justify-end pt-4">
                  <button
                    className="px-8 py-2.5 bg-[#174499] hover:bg-[#0f2d66] text-white rounded-lg transition-colors"
                    onClick={() => setIsFlaggedExpenseResponseModalOpen(true)}
                  >
                    Respond to Flag
                  </button>
                </div>
              )}

              {/* Action Buttons - Only show for Auditor and President and when NOT Verified */}
              {(user?.role === "SKF Auditor" || user?.role === "SKF President") && status !== "Verified" && (
                <div className="flex gap-3 pt-4">
                  <button
                    className="flex-1 px-6 py-2.5 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-lg transition-colors"
                    onClick={handleFlagClick}
                  >
                    Flag
                  </button>
                  <button
                    className="flex-1 px-6 py-2.5 bg-[#3b5998] hover:bg-[#2d4373] text-white rounded-lg transition-colors"
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