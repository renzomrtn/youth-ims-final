import { X } from "lucide-react";
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

  const handleConfirm = () => {
    const flaggingData: FlaggingData = {
      lineItem: lineItemTitle,
      selectedExpenses,
      fieldsToCorrect,
      remarks,
    };
    onConfirm(flaggingData);
    // Reset form
    setFieldsToCorrect({
      particular: false,
      amount: false,
      dateOfExpense: false,
      attachment: false,
    });
    setRemarks("");
    onClose();
  };

  const handleCancel = () => {
    // Reset form
    setFieldsToCorrect({
      particular: false,
      amount: false,
      dateOfExpense: false,
      attachment: false,
    });
    setRemarks("");
    onClose();
  };

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-[788px] max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="bg-[#334870] px-10 py-7 rounded-t-3xl relative">
          <h2 className="text-2xl text-white">Flagging</h2>
          <button
            onClick={handleCancel}
            className="absolute right-8 top-8 text-white hover:bg-white/10 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-10 py-6">
          {/* Line Item */}
          <div className="mb-6">
            <label className="block text-black mb-2">Line Item:</label>
            <div className="bg-[#eee] border border-[#939393] rounded-md px-4 py-2">
              <p className="text-[#515151]">{lineItemTitle}</p>
            </div>
          </div>

          {/* Selected Entries */}
          <div className="mb-6">
            <label className="block text-black mb-2">Selected Entries:</label>
            <div className="space-y-3">
              {selectedExpenses.length === 0 ? (
                <p className="text-gray-500">No entries selected</p>
              ) : (
                selectedExpenses.map((expense) => (
                  <div key={expense.id} className="text-black">
                    <p className="font-semibold">{expense.particular}</p>
                    <p className="text-sm">
                      {formatCurrency(expense.amount)} - {expense.date}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Fields to Correct */}
          <div className="mb-6">
            <label className="block text-black mb-3">
              Which field(s) needs to be corrected?
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={fieldsToCorrect.particular}
                  onChange={() => handleCheckboxChange("particular")}
                  className="w-[18px] h-[18px] border-2 border-[#7b7b7b] rounded cursor-pointer"
                />
                <span className="text-black">Particular</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={fieldsToCorrect.amount}
                  onChange={() => handleCheckboxChange("amount")}
                  className="w-[18px] h-[18px] border-2 border-[#7b7b7b] rounded cursor-pointer"
                />
                <span className="text-black">Amount</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={fieldsToCorrect.dateOfExpense}
                  onChange={() => handleCheckboxChange("dateOfExpense")}
                  className="w-[18px] h-[18px] border-2 border-[#7b7b7b] rounded cursor-pointer"
                />
                <span className="text-black">Date of Expense</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={fieldsToCorrect.attachment}
                  onChange={() => handleCheckboxChange("attachment")}
                  className="w-[18px] h-[18px] border-2 border-[#7b7b7b] rounded cursor-pointer"
                />
                <span className="text-black">Attachment</span>
              </label>
            </div>
          </div>

          {/* Remarks */}
          <div className="mb-6">
            <label className="block text-black mb-2">Remarks:</label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full h-[197px] border border-[#939393] rounded-md p-3 resize-none focus:outline-none focus:border-[#174499]"
              placeholder="Enter your remarks here..."
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
              disabled={selectedExpenses.length === 0}
              className="px-6 py-3 bg-[#174499] text-white rounded-md hover:bg-[#0f2d66] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
