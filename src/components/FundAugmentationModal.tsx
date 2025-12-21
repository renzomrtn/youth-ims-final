import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import svgPaths from "../imports/svg-5tsvpwnwgp";
import { validateText, VALIDATION_MESSAGE, validateNumber, NUMBER_VALIDATION_MESSAGE } from "../utils/textValidation";

interface FundAugmentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lineItemName: string;
  onConfirm: (data: FundAugmentationData) => void;
}

export interface FundAugmentationData {
  lineItemName: string;
  augmentationMethod: string;
  reAllocateFrom?: string;
  recordId?: string;
  organizationName?: string;
  contributions?: Array<{
    type: string;
    amount?: number;
    items?: Array<{
      name: string;
      value: number;
    }>;
  }>;
  amountToAllocate: number;
}

const augmentationMethods = ["Re-Allocation", "Supplemental Budget", "Solicitation"];
const contributionTypes = ["Monetary", "In-Kind", "Service"];

// Mock line item IDs for Re-Allocation
const mockLineItemIds = [
  "LI-2025/809-1A2B",
  "LI-2025/808-3C4D",
  "LI-2025/807-5E6F",
  "LI-2025/806-7G8H",
  "LI-2025/805-9I0J"
];

// Mock record IDs for Supplemental Budget
const mockRecordIds = [
  "RID-2024-001",
  "RID-2024-002",
  "RID-2024-003",
  "RID-2023-001",
  "RID-2023-002"
];

