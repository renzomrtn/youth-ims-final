import { useState, useRef, useEffect } from "react";
import { Upload, X } from "lucide-react";
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvbG55cHR0eGhhaWRpZ2hwZWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyNzQ2MzIsImV4cCI6MjA4Mjg1MDYzMn0.A00que2Eho7ufWguNNTLh2srHt8Jk_lVMTyJCi0a-t0';

interface ExpenseVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export interface ExpenseVerificationData {
  lineItem: string;
  budget: number;
  expenditurePeriod: {
    from: string;
    to: string;
  };
  particulars: {
    id: string;
    description: string;
    amount: number;
    dateOfExpense: string;
    receipt?: File;
  }[];
}

// Simple UUID generator function
function generateId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const svgPaths = {
  p211dc000: "M18 6L6 18M6 6l12 12",
  p284e7f80: "M1 4l5.5 5.5L1 15",
  p133eaac0: "M6.5 1L12 7.5L6.5 14",
  p10583a50: "M6.5 14L1 7.5L6.5 1"
};

const lineItems = [
  { id: "LI-2025/810-2K2Q", name: "HIV/AIDS Awareness Seminar", budget: 25000.50, remaining: 2032.50 },
  { id: "LI-2025/909-9KCY", name: "Anti-Illegal Drugs Seminar", budget: 25000.50, remaining: 9032.50 },
  { id: "LI-2025/908-LTTC", name: "Leadership Training Camp", budget: 25000.50, remaining: 2032.50 },
  { id: "LI-2025/907-K98N", name: "Environmental Cleanup Drive", budget: 25000.50, remaining: 2032.50 },
  { id: "LI-2025/906-P48T", name: "Youth Sports Festival", budget: 25000.50, remaining: 2032.50 }
];

