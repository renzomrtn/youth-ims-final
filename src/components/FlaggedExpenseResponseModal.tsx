import { X, FileImage, AlertCircle } from "lucide-react";
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
  corrections: Array<{
    expenseId: string;
    particular?: string;
    amount?: number;
    dateOfExpense?: string;
    attachment?: File;
    explanation: string;
  }>;
}

export function FlaggedExpenseResponseModal({
  isOpen,
  onClose,
  onConfirm,
  flaggingData,
}: FlaggedExpenseResponseModalProps) {
  const [selectedExpenseIndex, setSelectedExpenseIndex] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [allCorrections, setAllCorrections] = useState<{
    [expenseId: string]: {
      particular?: string;
      amount?: string;
      dateOfExpense?: string;
      explanation: string;
    };
  }>({});

  if (!isOpen || !flaggingData) return null;

  const currentExpense = flaggingData.selectedExpenses[selectedExpenseIndex];
  const fieldsToCorrect = flaggingData.fieldsToCorrect;
  const currentCorrections = allCorrections[currentExpense.id] || { explanation: "" };

  const updateCurrentCorrections = (updates: Partial<typeof currentCorrections>) => {
    setAllCorrections(prev => ({
      ...prev,
      [currentExpense.id]: {
        ...currentCorrections,
        ...updates
      }
    }));
  };

  const handleConfirm = () => {
    // Show the confirmation sub-modal instead of submitting immediately
    setShowConfirmation(true);
  };

  const finalSubmit = () => {
    const corrections = flaggingData.selectedExpenses.map(expense => {
      const correctionData = allCorrections[expense.id] || { explanation: "" };
      return {
        expenseId: expense.id,
        ...(fieldsToCorrect.particular && correctionData.particular ? { particular: correctionData.particular } : {}),
        ...(fieldsToCorrect.amount && correctionData.amount ? { amount: parseFloat(correctionData.amount) } : {}),
        ...(fieldsToCorrect.dateOfExpense && correctionData.dateOfExpense ? { dateOfExpense: correctionData.dateOfExpense } : {}),
        explanation: correctionData.explanation || ""
      };
    });

    const correctionData: CorrectionData = {
      lineItem: flaggingData.lineItem,
      corrections
    };
    
    onConfirm(correctionData);
    // Reset state
    setAllCorrections({});
    setSelectedExpenseIndex(0);
    setShowConfirmation(false);
    onClose();
  };

  const handleCancel = () => {
    setAllCorrections({});
    setSelectedExpenseIndex(0);
    setShowConfirmation(false);
    onClose();
  };

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-[788px] max-h-[90vh] overflow-y-auto shadow-xl relative">
        
        {showConfirmation && (
  <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/30">
    <div className="bg-white rounded-[24px] w-[788px] max-h-[90vh] overflow-auto shadow-2xl relative">
      
      {/* Header */}
      <div className="bg-[#334870] h-[88px] rounded-t-[24px] relative">
        <h2 className="absolute left-[40px] top-[27px] text-[24px] font-bold text-white">
          Confirm Corrections
        </h2>
        <button
          onClick={() => setShowConfirmation(false)}
          className="absolute right-[32px] top-[32px] text-white hover:opacity-80"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="p-[40px] pb-[32px]">

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <p className="text-blue-800 text-sm">
            Please review the corrections below before submitting. You may go back to edit if needed.
          </p>
        </div>

        {/* Line Item */}
        <section className="mb-6">
          <h3 className="text-[20px] font-semibold mb-3">Line Item</h3>
          <div className="bg-gray-50 rounded-lg p-4 text-sm">
            {flaggingData.lineItem}
          </div>
        </section>

        {/* Corrections Summary */}
        <section className="mb-6">
          <h3 className="text-[20px] font-semibold mb-4">
            Corrections ({flaggingData.selectedExpenses.length})
          </h3>

          <div className="space-y-4">
            {flaggingData.selectedExpenses.map((expense, index) => {
              const correction = allCorrections[expense.id];

              return (
                <div
                  key={expense.id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-[#174499] mb-3">
                    Expense {index + 1}
                  </h4>

                  <div className="grid grid-cols-[160px_1fr] gap-y-2 text-sm">
                    <span className="font-semibold text-gray-700">Original Particular:</span>
                    <span>{expense.particular}</span>

                    <span className="font-semibold text-gray-700">Original Amount:</span>
                    <span>{formatCurrency(expense.amount)}</span>

                    {correction?.particular && (
                      <>
                        <span className="font-semibold text-gray-700">Corrected Particular:</span>
                        <span>{correction.particular}</span>
                      </>
                    )}

                    {correction?.amount && (
                      <>
                        <span className="font-semibold text-gray-700">Corrected Amount:</span>
                        <span>{formatCurrency(parseFloat(correction.amount))}</span>
                      </>
                    )}

                    {correction?.dateOfExpense && (
                      <>
                        <span className="font-semibold text-gray-700">Corrected Date:</span>
                        <span>{correction.dateOfExpense}</span>
                      </>
                    )}

                    <span className="font-semibold text-gray-700">Explanation:</span>
                    <span>{correction?.explanation || "—"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-end gap-[20px] mt-8">
          <button
            onClick={() => setShowConfirmation(false)}
            className="bg-[rgba(172,172,172,0.2)] border border-[#acacac] h-[45px] w-[110px] rounded-[6px] font-black text-[#606060] hover:bg-[rgba(172,172,172,0.3)]"
          >
            Previous
          </button>
          <button
            onClick={finalSubmit}
            className="bg-[#174499] h-[45px] w-[110px] rounded-[6px] font-black text-white hover:bg-[#0f2f6b]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
)}


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
                <span className="font-semibold">Flagged by:</span> John Doakes • December 13, 2025
              </p>
            </div>
          </div>

          {/* Correction Fields */}
          <div className="grid grid-cols-2 gap-4 mb-6">
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
                    value={currentCorrections.amount || ""}
                    onChange={(e) => updateCurrentCorrections({ amount: e.target.value })}
                    className="w-full border border-[#939393] rounded-md px-4 py-2 focus:outline-none focus:border-[#174499]"
                    placeholder="₱0.00"
                  />
                </div>
              </>
            )}
          </div>

          {fieldsToCorrect.particular && (
            <div className="mb-6">
              <label className="block text-black mb-2">Corrected Particular:</label>
              <input
                type="text"
                value={currentCorrections.particular || ""}
                onChange={(e) => updateCurrentCorrections({ particular: e.target.value })}
                className="w-full border border-[#939393] rounded-md px-4 py-2 focus:outline-none focus:border-[#174499]"
                placeholder="Enter corrected particular"
              />
            </div>
          )}

          {fieldsToCorrect.dateOfExpense && (
            <div className="mb-6">
              <label className="block text-black mb-2">Corrected Date of Expense:</label>
              <input
                type="date"
                value={currentCorrections.dateOfExpense || ""}
                onChange={(e) => updateCurrentCorrections({ dateOfExpense: e.target.value })}
                className="w-full border border-[#939393] rounded-md px-4 py-2 focus:outline-none focus:border-[#174499]"
              />
            </div>
          )}

          <div className="mb-6">
            <label className="block text-black mb-2">Explanation for Correction:</label>
            <textarea
              value={currentCorrections.explanation}
              onChange={(e) => updateCurrentCorrections({ explanation: e.target.value })}
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