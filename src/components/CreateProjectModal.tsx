import { useState } from "react";
import { ChevronDown } from "lucide-react";
import svgPaths from "../imports/svg-cdgsc46une";

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: {
    proponent: string;
    lineItemId: string;
    projectTitle: string;
    dueDate: string;
  }) => void;
  darkMode?: boolean;
}

// Mock data for dropdowns
const mockOfficials = [
  "John Smith",
  "Jane Doe",
  "Alice Johnson",
  "Bob Williams",
  "Mike Brown",
  "Sarah Davis",
  "Melody Marks",
  "Val Steele"
];

const mockLineItems = [
  { id: "LI-L-2024/910-2K2Q", area: "Health Promotion" },
  { id: "LI-E-2024/850-3M4P", area: "Education" },
  { id: "LI-S-2024/720-5N6R", area: "Social Services" },
  { id: "LI-C-2024/630-8T9W", area: "Community Development" },
  { id: "LI-Y-2024/540-2X7Z", area: "Youth Development" }
];

export function CreateProjectModal({ isOpen, onClose, onCreate, darkMode }: CreateProjectModalProps) {
  const [selectedOfficial, setSelectedOfficial] = useState("");
  const [selectedLineItem, setSelectedLineItem] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [isOfficialDropdownOpen, setIsOfficialDropdownOpen] = useState(false);
  const [isLineItemDropdownOpen, setIsLineItemDropdownOpen] = useState(false);
  const [lineItemSearch, setLineItemSearch] = useState("");
  const [dueDate, setDueDate] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!selectedOfficial || !selectedLineItem || !projectTitle.trim() || !dueDate) {
      alert("Please fill in all fields");
      return;
    }

    onCreate({
      proponent: selectedOfficial,
      lineItemId: selectedLineItem,
      projectTitle: projectTitle.trim(),
      dueDate
    });
  };

  const handleCancel = () => {
    // Reset form
    setSelectedOfficial("");
    setSelectedLineItem("");
    setProjectTitle("");
    setLineItemSearch("");
    setDueDate("");
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  const filteredLineItems = mockLineItems.filter(
    item =>
      item.id.toLowerCase().includes(lineItemSearch.toLowerCase()) ||
      item.area.toLowerCase().includes(lineItemSearch.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-project-title"
      onKeyDown={handleKeyDown}
    >
      <div className="bg-white rounded-[24px] w-[788px] max-h-[90vh] overflow-auto relative shadow-2xl">
        {/* Header */}
        <div className="bg-[#334870] h-[88px] rounded-t-[24px] relative">
          <p 
            id="create-project-title"
            className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] left-[40px] text-[24px] text-nowrap text-white top-[27px]"
          >
            Create Project
          </p>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer left-[728px] size-[24px] top-[32px] hover:opacity-80 transition-opacity"
            aria-label="Close create project modal"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d={svgPaths.p211dc000} fill="white" />
              </g>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-[40px] pb-[32px]">
          <p className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[normal] text-[24px] text-black text-nowrap mb-[28px]">
            Project Details:
          </p>

          {/* Project Proponent */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Project Proponent:
            </p>
            <div className="relative">
              <button
                onClick={() => {
                  setIsOfficialDropdownOpen(!isOfficialDropdownOpen);
                  setIsLineItemDropdownOpen(false);
                }}
                className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] flex items-center justify-between bg-white hover:border-[#174499] transition-colors"
              >
                <span className={`font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] ${selectedOfficial ? 'text-black' : 'text-[#515151]'}`}>
                  {selectedOfficial || "Select an Official"}
                </span>
                <ChevronDown className="w-[13px] h-[13px] text-[#6D798E]" />
              </button>
              
              {isOfficialDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10 max-h-[200px] overflow-auto">
                  {mockOfficials.map((official) => (
                    <button
                      key={official}
                      onClick={() => {
                        setSelectedOfficial(official);
                        setIsOfficialDropdownOpen(false);
                      }}
                      className="w-full px-[16px] py-[10px] text-left hover:bg-gray-100 font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black"
                    >
                      {official}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Line Item ID */}
          <div className="mb-[23px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Line Item ID:
            </p>
            <div className="relative">
              <button
                onClick={() => {
                  setIsLineItemDropdownOpen(!isLineItemDropdownOpen);
                  setIsOfficialDropdownOpen(false);
                }}
                className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] flex items-center justify-between bg-white hover:border-[#174499] transition-colors"
              >
                <span className={`font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] ${selectedLineItem ? 'text-black' : 'text-[#515151]'}`}>
                  {selectedLineItem || "Search or Select a Line Item ID"}
                </span>
                <ChevronDown className="w-[13px] h-[13px] text-[#6D798E]" />
              </button>
              
              {isLineItemDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#939393] rounded-[5px] shadow-lg z-10">
                  <input
                    type="text"
                    value={lineItemSearch}
                    onChange={(e) => setLineItemSearch(e.target.value)}
                    placeholder="Search by ID or Area..."
                    className="w-full px-[16px] py-[10px] border-b border-[#939393] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black outline-none"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="max-h-[160px] overflow-auto">
                    {filteredLineItems.length > 0 ? (
                      filteredLineItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedLineItem(item.id);
                            setIsLineItemDropdownOpen(false);
                            setLineItemSearch("");
                          }}
                          className="w-full px-[16px] py-[10px] text-left hover:bg-gray-100"
                        >
                          <div className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black">
                            {item.id}
                          </div>
                          <div className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[14px] text-[#6D798E]">
                            {item.area}
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="px-[16px] py-[10px] text-[#6D798E] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px]">
                        No matching line items
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Title */}
          <div className="mb-[38px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Project Title:
            </p>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
              placeholder="Enter project title..."
            />
          </div>

          {/* Due Date */}
          <div className="mb-[38px]">
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] text-[16px] text-black text-nowrap mb-[8px]">
              Due Date:
            </p>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full h-[38px] rounded-[5px] border border-[#939393] px-[16px] font-['Source_Sans_3:Regular',sans-serif] font-normal text-[16px] text-black outline-none hover:border-[#174499] focus:border-[#174499] transition-colors"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-[20px]">
            <button
              onClick={handleCancel}
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