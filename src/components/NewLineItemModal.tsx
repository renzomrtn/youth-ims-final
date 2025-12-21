import { useState, useRef, useEffect } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import svgPaths from "../imports/svg-1s3e32vqqq";
import { validateText, VALIDATION_MESSAGE, validateNumber, NUMBER_VALIDATION_MESSAGE } from "../utils/textValidation";

interface NewLineItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: NewLineItemData) => void;
}

export interface NewLineItemData {
  sourceOfFund: string;
  lineItemName: string;
  activityType: string;
  advocacyArea?: string;
  needsId?: string;
  justification?: string;
  amountToAllocate: number;
  implementationPeriod: {
    from: string;
    to: string;
  };
}

const sourceOfFundOptions = ["Annual", "Supplemental"];
const activityTypeOptions = [
  "Projects/Programs/Activities (PPA)",
  "General Administrative Expenses (GAE)"
];
const advocacyAreaOptions = [
  "Good Governance",
  "Adolescent and Youth Health",
  "Quality Education",
  "Active Citizenship",
  "Economic Empowerment",
  "Arts and Culture",
  "Agriculture and Environment",
  "Sports Development",
  "Peace Building and Security",
  "Diversity, Equity, and Inclusion",
  "Spiritual Formation"
];
const needsIdOptions = [
  "NID-2024-001",
  "NID-2024-002",
  "NID-2024-003",
  "NID-2024-004",
  "NID-2024-005"
];

