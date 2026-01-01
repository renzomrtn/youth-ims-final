import { X, FileImage } from "lucide-react";
import { useState } from "react";
import { FlaggingData } from "./FlaggingModal";

interface FlaggedExpenseResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (corrections: CorrectionData) => void;
  flaggingData: FlaggingData | null;
}

export interface CorrectionData {
  lineItem: string;
  expenseId: string;
  corrections: {
    particular?: string;
    amount?: number;
    dateOfExpense?: string;
    attachment?: File;
  };
  explanation: string;
}

export function FlaggedExpenseResponseModal({
  isOpen,
  onClose,
  onConfirm,
  flaggingData,
}: FlaggedExpenseResponseModalProps) {
  const [selectedExpenseIndex, setSelectedExpenseIndex] = useState(0);
  const [corrections, setCorrections] = useState<{
    particular?: string;
    amount?: string;
    dateOfExpense?: string;
  }>({});
  const [explanation, setExplanation] = useState("");

  if (!isOpen || !flaggingData) return null;

  const currentExpense = flaggingData.selectedExpenses[selectedExpenseIndex];
  const fieldsToCorrect = flaggingData.fieldsToCorrect;

  const handleConfirm = () => {
    const correctionData: CorrectionData = {
      lineItem: flaggingData.lineItem,
      expenseId: currentExpense.id,
      corrections: {
        ...(fieldsToCorrect.particular && corrections.particular ? { particular: corrections.particular } : {}),
        ...(fieldsToCorrect.amount && corrections.amount ? { amount: parseFloat(corrections.amount) } : {}),
        ...(fieldsToCorrect.dateOfExpense && corrections.dateOfExpense ? { dateOfExpense: corrections.dateOfExpense } : {}),
      },
      explanation,
    };
    onConfirm(correctionData);
    // Reset form
    setCorrections({});
    setExplanation("");
    setSelectedExpenseIndex(0);
    onClose();
  };

  const handleCancel = () => {
    // Reset form
    setCorrections({});
    setExplanation("");
    setSelectedExpenseIndex(0);
    onClose();
  };

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-[788px] max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="bg-[#e06c6e] px-10 py-5 rounded-t-3xl relative">
          <h2 className="text-2xl text-white mb-1">Flagged Expense - Action Required</h2>
          <p className="text-white opacity-90">Line Item: {flaggingData.lineItem}</p>
          <button
            onClick={handleCancel}
            className="absolute right-8 top-8 text-white hover:bg-white/10 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-10 py-6">
          {/* Multiple expenses selector */}
          {flaggingData.selectedExpenses.length > 1 && (
            <div className="mb-6">
              <label className="block text-black mb-2">
                Responding to expense {selectedExpenseIndex + 1} of {flaggingData.selectedExpenses.length}
              </label>
              <div className="flex gap-2">
                {flaggingData.selectedExpenses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExpenseIndex(index)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedExpenseIndex === index
                        ? "bg-[#174499] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Expense {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Original Submission */}
          <div className="mb-6">
            <label className="block text-black mb-2">Original Submission:</label>
            <div className="border border-[#939393] rounded-md p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-black mb-1">Particular:</p>
                  <p className="text-black">{currentExpense.particular}</p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-1">Amount:</p>
                  <p className="text-black">{formatCurrency(currentExpense.amount)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-black mb-1">Date of Expense:</p>
                  <p className="text-black">{currentExpense.date}</p>
                </div>
                <div>
                  <p className="font-semibold text-black mb-1">Attachment:</p>
                  <FileImage className="w-4 h-4 text-[#6d798e]" />
                </div>
              </div>
            </div>
          </div>

          {/* Verifier's Remarks */}
          <div className="mb-6">
            <label className="block text-black mb-2">Verifier's Remarks:</label>
            <div className="bg-[#ffeded] border border-[#ff5858] rounded-md p-5">
              <p className="text-black mb-3">{flaggingData.remarks}</p>
              <p className="text-black text-sm">
                <span className="font-semibold">Flagged by:</span> {/* Would come from user data */} John Doakes • December 13, 2025
              </p>
            </div>
          </div>

          {/* Correction Fields - Only show fields that need correction */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Original Amount - Always show if amount needs correction */}
            {fieldsToCorrect.amount && (
              <>
                <div>
                  <label className="block text-black mb-2">Original Amount:</label>
                  <div className="bg-[#eee] border border-[#939393] rounded-md px-4 py-2">
                    <p className="text-[#515151]">{formatCurrency(currentExpense.amount)}</p>
                  </div>
                </div>
                <div>
                  <label className="block text-black mb-2">Corrected Amount:</label>
                  <input
                    type="number"
                    step="0.01"
                    value={corrections.amount || ""}
                    onChange={(e) => setCorrections({ ...corrections, amount: e.target.value })}
                    className="w-full border border-[#939393] rounded-md px-4 py-2 focus:outline-none focus:border-[#174499]"
                    placeholder="₱0.00"
                  />
                </div>
              </>
            )}
          </div>

          {/* Corrected Particular */}
          {fieldsToCorrect.particular && (
            <div className="mb-6">
              <label className="block text-black mb-2">Corrected Particular:</label>
              <input
                type="text"
                value={corrections.particular || ""}
                onChange={(e) => setCorrections({ ...corrections, particular: e.target.value })}
                className="w-full border border-[#939393] rounded-md px-4 py-2 focus:outline-none focus:border-[#174499]"
                placeholder="Enter corrected particular"
              />
            </div>
          )}

          {/* Corrected Date */}
          {fieldsToCorrect.dateOfExpense && (
            <div className="mb-6">
              <label className="block text-black mb-2">Corrected Date of Expense:</label>
              <input
                type="date"
                value={corrections.dateOfExpense || ""}
                onChange={(e) => setCorrections({ ...corrections, dateOfExpense: e.target.value })}
                className="w-full border border-[#939393] rounded-md px-4 py-2 focus:outline-none focus:border-[#174499]"
              />
            </div>
          )}

          {/* Corrected Attachment */}
          {fieldsToCorrect.attachment && (
            <div className="mb-6">
              <label className="block text-black mb-2">Upload Corrected Attachment:</label>
              <input
                type="file"
                className="w-full border border-[#939393] rounded-md px-4 py-2 focus:outline-none focus:border-[#174499]"
                accept="image/*,.pdf"
              />
            </div>
          )}

          {/* Explanation */}
          <div className="mb-6">
            <label className="block text-black mb-2">Explanation for Correction:</label>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              className="w-full h-[197px] border border-[#939393] rounded-md p-3 resize-none focus:outline-none focus:border-[#174499]"
              placeholder="Explain why the correction was made..."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-[rgba(224,108,110,0.2)] border border-[#e06c6e] text-[#e06c6e] rounded-md hover:bg-[rgba(224,108,110,0.3)] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-6 py-3 bg-[#174499] text-white rounded-md hover:bg-[#0f2d66] transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
