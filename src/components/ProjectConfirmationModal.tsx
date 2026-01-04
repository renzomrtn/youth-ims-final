import { CheckCircle } from "lucide-react";
import svgPaths from "../imports/svg-cdgsc46une";

interface Committee {
  id: string;
  name: string;
  chairman: string;
  viceChairman: string;
  members: string[];
}

interface ProjectConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onPrevious: () => void;
  projectData: {
    proponent: string;
    lineItemId: string;
    projectTitle: string;
    dueDate: string;
  };
  committees: Committee[];
  darkMode?: boolean;
}

export function ProjectConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  onPrevious,
  projectData,
  committees,
  darkMode
}: ProjectConfirmationModalProps) {
  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  // Get line item area
  const lineItemDetails = [
    { id: "LI-L-2024/910-2K2Q", area: "Health Promotion" },
    { id: "LI-E-2024/850-3M4P", area: "Education" },
    { id: "LI-S-2024/720-5N6R", area: "Social Services" },
    { id: "LI-C-2024/630-8T9W", area: "Community Development" },
    { id: "LI-Y-2024/540-2X7Z", area: "Youth Development" }
  ].find(item => item.id === projectData.lineItemId);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-modal-title"
      onKeyDown={handleKeyDown}
    >
      <div className="bg-white rounded-[24px] w-[788px] max-h-[90vh] overflow-auto relative shadow-2xl">
        {/* Header */}
        <div className="bg-[#334870] h-[88px] rounded-t-[24px] relative">
          <h2 
            id="confirmation-modal-title"
            className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] left-[40px] text-[24px] text-nowrap text-white top-[27px]"
          >
            Confirm Project Creation
          </h2>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer left-[728px] size-[24px] top-[32px] hover:opacity-80 transition-opacity"
            aria-label="Close confirmation modal"
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
          {/* Info Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <p className="text-blue-800 text-sm">
              Please review all project details below before confirming. You can go back to make changes if needed.
            </p>
          </div>

          {/* Project Details Section */}
          <section className="mb-6" aria-labelledby="project-details-heading">
            <h3 
              id="project-details-heading"
              className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[normal] text-[20px] text-black mb-4"
            >
              Project Details:
            </h3>
            
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[14px] text-gray-700">
                  Project Title:
                </span>
                <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[14px] text-black">
                  {projectData.projectTitle}
                </span>
              </div>
              
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[14px] text-gray-700">
                  Proponent:
                </span>
                <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[14px] text-black">
                  {projectData.proponent}
                </span>
              </div>
              
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[14px] text-gray-700">
                  Line Item ID:
                </span>
                <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[14px] text-black">
                  {projectData.lineItemId}
                </span>
              </div>
              
              {lineItemDetails && (
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[14px] text-gray-700">
                    Area:
                  </span>
                  <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[14px] text-black">
                    {lineItemDetails.area}
                  </span>
                </div>
              )}
              
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[14px] text-gray-700">
                  Due Date:
                </span>
                <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[14px] text-black">
                  {new Date(projectData.dueDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </section>

          {/* Committees Section */}
          <section aria-labelledby="committees-heading">
            <h3 
              id="committees-heading"
              className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[normal] text-[20px] text-black mb-4"
            >
              Committee Memberships ({committees.length}):
            </h3>
            
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {committees.map((committee, index) => (
                <article 
                  key={committee.id} 
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  aria-labelledby={`committee-${index}-name`}
                >
                  <h4 
                    id={`committee-${index}-name`}
                    className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[16px] text-[#174499] mb-3"
                  >
                    {committee.name}
                  </h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[13px] text-gray-700 min-w-[100px]">
                        Chairman:
                      </span>
                      <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[13px] text-black">
                        {committee.chairman}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[13px] text-gray-700 min-w-[100px]">
                        Vice Chairman:
                      </span>
                      <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[13px] text-black">
                        {committee.viceChairman}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold text-[13px] text-gray-700 min-w-[100px]">
                        Members:
                      </span>
                      <ul className="flex-1 space-y-1">
                        {committee.members.map((member, mIdx) => (
                          <li 
                            key={mIdx}
                            className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[13px] text-black"
                          >
                            • {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Buttons */}
          <div className="flex justify-end gap-[20px] mt-8">
            <button
              onClick={onClose}
              className="bg-[rgba(224,108,110,0.2)] border border-[#e06c6e] h-[45px] px-[10px] rounded-[6px] w-[110px] font-['Source_Sans_3:Black',sans-serif] font-black text-[14px] text-[#e06c6e] hover:bg-[rgba(224,108,110,0.3)] transition-colors"
              aria-label="Cancel project creation"
            >
              Cancel
            </button>
            <button
              onClick={onPrevious}
              className="bg-[rgba(172,172,172,0.2)] border border-[#acacac] h-[45px] px-[10px] rounded-[6px] w-[110px] font-['Source_Sans_3:Black',sans-serif] font-black text-[14px] text-[#606060] hover:bg-[rgba(172,172,172,0.3)] transition-colors"
              aria-label="Go back to committee memberships"
            >
              Previous
            </button>
            <button
              onClick={onConfirm}
              className="bg-[#174499] h-[45px] px-[10px] rounded-[6px] w-[110px] font-['Source_Sans_3:Black',sans-serif] font-black text-[14px] text-white hover:bg-[#0f2f6b] transition-colors"
              aria-label="Confirm and create project"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}