export function FundAugmentationModal({ isOpen, onClose, lineItemName, onConfirm }: FundAugmentationModalProps) {
  const [augmentationMethod, setAugmentationMethod] = useState("Re-Allocation");
  const [reAllocateFrom, setReAllocateFrom] = useState("");
  const [recordId, setRecordId] = useState("");
  const [amountToAllocate, setAmountToAllocate] = useState(0);
  const [isMethodDropdownOpen, setIsMethodDropdownOpen] = useState(false);
  const [isLineItemDropdownOpen, setIsLineItemDropdownOpen] = useState(false);
  const [isRecordIdDropdownOpen, setIsRecordIdDropdownOpen] = useState(false);
  const [lineItemSearchQuery, setLineItemSearchQuery] = useState("");
  const [recordIdSearchQuery, setRecordIdSearchQuery] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [contributions, setContributions] = useState<Array<{
    type: string;
    amount?: number;
    items?: Array<{
      name: string;
      value: number;
    }>;
  }>>([]);

  const methodDropdownRef = useRef<HTMLDivElement>(null);
  const lineItemDropdownRef = useRef<HTMLDivElement>(null);
  const recordIdDropdownRef = useRef<HTMLDivElement>(null);

  // Mock budget values for Supplemental Budget
  const totalSupplementalBudget = 0;
  const amountAvailableForAllocation = 0;

  // Check if amount exceeds available allocation for Supplemental Budget
  const isAmountExceeded = augmentationMethod === "Supplemental Budget" && amountToAllocate > amountAvailableForAllocation;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (methodDropdownRef.current && !methodDropdownRef.current.contains(event.target as Node)) {
        setIsMethodDropdownOpen(false);
      }
      if (lineItemDropdownRef.current && !lineItemDropdownRef.current.contains(event.target as Node)) {
        setIsLineItemDropdownOpen(false);
      }
      if (recordIdDropdownRef.current && !recordIdDropdownRef.current.contains(event.target as Node)) {
        setIsRecordIdDropdownOpen(false);
      }
    };

    if (isMethodDropdownOpen || isLineItemDropdownOpen || isRecordIdDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMethodDropdownOpen, isLineItemDropdownOpen, isRecordIdDropdownOpen]);

  const filteredLineItemIds = mockLineItemIds.filter(id =>
    id.toLowerCase().includes(lineItemSearchQuery.toLowerCase())
  );

  const filteredRecordIds = mockRecordIds.filter(id =>
    id.toLowerCase().includes(recordIdSearchQuery.toLowerCase())
  );

  const handleConfirm = () => {
    // Different validation based on augmentation method
    if (augmentationMethod === "Re-Allocation") {
      if (!reAllocateFrom || amountToAllocate <= 0) {
        alert("Please fill in all required fields.");
        return;
      }
      onConfirm({
        lineItemName,
        augmentationMethod,
        reAllocateFrom,
        amountToAllocate
      });
    } else {
      // Supplemental Budget or Solicitation
      if (!recordId || amountToAllocate <= 0) {
        alert("Please fill in all required fields.");
        return;
      }
      onConfirm({
        lineItemName,
        augmentationMethod,
        recordId,
        organizationName,
        contributions,
        amountToAllocate
      });
    }

    handleClose();
  };

  const handleClose = () => {
    setAugmentationMethod("Re-Allocation");
    setReAllocateFrom("");
    setRecordId("");
    setAmountToAllocate(0);
    setLineItemSearchQuery("");
    setRecordIdSearchQuery("");
    setOrganizationName("");
    setContributions([]);
    setIsMethodDropdownOpen(false);
    setIsLineItemDropdownOpen(false);
    setIsRecordIdDropdownOpen(false);
    onClose();
  };

  const incrementAmount = () => {
    setAmountToAllocate(prev => prev + 1000);
  };

  const decrementAmount = () => {
    setAmountToAllocate(prev => Math.max(0, prev - 1000));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-[24px] w-[788px] relative shadow-2xl">
        {/* Header */}
        <div className="bg-[#334870] h-[88px] rounded-t-[24px] relative">
          <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] left-[40px] text-[24px] text-nowrap text-white top-[27px]">
            Fund Augmentation
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
          {/* Line Item Name */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Line Item Name:
            </p>
            <div className="h-[38px] rounded-[5px] border border-[#939393] px-[16px] flex items-center bg-[#eee]">
              <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151]">
                {lineItemName}
              </p>
            </div>
          </div>

          {/* Augmentation Method */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Augmentation Method:
            </p>
            <div className="relative" ref={methodDropdownRef}>
              <button
                onClick={() => {
                  setIsMethodDropdownOpen(!isMethodDropdownOpen);
                  setIsLineItemDropdownOpen(false);
                  setIsRecordIdDropdownOpen(false);
                }}
                className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] flex items-center justify-between bg-white hover:border-[#174499] transition-colors"
              >
                <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151]">
                  {augmentationMethod}
                </span>
                <svg className="w-[13px] h-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path d={svgPaths.p284e7f80} fill="#6D798E" />
                </svg>
              </button>
              {isMethodDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10">
                  {augmentationMethods.map((method) => (
                    <button
                      key={method}
                      onClick={() => {
                        setAugmentationMethod(method);
                        setIsMethodDropdownOpen(false);
                      }}
                      className="w-full px-[16px] py-[10px] text-left hover:bg-gray-100 font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black"
                    >
                      {method}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Conditional Fields - Different forms for Re-Allocation vs Supplemental Budget vs Solicitation */}
          {augmentationMethod === "Re-Allocation" ? (
            <>
              {/* Re-allocate funds from */}
              <div className="mb-[23px]">
                <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
                  Re-allocate funds from:
                </p>
                <div className="relative" ref={lineItemDropdownRef}>
                  <input
                    type="text"
                    value={lineItemSearchQuery}
                    onChange={(e) => {
                      setLineItemSearchQuery(e.target.value);
                      setIsLineItemDropdownOpen(true);
                    }}
                    onFocus={() => setIsLineItemDropdownOpen(true)}
                    className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                    placeholder="Search or Select a Line Item ID"
                  />
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-[13px] h-[13px] pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                    <path d={svgPaths.p284e7f80} fill="#6D798E" />
                  </svg>
                  {isLineItemDropdownOpen && filteredLineItemIds.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10 max-h-[200px] overflow-auto">
                      {filteredLineItemIds.map((id) => (
                        <button
                          key={id}
                          onClick={() => {
                            setReAllocateFrom(id);
                            setLineItemSearchQuery(id);
                            setIsLineItemDropdownOpen(false);
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

              {/* Amount to Allocate */}
              <div className="mb-[38px]">
                <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
                  Amount to Allocate:
                </p>
                <div className="relative">
                  <input
                    type="number"
                    value={amountToAllocate}
                    onChange={(e) => setAmountToAllocate(Number(e.target.value))}
                    className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                    placeholder="₱0.00"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg className="w-[13px] h-[31px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 31">
                      <g>
                        <path 
                          d={svgPaths.p133eaac0} 
                          fill="#6D798E" 
                          className="cursor-pointer hover:fill-[#174499]"
                          onClick={incrementAmount}
                        />
                        <path 
                          d={svgPaths.p10583a50} 
                          fill="#6D798E"
                          className="cursor-pointer hover:fill-[#174499]"
                          onClick={decrementAmount}
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </>
          ) : augmentationMethod === "Solicitation" ? (
            <SolicitationForm
              organizationName={organizationName}
              setOrganizationName={setOrganizationName}
              contributions={contributions}
              setContributions={setContributions}
            />
          ) : (
            <>
              {/* Budget Information for Supplemental Budget */}
              <div className="flex justify-between mb-[23px]">
                <div className="content-stretch flex flex-col gap-[11px] items-start">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[15px] text-black">
                    Total Supplemental Budget
                  </p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] text-[29px] tracking-[-0.29px] text-black">₱{totalSupplementalBudget.toLocaleString()}.00</p>
                </div>
                <div className="content-stretch flex flex-col gap-[11px] items-start">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[15px] text-black">Amount Available for Allocation</p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[34px] text-[29px] tracking-[-0.29px] text-black">₱{amountAvailableForAllocation.toLocaleString()}.00</p>
                </div>
              </div>

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
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg className="w-[13px] h-[31px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 31">
                      <g>
                        <path 
                          d={svgPaths.p133eaac0} 
                          fill="#6D798E" 
                          className="cursor-pointer hover:fill-[#174499]"
                          onClick={incrementAmount}
                        />
                        <path 
                          d={svgPaths.p10583a50} 
                          fill="#6D798E"
                          className="cursor-pointer hover:fill-[#174499]"
                          onClick={decrementAmount}
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                {isAmountExceeded && (
                  <p className="mt-2 text-sm text-red-500 font-['Source_Sans_3:Regular',sans-serif]">
                    Amount exceeds the Amount Available for Allocation
                  </p>
                )}
              </div>

              {/* Evidence (Record ID) */}
              <div className="mb-[38px]">
                <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
                  Evidence (Record ID):
                </p>
                <div className="relative" ref={recordIdDropdownRef}>
                  <input
                    type="text"
                    value={recordIdSearchQuery}
                    onChange={(e) => {
                      setRecordIdSearchQuery(e.target.value);
                      setIsRecordIdDropdownOpen(true);
                    }}
                    onFocus={() => setIsRecordIdDropdownOpen(true)}
                    className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                    placeholder="Search or Select a Record ID"
                  />
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-[13px] h-[13px] pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                    <path d={svgPaths.p284e7f80} fill="#6D798E" />
                  </svg>
                  {isRecordIdDropdownOpen && filteredRecordIds.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10 max-h-[200px] overflow-auto">
                      {filteredRecordIds.map((id) => (
                        <button
                          key={id}
                          onClick={() => {
                            setRecordId(id);
                            setRecordIdSearchQuery(id);
                            setIsRecordIdDropdownOpen(false);
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
          )}

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

// Solicitation Form Component
interface SolicitationFormProps {
  organizationName: string;
  setOrganizationName: (name: string) => void;
  contributions: Array<{
    type: string;
    amount?: number;
    items?: Array<{
      name: string;
      value: number;
    }>;
  }>;
  setContributions: (contributions: Array<{
    type: string;
    amount?: number;
    items?: Array<{
      name: string;
      value: number;
    }>;
  }>) => void;
}

function SolicitationForm({ organizationName, setOrganizationName, contributions, setContributions }: SolicitationFormProps) {
  const [contributionDropdowns, setContributionDropdowns] = useState<boolean[]>([]);

  // Initialize with one contribution if empty
  useEffect(() => {
    if (contributions.length === 0) {
      setContributions([{ type: "Monetary", amount: 0 }]);
      setContributionDropdowns([false]);
    }
  }, []);

  const handleAddContribution = () => {
    setContributions([...contributions, { type: "Monetary", amount: 0 }]);
    setContributionDropdowns([...contributionDropdowns, false]);
  };

  const handleContributionTypeChange = (index: number, type: string) => {
    const newContributions = [...contributions];
    const oldType = newContributions[index].type;
    newContributions[index].type = type;
    
    // When changing to/from In-Kind, reset the data structure
    if (type === "In-Kind" && oldType !== "In-Kind") {
      newContributions[index] = {
        type: "In-Kind",
        items: [{ name: "", value: 0 }]
      };
    } else if (type !== "In-Kind" && oldType === "In-Kind") {
      newContributions[index] = {
        type,
        amount: 0
      };
    }
    
    setContributions(newContributions);
  };

  const handleContributionAmountChange = (index: number, amount: number) => {
    const newContributions = [...contributions];
    newContributions[index].amount = amount;
    setContributions(newContributions);
  };

  const incrementContributionAmount = (index: number) => {
    const newContributions = [...contributions];
    if (newContributions[index].amount !== undefined) {
      newContributions[index].amount = (newContributions[index].amount || 0) + 1000;
      setContributions(newContributions);
    }
  };

  const decrementContributionAmount = (index: number) => {
    const newContributions = [...contributions];
    if (newContributions[index].amount !== undefined) {
      newContributions[index].amount = Math.max(0, (newContributions[index].amount || 0) - 1000);
      setContributions(newContributions);
    }
  };

  const toggleDropdown = (index: number) => {
    const newDropdowns = [...contributionDropdowns];
    newDropdowns[index] = !newDropdowns[index];
    setContributionDropdowns(newDropdowns);
  };

  // In-Kind item management
  const handleAddItem = (contributionIndex: number) => {
    const newContributions = [...contributions];
    if (newContributions[contributionIndex].items) {
      newContributions[contributionIndex].items!.push({ name: "", value: 0 });
      setContributions(newContributions);
    }
  };

  const handleItemNameChange = (contributionIndex: number, itemIndex: number, name: string) => {
    const newContributions = [...contributions];
    if (newContributions[contributionIndex].items) {
      newContributions[contributionIndex].items![itemIndex].name = name;
      setContributions(newContributions);
    }
  };

  const handleItemValueChange = (contributionIndex: number, itemIndex: number, value: number) => {
    const newContributions = [...contributions];
    if (newContributions[contributionIndex].items) {
      newContributions[contributionIndex].items![itemIndex].value = value;
      setContributions(newContributions);
    }
  };

  const incrementItemValue = (contributionIndex: number, itemIndex: number) => {
    const newContributions = [...contributions];
    if (newContributions[contributionIndex].items) {
      newContributions[contributionIndex].items![itemIndex].value += 1000;
      setContributions(newContributions);
    }
  };

  const decrementItemValue = (contributionIndex: number, itemIndex: number) => {
    const newContributions = [...contributions];
    if (newContributions[contributionIndex].items) {
      newContributions[contributionIndex].items![itemIndex].value = Math.max(0, newContributions[contributionIndex].items![itemIndex].value - 1000);
      setContributions(newContributions);
    }
  };

  return (
    <>
      {/* Organization Name */}
      <div className="mb-[23px]">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
          Organization Name:
        </p>
        <input
          type="text"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
          placeholder="Enter organization name..."
        />
      </div>

      {/* Contribution Types */}
      {contributions.map((contribution, index) => (
        <div key={index}>
          {/* Contribution Type */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Contribution Type:
            </p>
            <div className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] flex items-center justify-between bg-white hover:border-[#174499] transition-colors"
              >
                <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151]">
                  {contribution.type}
                </span>
                <svg className="w-[13px] h-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path d={svgPaths.p284e7f80} fill="#6D798E" />
                </svg>
              </button>
              {contributionDropdowns[index] && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10">
                  {contributionTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        handleContributionTypeChange(index, type);
                        toggleDropdown(index);
                      }}
                      className="w-full px-[16px] py-[10px] text-left hover:bg-gray-100 font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Conditional rendering based on contribution type */}
          {contribution.type === "In-Kind" ? (
            <>
              {/* In-Kind Items */}
              {contribution.items?.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-[23px]">
                  <div className="flex gap-[38px]">
                    {/* Item Name */}
                    <div className="flex-1">
                      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
                        Item Name:
                      </p>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => handleItemNameChange(index, itemIndex, e.target.value)}
                        className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                        placeholder="Enter item name..."
                      />
                    </div>

                    {/* Value */}
                    <div className="flex-1">
                      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
                        Value:
                      </p>
                      <div className="relative">
                        <input
                          type="number"
                          value={item.value}
                          onChange={(e) => handleItemValueChange(index, itemIndex, Number(e.target.value))}
                          className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                          placeholder="₱0.00"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <svg className="w-[13px] h-[31px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 31">
                            <g>
                              <path 
                                d={svgPaths.p133eaac0} 
                                fill="#6D798E" 
                                className="cursor-pointer hover:fill-[#174499]"
                                onClick={() => incrementItemValue(index, itemIndex)}
                              />
                              <path 
                                d={svgPaths.p10583a50} 
                                fill="#6D798E"
                                className="cursor-pointer hover:fill-[#174499]"
                                onClick={() => decrementItemValue(index, itemIndex)}
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add another Item Button (dashed border) */}
              <button
                onClick={() => handleAddItem(index)}
                className="w-[340px] h-[38px] rounded-[6px] border border-dashed border-[#939393] font-['Source_Sans_3:Medium',sans-serif] font-medium text-[16px] text-[#515151] hover:bg-gray-50 transition-colors mb-[22px]"
              >
                Add another Item
              </button>
            </>
          ) : (
            <>
              {/* Amount field for Monetary and Service */}
              <div className="mb-[23px]">
                <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
                  Amount:
                </p>
                <div className="relative">
                  <input
                    type="number"
                    value={contribution.amount}
                    onChange={(e) => handleContributionAmountChange(index, Number(e.target.value))}
                    className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
                    placeholder="₱0.00"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg className="w-[13px] h-[31px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 31">
                      <g>
                        <path 
                          d={svgPaths.p133eaac0} 
                          fill="#6D798E" 
                          className="cursor-pointer hover:fill-[#174499]"
                          onClick={() => incrementContributionAmount(index)}
                        />
                        <path 
                          d={svgPaths.p10583a50} 
                          fill="#6D798E"
                          className="cursor-pointer hover:fill-[#174499]"
                          onClick={() => decrementContributionAmount(index)}
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Add another Contribution Type Button */}
      <button
        onClick={handleAddContribution}
        className="w-full bg-[#dedede] h-[37px] rounded-[6px] border border-[#acacac] font-['Source_Sans_3:Black',sans-serif] font-black text-[14px] text-[#606060] hover:bg-[#d0d0d0] transition-colors mb-[41px]"
      >
        Add another Contribution Type
      </button>
    </>
  );
}