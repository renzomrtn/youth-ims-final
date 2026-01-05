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

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const updateCurrentCorrections = (updates: Partial<typeof currentCorrections>) => {
    setAllCorrections(prev => ({
      ...prev,
      [currentExpense.id]: {
        ...currentCorrections,
        ...updates
      }
    }));
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

    onConfirm({
      lineItem: flaggingData.lineItem,
      corrections
    });
    
    // Reset and Close
    handleCancel();
  };

  const handleCancel = () => {
    setAllCorrections({});
    setSelectedExpenseIndex(0);
    setShowConfirmation(false);
    onClose();
  };

  // --- SUB-COMPONENT: CONFIRMATION VIEW ---
  const ConfirmationView = () => (
    <div className="flex flex-col h-full">
      <div className="bg-[#334870] px-10 py-6 rounded-t-3xl relative">
        <h2 className="text-2xl font-bold text-white">Confirm Corrections</h2>
        <button onClick={() => setShowConfirmation(false)} className="absolute right-8 top-7 text-white hover:opacity-80">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-10 overflow-y-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <p className="text-blue-800 text-sm">
            Please review the corrections below before submitting. You may go back to edit if needed.
          </p>
        </div>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Line Item</h3>
          <div className="bg-gray-50 rounded-lg p-4 text-sm">{flaggingData.lineItem}</div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Corrections ({flaggingData.selectedExpenses.length})</h3>
          <div className="space-y-4">
            {flaggingData.selectedExpenses.map((expense, index) => {
              const correction = allCorrections[expense.id];
              return (
                <div key={expense.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <h4 className="font-semibold text-[#174499] mb-3">Expense {index + 1}</h4>
                  <div className="grid grid-cols-[160px_1fr] gap-y-2">
                    <span className="font-semibold text-gray-700">Original Particular:</span>
                    <span>{expense.particular}</span>
                    <span className="font-semibold text-gray-700">Original Amount:</span>
                    <span>{formatCurrency(expense.amount)}</span>
                    
                    {correction?.particular && (
                      <><span className="font-semibold text-gray-700">Corrected Particular:</span><span>{correction.particular}</span></>
                    )}
                    {correction?.amount && (
                      <><span className="font-semibold text-gray-700">Corrected Amount:</span><span>{formatCurrency(parseFloat(correction.amount))}</span></>
                    )}
                    {correction?.dateOfExpense && (
                      <><span className="font-semibold text-gray-700">Corrected Date:</span><span>{correction.dateOfExpense}</span></>
                    )}
                    <span className="font-semibold text-gray-700">Explanation:</span>
                    <span>{correction?.explanation || "—"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => setShowConfirmation(false)}
            className="px-8 py-2.5 border border-gray-300 rounded-md font-bold text-gray-600 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={finalSubmit}
            className="px-8 py-2.5 bg-[#174499] text-white rounded-md font-bold hover:bg-[#0f2f6b]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-[788px] max-h-[90vh] overflow-hidden shadow-xl relative">
        
        {showConfirmation ? (
          <ConfirmationView />
        ) : (
          <>
            {/* Main Form Header */}
            <div className="bg-[#e06c6e] px-10 py-5 rounded-t-3xl relative">
              <h2 className="text-2xl text-white mb-1">Flagged Expense - Action Required</h2>
              <p className="text-white opacity-90 text-sm">Line Item: {flaggingData.lineItem}</p>
              <button onClick={handleCancel} className="absolute right-8 top-8 text-white hover:bg-white/10 rounded-full p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Form Content */}
            <div className="px-10 py-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              {flaggingData.selectedExpenses.length > 1 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Responding to expense {selectedExpenseIndex + 1} of {flaggingData.selectedExpenses.length}
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {flaggingData.selectedExpenses.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedExpenseIndex(index)}
                        className={`px-4 py-2 rounded-md text-sm transition-colors ${
                          selectedExpenseIndex === index ? "bg-[#174499] text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                      >
                        Expense {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label className="block font-semibold mb-2">Original Submission:</label>
                <div className="border border-gray-300 rounded-lg p-4 space-y-3 bg-gray-50">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><p className="text-gray-500">Particular</p><p className="font-medium">{currentExpense.particular}</p></div>
                    <div><p className="text-gray-500">Amount</p><p className="font-medium">{formatCurrency(currentExpense.amount)}</p></div>
                    <div><p className="text-gray-500">Date</p><p className="font-medium">{currentExpense.date}</p></div>
                    <div><p className="text-gray-500">Attachment</p><FileImage className="w-4 h-4 text-gray-400" /></div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Verifier's Remarks:</label>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-900 mb-2">{flaggingData.remarks}</p>
                </div>
              </div>

              {/* Correction Inputs */}
              <div className="space-y-4">
                {fieldsToCorrect.amount && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Original Amount</label>
                      <div className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-500">
                        {formatCurrency(currentExpense.amount)}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Corrected Amount</label>
                      <input
                        type="number"
                        value={currentCorrections.amount || ""}
                        onChange={(e) => updateCurrentCorrections({ amount: e.target.value })}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#174499] outline-none"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                )}

                {fieldsToCorrect.particular && (
                  <div>
                    <label className="block text-sm mb-1">Corrected Particular</label>
                    <input
                      type="text"
                      value={currentCorrections.particular || ""}
                      onChange={(e) => updateCurrentCorrections({ particular: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#174499] outline-none"
                    />
                  </div>
                )}

                {fieldsToCorrect.dateOfExpense && (
                  <div>
                    <label className="block text-sm mb-1">Corrected Date</label>
                    <input
                      type="date"
                      value={currentCorrections.dateOfExpense || ""}
                      onChange={(e) => updateCurrentCorrections({ dateOfExpense: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#174499] outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm mb-1">Explanation</label>
                  <textarea
                    value={currentCorrections.explanation}
                    onChange={(e) => updateCurrentCorrections({ explanation: e.target.value })}
                    className="w-full h-32 border border-gray-300 rounded-md p-3 resize-none focus:ring-2 focus:ring-[#174499] outline-none"
                    placeholder="Provide details for this correction..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button onClick={handleCancel} className="px-8 py-2.5 text-red-600 font-semibold hover:bg-red-50 rounded-md">
                  Cancel
                </button>
                <button
                  onClick={() => setShowConfirmation(true)}
                  className="px-8 py-2.5 bg-[#174499] text-white rounded-md font-semibold hover:bg-[#0f2d66]"
                >
                  Confirm
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}