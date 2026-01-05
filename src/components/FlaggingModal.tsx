import { X, Check } from "lucide-react";
import { useState } from "react";

interface ExpenseItem {
  id: string;
  particular: string;
  amount: number;
  date: string;
}

interface FlaggingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: FlaggingData) => void;
  lineItemTitle: string;
  selectedExpenses: ExpenseItem[];
}

export interface FlaggingData {
  lineItem: string;
  selectedExpenses: ExpenseItem[];
  fieldsToCorrect: {
    particular: boolean;
    amount: boolean;
    dateOfExpense: boolean;
    attachment: boolean;
  };
  remarks: string;
}

export function FlaggingModal({
  isOpen,
  onClose,
  onConfirm,
  lineItemTitle,
  selectedExpenses,
}: FlaggingModalProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [fieldsToCorrect, setFieldsToCorrect] = useState({
    particular: false,
    amount: false,
    dateOfExpense: false,
    attachment: false,
  });
  const [remarks, setRemarks] = useState("");

  if (!isOpen) return null;

  const handleCheckboxChange = (field: keyof typeof fieldsToCorrect) => {
    setFieldsToCorrect((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const resetAndClose = () => {
    setFieldsToCorrect({
      particular: false,
      amount: false,
      dateOfExpense: false,
      attachment: false,
    });
    setRemarks("");
    setShowConfirmation(false);
    onClose();
  };

  const handleFinalConfirm = () => {
    const flaggingData: FlaggingData = {
      lineItem: lineItemTitle,
      selectedExpenses,
      fieldsToCorrect,
      remarks,
    };
    onConfirm(flaggingData);
    resetAndClose();
  };

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Helper to get labels for selected checkboxes
  const getSelectedFieldsLabels = () => {
    const labels: string[] = [];
    if (fieldsToCorrect.particular) labels.push("Particular");
    if (fieldsToCorrect.amount) labels.push("Amount");
    if (fieldsToCorrect.dateOfExpense) labels.push("Date of Expense");
    if (fieldsToCorrect.attachment) labels.push("Attachment");
    return labels;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-[788px] max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="bg-[#334870] px-10 py-7 rounded-t-3xl relative">
          <h2 className="text-2xl text-white">
            {showConfirmation ? "Confirm Flagging" : "Flagging"}
          </h2>
          <button
            onClick={resetAndClose}
            className="absolute right-8 top-8 text-white hover:bg-white/10 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-10 py-6">
          {!showConfirmation ? (
            /* STEP 1: INPUT FORM */
            <>
              <div className="mb-6">
                <label className="block text-black mb-2 font-medium">Line Item:</label>
                <div className="bg-[#eee] border border-[#939393] rounded-md px-4 py-2">
                  <p className="text-[#515151]">{lineItemTitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-black mb-2 font-medium">Selected Entries:</label>
                <div className="space-y-3">
                  {selectedExpenses.map((expense) => (
                    <div key={expense.id} className="text-black bg-gray-50 p-2 rounded border border-gray-100">
                      <p className="font-semibold">{expense.particular}</p>
                      <p className="text-sm">
                        {formatCurrency(expense.amount)} - {expense.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-black mb-3 font-medium">
                  Which field(s) needs to be corrected?
                </label>
                <div className="space-y-3">
                  {(Object.keys(fieldsToCorrect) as Array<keyof typeof fieldsToCorrect>).map((field) => (
                    <label key={field} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={fieldsToCorrect[field]}
                        onChange={() => handleCheckboxChange(field)}
                        className="w-[18px] h-[18px] border-2 border-[#7b7b7b] rounded cursor-pointer accent-[#174499]"
                      />
                      <span className="text-black capitalize">
                        {field === 'dateOfExpense' ? 'Date of Expense' : field}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-black mb-2 font-medium">Remarks:</label>
                <textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full h-[150px] border border-[#939393] rounded-md p-3 resize-none focus:outline-none focus:border-[#174499]"
                  placeholder="Enter your remarks here..."
                />
              </div>
            </>
          ) : (
            /* STEP 2: SUMMARY VIEW */
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-[#174499] p-4 mb-4">
                <p className="text-[#174499] font-medium">Please review the flagging details before submitting.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <section>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Target Line Item</h4>
                  <p className="text-black font-medium text-lg">{lineItemTitle}</p>
                </section>

                <section>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Items to Flag ({selectedExpenses.length})</h4>
                  <div className="max-h-[150px] overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50">
                    {selectedExpenses.map(item => (
                      <div key={item.id} className="py-1 border-b last:border-0 border-gray-200">
                        <span className="font-medium">{item.particular}</span> — <span className="text-gray-600">{formatCurrency(item.amount)}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Fields for Correction</h4>
                  <div className="flex flex-wrap gap-2">
                    {getSelectedFieldsLabels().map(label => (
                      <span key={label} className="bg-[#334870] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <Check className="w-3 h-3" /> {label}
                      </span>
                    ))}
                    {getSelectedFieldsLabels().length === 0 && <span className="text-gray-400 italic">None selected</span>}
                  </div>
                </section>

                <section>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Remarks</h4>
                  <p className="text-black bg-[#eee] p-4 rounded-md italic">
                    {remarks || "No remarks provided."}
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={showConfirmation ? () => setShowConfirmation(false) : resetAndClose}
              className="px-6 py-3 bg-[rgba(224,108,110,0.2)] border border-[#e06c6e] text-[#e06c6e] rounded-md hover:bg-[rgba(224,108,110,0.3)] transition-colors font-medium"
            >
              {showConfirmation ? "Back to Edit" : "Cancel"}
            </button>
            <button
              onClick={showConfirmation ? handleFinalConfirm : () => setShowConfirmation(true)}
              disabled={selectedExpenses.length === 0}
              className="px-6 py-3 bg-[#174499] text-white rounded-md hover:bg-[#0f2d66] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {showConfirmation ? "Submit Flag" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}