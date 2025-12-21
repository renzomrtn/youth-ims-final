import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-l8etma9ytr";

interface NewNeedsAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: NeedsAssessmentData) => void;
}

export interface NeedsAssessmentData {
  areaOfParticipation: string;
  recordId: string;
  description: string;
  proposedSolution: string;
}

// Mock areas of advocacy
const areasOfAdvocacy = [
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

// Mock record IDs
const mockRecordIds = [
  "RID-2024-001",
  "RID-2024-002",
  "RID-2024-003",
  "RID-2023-001",
  "RID-2023-002",
  "RID-2023-003"
];

export function NewNeedsAssessmentModal({ isOpen, onClose, onConfirm }: NewNeedsAssessmentModalProps) {
  const [areaOfParticipation, setAreaOfParticipation] = useState("");
  const [recordId, setRecordId] = useState("");
  const [description, setDescription] = useState("");
  const [proposedSolution, setProposedSolution] = useState("");
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);
  const [isRecordIdDropdownOpen, setIsRecordIdDropdownOpen] = useState(false);
  const [recordIdSearchQuery, setRecordIdSearchQuery] = useState("");

  const areaDropdownRef = useRef<HTMLDivElement>(null);
  const recordIdDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (areaDropdownRef.current && !areaDropdownRef.current.contains(event.target as Node)) {
        setIsAreaDropdownOpen(false);
      }
      if (recordIdDropdownRef.current && !recordIdDropdownRef.current.contains(event.target as Node)) {
        setIsRecordIdDropdownOpen(false);
      }
    };

    if (isAreaDropdownOpen || isRecordIdDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAreaDropdownOpen, isRecordIdDropdownOpen]);

  const filteredRecordIds = mockRecordIds.filter(id =>
    id.toLowerCase().includes(recordIdSearchQuery.toLowerCase())
  );

  const handleConfirm = () => {
    if (!areaOfParticipation || !recordId || !description || !proposedSolution) {
      alert("Please fill in all required fields.");
      return;
    }

    onConfirm({
      areaOfParticipation,
      recordId,
      description,
      proposedSolution
    });

    handleClose();
  };

  const handleClose = () => {
    setAreaOfParticipation("");
    setRecordId("");
    setDescription("");
    setProposedSolution("");
    setRecordIdSearchQuery("");
    setIsAreaDropdownOpen(false);
    setIsRecordIdDropdownOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-[24px] w-[788px] h-[831px] relative shadow-2xl">
        {/* Header */}
        <div className="absolute bg-[#334870] h-[88px] left-0 top-0 w-[788px] rounded-t-[24px]" />
        <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] left-[40px] text-[24px] text-nowrap text-white top-[27px]">
          New Needs Assessment
        </p>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute cursor-pointer left-[728px] size-[24px] top-[32px] hover:opacity-80 transition-opacity"
          aria-label="Close modal"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p211dc000} fill="white" />
          </svg>
        </button>

        {/* Area of Advocacy */}
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[16px] text-black text-nowrap top-[113px]">
          Area of Advocacy:
        </p>
        <div className="absolute h-[38px] left-[40px] top-[136px] w-[708px]">
          <div className="relative" ref={areaDropdownRef}>
            <button
              onClick={() => {
                setIsAreaDropdownOpen(!isAreaDropdownOpen);
                setIsRecordIdDropdownOpen(false);
              }}
              className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] flex items-center justify-between bg-white hover:border-[#174499] transition-colors"
            >
              <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151]">
                {areaOfParticipation || "Select an area..."}
              </span>
              <svg className="w-[13px] h-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p284e7f80} fill="#6D798E" />
              </svg>
            </button>
            {isAreaDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10 max-h-[200px] overflow-auto">
                {areasOfAdvocacy.map((area) => (
                  <button
                    key={area}
                    onClick={() => {
                      setAreaOfParticipation(area);
                      setIsAreaDropdownOpen(false);
                    }}
                    className="w-full px-[16px] py-[10px] text-left hover:bg-gray-100 font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black"
                  >
                    {area}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Evidence (Record ID) */}
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[16px] text-black text-nowrap top-[192px]">
          Evidence (Record ID):
        </p>
        <div className="absolute h-[38px] left-[40px] rounded-[5px] top-[215px] w-[708px]">
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

        {/* Description */}
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[16px] text-black text-nowrap top-[271px]">
          Description:
        </p>
        <div className="absolute h-[197px] left-[40px] rounded-[5px] top-[294px] w-[708px]">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-full rounded-[5px] border border-[#939393] p-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors resize-none"
            placeholder="Enter description..."
          />
        </div>

        {/* Proposed Solution */}
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[16px] text-black text-nowrap top-[509px]">
          Proposed Solution:
        </p>
        <div className="absolute h-[197px] left-[40px] rounded-[5px] top-[532px] w-[708px]">
          <textarea
            value={proposedSolution}
            onChange={(e) => setProposedSolution(e.target.value)}
            className="w-full h-full rounded-[5px] border border-[#939393] p-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-[#515151] outline-none hover:border-[#174499] focus:border-[#174499] transition-colors resize-none"
            placeholder="Enter proposed solution..."
          />
        </div>

        {/* Buttons */}
        <button
          onClick={handleClose}
          className="absolute bg-[rgba(224,108,110,0.2)] h-[45px] left-[508px] p-[10px] rounded-[6px] top-[760px] w-[110px] border border-[#e06c6e] font-['Source_Sans_3:Black',sans-serif] font-black text-[#e06c6e] text-[14px] hover:bg-[rgba(224,108,110,0.3)] transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="absolute bg-[#174499] h-[45px] left-[638px] p-[10px] rounded-[6px] top-[760px] w-[110px] font-['Source_Sans_3:Black',sans-serif] font-black text-[14px] text-white hover:bg-[#0f2f6b] transition-colors"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}