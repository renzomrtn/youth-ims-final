import { useState, useRef, useEffect } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

interface AddFundsModalProps {
  isOpen: boolean;
  onClose: () => void;
  budgetType: "annual" | "supplemental";
  onConfirm: (data: { fiscalYear: string; amount: number; recordId: string }) => void;
}

export interface AddFundsData {
  fiscalYear: string;
  amount: number;
  recordId: string;
}

const fiscalYears = ["2025", "2024", "2023"];
const recordIds = ["RID-2024-001", "RID-2024-002", "RID-2024-003", "RID-2023-001", "RID-2023-002"];

export function AddFundsModal({ isOpen, onClose, budgetType, onConfirm }: AddFundsModalProps) {
  const [fiscalYear, setFiscalYear] = useState("");
  const [amount, setAmount] = useState(0);
  const [recordId, setRecordId] = useState("");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isRecordDropdownOpen, setIsRecordDropdownOpen] = useState(false);
  const [recordSearchQuery, setRecordSearchQuery] = useState("");
  
  const recordDropdownRef = useRef<HTMLDivElement>(null);
  const yearDropdownRef = useRef<HTMLDivElement>(null);

  const filteredRecordIds = recordIds.filter(id =>
    id.toLowerCase().includes(recordSearchQuery.toLowerCase())
  );

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (recordDropdownRef.current && !recordDropdownRef.current.contains(event.target as Node)) {
        setIsRecordDropdownOpen(false);
      }
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target as Node)) {
        setIsYearDropdownOpen(false);
      }
    };

    if (isRecordDropdownOpen || isYearDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isRecordDropdownOpen, isYearDropdownOpen]);

  const handleConfirm = () => {
    if (!fiscalYear || amount <= 0 || !recordId) {
      alert("Please fill in all fields.");
      return;
    }
    onConfirm({ fiscalYear, amount, recordId });
    handleClose();
  };

  const handleClose = () => {
    setFiscalYear("");
    setAmount(0);
    setRecordId("");
    setRecordSearchQuery("");
    setIsYearDropdownOpen(false);
    setIsRecordDropdownOpen(false);
    onClose();
  };

  const incrementAmount = () => {
    setAmount(prev => prev + 1000);
  };

  const decrementAmount = () => {
    setAmount(prev => Math.max(0, prev - 1000));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl w-[788px] relative shadow-2xl">
        {/* Header */}
        <div className="bg-[#334870] h-[88px] rounded-t-3xl px-10 flex items-center justify-between">
          <h2 className="text-2xl text-white">Add Funds</h2>
          <button
            onClick={handleClose}
            className="text-white hover:bg-white/10 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-10 py-8">
          <h3 className="text-2xl text-black mb-6">{budgetType === "annual" ? "Annual Budget:" : "Supplemental Budget:"}</h3>

          {/* Fiscal Year */}
          <div className="mb-6">
            <label className="block text-black mb-2">Fiscal Year:</label>
            <div className="relative" ref={yearDropdownRef}>
              <button
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="w-full h-[38px] px-4 border border-[#939393] rounded-md flex items-center justify-between text-[#515151] hover:border-gray-500 transition-colors"
              >
                <span className={fiscalYear ? "text-black" : "text-[#515151]"}>
                  {fiscalYear || "Select Fiscal Year"}
                </span>
                <div className="flex flex-col gap-0.5">
                  <ChevronUp className="w-3 h-3 text-[#6D798E]" />
                  <ChevronDown className="w-3 h-3 text-[#6D798E]" />
                </div>
              </button>
              {isYearDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-md shadow-lg z-10 max-h-40 overflow-y-auto">
                  {fiscalYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setFiscalYear(year);
                        setIsYearDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-black"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Amount */}
          <div className="mb-6">
            <label className="block text-black mb-2">Amount:</label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-[38px] px-4 border border-[#939393] rounded-md text-[#515151] focus:outline-none focus:border-[#174499]"
                placeholder="₱0.00"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                <button
                  onClick={incrementAmount}
                  className="text-[#6D798E] hover:text-[#174499] transition-colors"
                >
                  <ChevronUp className="w-3 h-3" />
                </button>
                <button
                  onClick={decrementAmount}
                  className="text-[#6D798E] hover:text-[#174499] transition-colors"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Evidence (Record ID) */}
          <div className="mb-8">
            <label className="block text-black mb-2">Evidence (Record ID):</label>
            <div className="relative" ref={recordDropdownRef}>
              <input
                type="text"
                value={recordSearchQuery}
                onChange={(e) => {
                  setRecordSearchQuery(e.target.value);
                  setIsRecordDropdownOpen(true);
                }}
                onFocus={() => setIsRecordDropdownOpen(true)}
                className="w-full h-[38px] px-4 border border-[#939393] rounded-md text-[#515151] focus:outline-none focus:border-[#174499]"
                placeholder="Search or Select a Record ID"
              />
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D798E] pointer-events-none" />
              {isRecordDropdownOpen && filteredRecordIds.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-md shadow-lg z-10 max-h-40 overflow-y-auto">
                  {filteredRecordIds.map((id) => (
                    <button
                      key={id}
                      onClick={() => {
                        setRecordId(id);
                        setRecordSearchQuery(id);
                        setIsRecordDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-black"
                    >
                      {id}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={handleClose}
              className="w-[110px] h-[45px] border-2 border-[#e06c6e] bg-[rgba(224,108,110,0.2)] text-[#e06c6e] rounded-md hover:bg-[rgba(224,108,110,0.3)] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="w-[110px] h-[45px] bg-[#174499] text-white rounded-md hover:bg-[#123a7d] transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}