export function ExpenseVerificationModal({ isOpen, onClose, onSuccess }: ExpenseVerificationModalProps) {
  const [selectedLineItem, setSelectedLineItem] = useState("");
  const [budget, setBudget] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [lineItemSearchQuery, setLineItemSearchQuery] = useState("");
  const [isLineItemDropdownOpen, setIsLineItemDropdownOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // FIXED: Each particular now has a unique ID
  const [particulars, setParticulars] = useState([
    {
      id: generateId(),
      description: "",
      amount: 0,
      dateOfExpense: "",
      receipt: undefined as File | undefined
    }
  ]);

  const lineItemDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (lineItemDropdownRef.current && !lineItemDropdownRef.current.contains(event.target as Node)) {
        setIsLineItemDropdownOpen(false);
      }
    };
    if (isLineItemDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLineItemDropdownOpen]);

  const filteredLineItems = lineItems.filter(item =>
    item.id.toLowerCase().includes(lineItemSearchQuery.toLowerCase()) ||
    item.name.toLowerCase().includes(lineItemSearchQuery.toLowerCase())
  );

  const handleLineItemSelect = (item: typeof lineItems[0]) => {
    setSelectedLineItem(item.id);
    setLineItemSearchQuery(`${item.id} - ${item.name}`);
    setBudget(item.budget);
    setIsLineItemDropdownOpen(false);
  };

  const handleAmountChange = (index: number, value: string) => {
    if (value === "") {
      const newParticulars = [...particulars];
      newParticulars[index].amount = 0;
      setParticulars(newParticulars);
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      const newParticulars = [...particulars];
      newParticulars[index].amount = numValue;
      setParticulars(newParticulars);
    }
  };

  const incrementAmount = (index: number) => {
    const newParticulars = [...particulars];
    newParticulars[index].amount = (newParticulars[index].amount || 0) + 100;
    setParticulars(newParticulars);
  };

  const decrementAmount = (index: number) => {
    const newParticulars = [...particulars];
    newParticulars[index].amount = Math.max(0, (newParticulars[index].amount || 0) - 100);
    setParticulars(newParticulars);
  };

  const handleParticularChange = (index: number, field: string, value: string) => {
    const newParticulars = [...particulars];
    (newParticulars[index] as any)[field] = value;
    setParticulars(newParticulars);
  };

  const handleFileUpload = (index: number, file: File | undefined) => {
    const newParticulars = [...particulars];
    newParticulars[index].receipt = file;
    setParticulars(newParticulars);
  };

  // FIXED: Generate a new unique ID when adding a particular
  const addParticular = () => {
    setParticulars([
      ...particulars,
      { 
        id: generateId(),
        description: "", 
        amount: 0, 
        dateOfExpense: "", 
        receipt: undefined 
      }
    ]);
  };

  const removeParticular = (index: number) => {
    if (particulars.length > 1) {
      const newParticulars = particulars.filter((_, i) => i !== index);
      setParticulars(newParticulars);
    }
  };

  const totalAmount = particulars.reduce((sum, p) => sum + (p.amount || 0), 0);

  const handleConfirm = async () => {
    // Validation
    if (!selectedLineItem || !fromDate || !toDate) {
      alert("Please fill in all required fields.");
      return;
    }
    const hasInvalidParticular = particulars.some(p => 
      !p.description.trim() || p.amount <= 0 || !p.dateOfExpense
    );
    if (hasInvalidParticular) {
      alert("Please complete all particulars with description, amount, and date.");
      return;
    }

    setIsSaving(true);

    try {
      // FIXED: Include the ID in each particular when sending to the API
      const expensePayload = {
        lineItem: selectedLineItem,
        budget: budget,
        expenditurePeriod: {
          from: fromDate,
          to: toDate
        },
        particulars: particulars.map(p => ({
          id: p.id, // Include the unique ID
          description: p.description,
          amount: p.amount,
          dateOfExpense: p.dateOfExpense,
          receiptName: p.receipt?.name || null,
          hasAttachment: !!p.receipt
        })),
        totalAmount: totalAmount,
        status: 'Pending'
      };

      // Call API - Supabase Edge Function
      const response = await fetch('https://zolnypttxhaidighpedk.supabase.co/functions/v1/make-server-0521b783/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(expensePayload),
      });

      if (!response.ok) {
        throw new Error('Failed to save expense');
      }

      const result = await response.json();
      console.log('Expense saved:', result);
      
      alert('Expense verification saved successfully!');
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess();
      }
      
      handleClose();
    } catch (error) {
      console.error('Error saving expense:', error);
      alert('Failed to save expense verification. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    setSelectedLineItem("");
    setBudget(0);
    setFromDate("");
    setToDate("");
    setLineItemSearchQuery("");
    // Reset with a new ID
    setParticulars([{ id: generateId(), description: "", amount: 0, dateOfExpense: "", receipt: undefined }]);
    setIsLineItemDropdownOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" role="dialog" aria-modal="true">
      <div className="bg-white rounded-[24px] w-[788px] max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#334870] h-[88px] rounded-t-[24px] z-10">
          <p className="absolute font-['Source_Sans_3',sans-serif] font-bold leading-[normal] left-[40px] text-[24px] text-nowrap text-white top-[27px]">
            Expense Verification
          </p>
          <button onClick={handleClose} className="absolute cursor-pointer left-[728px] size-[24px] top-[32px] hover:opacity-80 transition-opacity" disabled={isSaving}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p211dc000} stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="p-[40px] pt-[15px]">
          {/* Line Item */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">Line Item:</p>
            <div className="relative" ref={lineItemDropdownRef}>
              <input
                type="text"
                value={lineItemSearchQuery}
                onChange={(e) => { setLineItemSearchQuery(e.target.value); setIsLineItemDropdownOpen(true); }}
                onFocus={() => setIsLineItemDropdownOpen(true)}
                className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                placeholder="Search or Select a Line Item"
                disabled={isSaving}
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-[13px] h-[13px] pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p284e7f80} fill="#6D798E" />
              </svg>
              {isLineItemDropdownOpen && filteredLineItems.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-20 max-h-[200px] overflow-auto">
                  {filteredLineItems.map((item) => (
                    <button key={item.id} onClick={() => handleLineItemSelect(item)} className="w-full px-[16px] py-[10px] text-left hover:bg-gray-100 font-['Source_Sans_3',sans-serif] font-normal text-[16px] text-black">
                      {item.id} - {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Budget */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">Budget:</p>
            <div className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] bg-[#eee] flex items-center font-['Source_Sans_3',sans-serif] font-normal text-[16px] text-[#515151]">
              ₱{budget.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>

          {/* Expenditure Period */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">Expenditure Period:</p>
            <div className="flex gap-[27px]">
              <div className="flex-1 relative">
                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors" disabled={isSaving} />
              </div>
              <div className="flex-1 relative">
                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors" disabled={isSaving} />
              </div>
            </div>
          </div>

          <div className="bg-[#cacaca] h-[2px] mb-[17px]" />

          {/* Particulars */}
          {particulars.map((particular, index) => (
            <div key={particular.id} className="mb-[15px] relative">
              {particulars.length > 1 && (
                <button 
                  onClick={() => removeParticular(index)}
                  className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors z-20"
                  disabled={isSaving}
                >
                  <X size={14} />
                </button>
              )}

              <div className="flex gap-[27px] mb-[16px]">
                <div className="flex-1">
                  <p className="font-['Source_Sans_3',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">Particulars:</p>
                  <input
                    type="text"
                    value={particular.description}
                    onChange={(e) => handleParticularChange(index, 'description', e.target.value)}
                    className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                    placeholder="Enter particulars..."
                    disabled={isSaving}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-['Source_Sans_3',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">Amount:</p>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={particular.amount === 0 ? "" : particular.amount}
                      onChange={(e) => handleAmountChange(index, e.target.value)}
                      className="w-full h-[38px] rounded-[5px] border border-[#939393] pl-[30px] pr-[50px] font-['Source_Sans_3',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                      disabled={isSaving}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
                      <button onClick={() => incrementAmount(index)} className="w-[13px] h-[15px] hover:opacity-70" disabled={isSaving}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15"><path d={svgPaths.p133eaac0} fill="#6D798E" /></svg>
                      </button>
                      <button onClick={() => decrementAmount(index)} className="w-[13px] h-[15px] hover:opacity-70" disabled={isSaving}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15"><path d={svgPaths.p10583a50} fill="#6D798E" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-[16px]">
                <p className="font-['Source_Sans_3',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">Date of Expense:</p>
                <input type="date" value={particular.dateOfExpense} onChange={(e) => handleParticularChange(index, 'dateOfExpense', e.target.value)} className="w-[340px] h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3',sans-serif] font-normal text-[16px] text-[#515151] outline-none" disabled={isSaving} />
              </div>

              <label className={`block w-full h-[38px] rounded-[5px] border border-[#939393] bg-[#dedede] px-[16px] flex items-center justify-center gap-[8px] ${isSaving ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-[#d0d0d0]'} transition-colors mb-[15px]`}>
                <Upload className="w-[16px] h-[16px] text-[#515151]" />
                <span className="font-['Source_Sans_3',sans-serif] font-bold text-[16px] text-[#515151] truncate max-w-[90%]">
                  {particular.receipt ? particular.receipt.name : "Upload the Original Receipt for this Particular"}
                </span>
                <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload(index, e.target.files?.[0])} className="hidden" disabled={isSaving} />
              </label>
            </div>
          ))}

          {/* Add Another Particular */}
          <button onClick={addParticular} className="w-full h-[38px] rounded-[5px] border border-dashed border-[#939393] mb-[15px] font-['Source_Sans_3',sans-serif] font-medium text-[16px] text-[#515151] hover:bg-gray-50 transition-colors" disabled={isSaving}>
            Add another Particular
          </button>

          {/* Total Amount Spent */}
          <div className="bg-[#fefeff] h-[71px] rounded-[5px] border border-[#717171] flex items-center justify-between px-[23px] mb-[28px]">
            <p className="font-['Source_Sans_3',sans-serif] font-semibold text-[16px] text-black">Total Amount Spent:</p>
            <p className="font-['Source_Sans_3',sans-serif] font-normal text-[32px] text-black">
              ₱{totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-[16px]">
            <button onClick={handleClose} className="bg-[rgba(224,108,110,0.2)] h-[45px] px-[10px] rounded-[6px] w-[110px] border border-[#e06c6e] font-['Source_Sans_3',sans-serif] font-black text-[#e06c6e] text-[14px] hover:bg-[rgba(224,108,110,0.3)] transition-colors" disabled={isSaving}>
              Cancel
            </button>
            <button onClick={handleConfirm} className="bg-[#174499] h-[45px] px-[10px] rounded-[6px] w-[110px] font-['Source_Sans_3',sans-serif] font-black text-[14px] text-white hover:bg-[#0f2f6b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Confirm'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo usage
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Open Expense Verification
      </button>

      <ExpenseVerificationModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        onSuccess={() => {
          console.log('Expense saved successfully!');
          // Refresh your data here
        }}
      />
    </div>
  );
}