export function NewLineItemModal({ isOpen, onClose, onConfirm }: NewLineItemModalProps) {
  const [sourceOfFund, setSourceOfFund] = useState("Annual");
  const [lineItemName, setLineItemName] = useState("");
  const [activityType, setActivityType] = useState("Projects/Programs/Activities (PPA)");
  const [advocacyArea, setAdvocacyArea] = useState("");
  const [needsId, setNeedsId] = useState("");
  const [justification, setJustification] = useState("");
  const [amountToAllocate, setAmountToAllocate] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [isSourceDropdownOpen, setIsSourceDropdownOpen] = useState(false);
  const [isActivityDropdownOpen, setIsActivityDropdownOpen] = useState(false);
  const [isAdvocacyDropdownOpen, setIsAdvocacyDropdownOpen] = useState(false);
  const [isNeedsDropdownOpen, setIsNeedsDropdownOpen] = useState(false);
  const [isFromDateDropdownOpen, setIsFromDateDropdownOpen] = useState(false);
  const [isToDateDropdownOpen, setIsToDateDropdownOpen] = useState(false);

  const [advocacySearchQuery, setAdvocacySearchQuery] = useState("");
  const [needsSearchQuery, setNeedsSearchQuery] = useState("");

  // Text validation states
  const [lineItemNameError, setLineItemNameError] = useState("");
  const [justificationError, setJustificationError] = useState("");

  const sourceDropdownRef = useRef<HTMLDivElement>(null);
  const activityDropdownRef = useRef<HTMLDivElement>(null);
  const advocacyDropdownRef = useRef<HTMLDivElement>(null);
  const needsDropdownRef = useRef<HTMLDivElement>(null);
  const fromDateDropdownRef = useRef<HTMLDivElement>(null);
  const toDateDropdownRef = useRef<HTMLDivElement>(null);

  const totalAnnualBudget = 845000;
  const totalSupplementalBudget = 0;
  const amountAvailable = sourceOfFund === "Annual" ? 845000 : 0;

  // Check if amount exceeds available allocation
  const isAmountExceeded = amountToAllocate > amountAvailable;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sourceDropdownRef.current && !sourceDropdownRef.current.contains(event.target as Node)) {
        setIsSourceDropdownOpen(false);
      }
      if (activityDropdownRef.current && !activityDropdownRef.current.contains(event.target as Node)) {
        setIsActivityDropdownOpen(false);
      }
      if (advocacyDropdownRef.current && !advocacyDropdownRef.current.contains(event.target as Node)) {
        setIsAdvocacyDropdownOpen(false);
      }
      if (needsDropdownRef.current && !needsDropdownRef.current.contains(event.target as Node)) {
        setIsNeedsDropdownOpen(false);
      }
      if (fromDateDropdownRef.current && !fromDateDropdownRef.current.contains(event.target as Node)) {
        setIsFromDateDropdownOpen(false);
      }
      if (toDateDropdownRef.current && !toDateDropdownRef.current.contains(event.target as Node)) {
        setIsToDateDropdownOpen(false);
      }
    };

    if (isSourceDropdownOpen || isActivityDropdownOpen || isAdvocacyDropdownOpen || 
        isNeedsDropdownOpen || isFromDateDropdownOpen || isToDateDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSourceDropdownOpen, isActivityDropdownOpen, isAdvocacyDropdownOpen, 
      isNeedsDropdownOpen, isFromDateDropdownOpen, isToDateDropdownOpen]);

  const filteredAdvocacyAreas = advocacyAreaOptions.filter(area =>
    area.toLowerCase().includes(advocacySearchQuery.toLowerCase())
  );

  const filteredNeedsIds = needsIdOptions.filter(id =>
    id.toLowerCase().includes(needsSearchQuery.toLowerCase())
  );

  const handleConfirm = () => {
    // Different validation for GAE vs PPA
    if (activityType === "General Administrative Expenses (GAE)") {
      if (!lineItemName.trim() || !justification.trim() || amountToAllocate <= 0 || !fromDate || !toDate) {
        alert("Please fill in all required fields.");
        return;
      }
      
      onConfirm({
        sourceOfFund,
        lineItemName: lineItemName.trim(),
        activityType,
        justification: justification.trim(),
        amountToAllocate,
        implementationPeriod: {
          from: fromDate,
          to: toDate
        }
      });
    } else {
      // PPA validation
      if (!lineItemName.trim() || !needsId || amountToAllocate <= 0 || !fromDate || !toDate) {
        alert("Please fill in all required fields.");
        return;
      }

      onConfirm({
        sourceOfFund,
        lineItemName: lineItemName.trim(),
        activityType,
        needsId,
        amountToAllocate,
        implementationPeriod: {
          from: fromDate,
          to: toDate
        }
      });
    }

    handleClose();
  };

  const handleClose = () => {
    setSourceOfFund("Annual");
    setLineItemName("");
    setActivityType("Projects/Programs/Activities (PPA)");
    setAdvocacyArea("");
    setNeedsId("");
    setJustification("");
    setAmountToAllocate(0);
    setFromDate("");
    setToDate("");
    setAdvocacySearchQuery("");
    setNeedsSearchQuery("");
    setIsSourceDropdownOpen(false);
    setIsActivityDropdownOpen(false);
    setIsAdvocacyDropdownOpen(false);
    setIsNeedsDropdownOpen(false);
    setIsFromDateDropdownOpen(false);
    setIsToDateDropdownOpen(false);
    onClose();
  };

  const incrementAmount = () => {
    setAmountToAllocate(prev => prev + 1000);
  };

  const decrementAmount = () => {
    setAmountToAllocate(prev => Math.max(1, prev - 1000));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-[24px] w-[788px] max-h-[90vh] overflow-auto relative shadow-2xl">
        {/* Header */}
        <div className="bg-[#334870] h-[88px] rounded-t-[24px] relative">
          <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] left-[40px] text-[24px] text-nowrap text-white top-[27px]">
            New Line Item
          </p>
          <button
            onClick={handleClose}
            className="absolute cursor-pointer left-[728px] size-[24px] top-[32px] hover:opacity-80 transition-opacity"
            aria-label="Close modal"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g>
                <path d={svgPaths.p211dc000} fill="white" />
              </g>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-[40px] pb-[32px]">
          {/* Source of Fund */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Source of Fund:
            </p>
            <div className="relative" ref={sourceDropdownRef}>
              <button
                onClick={() => {
                  setIsSourceDropdownOpen(!isSourceDropdownOpen);
                  setIsActivityDropdownOpen(false);
                  setIsAdvocacyDropdownOpen(false);
                  setIsNeedsDropdownOpen(false);
                }}
                className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] flex items-center justify-between bg-white hover:border-[#174499] transition-colors"
              >
                <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black">
                  {sourceOfFund}
                </span>
                <svg className="w-[13px] h-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path d={svgPaths.p284e7f80} fill="#6D798E" />
                </svg>
              </button>
              {isSourceDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10">
                  {sourceOfFundOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSourceOfFund(option);
                        setIsSourceDropdownOpen(false);
                      }}
                      className="w-full px-[16px] py-[10px] text-left hover:bg-gray-100 font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Budget Information */}
          <div className="flex justify-between mb-[23px]">
            <div className="content-stretch flex flex-col gap-[11px] items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[15px] text-black">Total Annual Budget</p>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] text-[29px] tracking-[-0.29px] text-black">₱{totalAnnualBudget.toLocaleString()}.00</p>
            </div>
            <div className="content-stretch flex flex-col gap-[11px] items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[15px] text-black">Amount Available for Allocation</p>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] text-[29px] tracking-[-0.29px] text-black">₱{amountAvailable.toLocaleString()}.00</p>
            </div>
          </div>

          {/* Line Item Name */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Line Item Name:
            </p>
            <input
              type="text"
              value={lineItemName}
              onChange={(e) => {
                const value = e.target.value;
                setLineItemName(value);
                if (value && !validateText(value)) {
                  setLineItemNameError(VALIDATION_MESSAGE);
                } else {
                  setLineItemNameError("");
                }
              }}
              className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
              placeholder="Enter line item name..."
            />
            {lineItemNameError && (
              <p className="mt-1 text-sm text-red-500 font-['Source_Sans_3:Regular',sans-serif]">
                {lineItemNameError}
              </p>
            )}
          </div>

          {/* Activity Type */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Activity Type:
            </p>
            <div className="relative" ref={activityDropdownRef}>
              <button
                onClick={() => {
                  setIsActivityDropdownOpen(!isActivityDropdownOpen);
                  setIsSourceDropdownOpen(false);
                  setIsAdvocacyDropdownOpen(false);
                  setIsNeedsDropdownOpen(false);
                }}
                className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] flex items-center justify-between bg-white hover:border-[#174499] transition-colors"
              >
                <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black">
                  {activityType}
                </span>
                <svg className="w-[13px] h-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path d={svgPaths.p284e7f80} fill="#6D798E" />
                </svg>
              </button>
              {isActivityDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10">
                  {activityTypeOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setActivityType(option);
                        setIsActivityDropdownOpen(false);
                      }}
                      className="w-full px-[16px] py-[10px] text-left hover:bg-gray-100 font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Conditional Fields - PPA shows Needs ID only, GAE shows Justification */}
          {activityType === "Projects/Programs/Activities (PPA)" ? (
            <>
              {/* Needs ID */}
              <div className="mb-[23px]">
                <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
                  Needs ID:
                </p>
                <div className="relative" ref={needsDropdownRef}>
                  <input
                    type="text"
                    value={needsSearchQuery}
                    onChange={(e) => {
                      setNeedsSearchQuery(e.target.value);
                      setIsNeedsDropdownOpen(true);
                    }}
                    onFocus={() => setIsNeedsDropdownOpen(true)}
                    className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                    placeholder="Search or Select a Needs ID"
                  />
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-[13px] h-[13px] pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                    <path d={svgPaths.p284e7f80} fill="#6D798E" />
                  </svg>
                  {isNeedsDropdownOpen && filteredNeedsIds.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10 max-h-[200px] overflow-auto">
                      {filteredNeedsIds.map((id) => (
                        <button
                          key={id}
                          onClick={() => {
                            setNeedsId(id);
                            setNeedsSearchQuery(id);
                            setIsNeedsDropdownOpen(false);
                          }}
                          className="w-full px-[16px] py-[10px] text-left hover:bg-gray-100 font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black"
                        >
                          {id}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Justification (for GAE) */}
              <div className="mb-[23px]">
                <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
                  Justification:
                </p>
                <input
                  type="text"
                  value={justification}
                  onChange={(e) => {
                    const value = e.target.value;
                    setJustification(value);
                    if (value && !validateText(value)) {
                      setJustificationError(VALIDATION_MESSAGE);
                    } else {
                      setJustificationError("");
                    }
                  }}
                  className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                  placeholder="Enter justification..."
                />
                {justificationError && (
                  <p className="mt-1 text-sm text-red-500 font-['Source_Sans_3:Regular',sans-serif]">
                    {justificationError}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Amount to Allocate */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Amount to Allocate:
            </p>
            <div className="relative">
              <input
                type="number"
                value={amountToAllocate}
                onChange={(e) => setAmountToAllocate(Number(e.target.value))}
                className={`w-full h-[38px] rounded-[5px] border px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] outline-none transition-colors ${
                  isAmountExceeded
                    ? "border-red-500 text-red-500 hover:border-red-600 focus:border-red-600"
                    : "border-[#939393] text-[#515151] hover:border-[#174499] focus:border-[#174499]"
                }`}
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
            {isAmountExceeded && (
              <p className="mt-2 text-sm text-red-500 font-['Source_Sans_3:Regular',sans-serif]">
                Amount exceeds the Amount Available for Allocation
              </p>
            )}
          </div>

          {/* Target Implementation Period */}
          <div className="mb-[38px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Target Implementation Period:
            </p>
            <div className="flex gap-[28px]">
              {/* From */}
              <div className="flex-1 relative" ref={fromDateDropdownRef}>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                  placeholder="From"
                />
              </div>
              {/* To */}
              <div className="flex-1 relative" ref={toDateDropdownRef}>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                  placeholder="To"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-[20px]">
            <button
              onClick={handleClose}
              className="bg-[rgba(224,108,110,0.2)] border border-[#e06c6e] h-[45px] px-[10px] rounded-[6px] w-[110px] font-['Source_Sans_3:Black',sans-serif] font-black text-[14px] text-[#e06c6e] hover:bg-[rgba(224,108,110,0.3)] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="bg-[#174499] h-[45px] px-[10px] rounded-[6px] w-[110px] font-['Source_Sans_3:Black',sans-serif] font-black text-[14px] text-white hover:bg-[#0f2f6b] transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}