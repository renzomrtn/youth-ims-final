import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import svgPaths from "../imports/svg-lvnli21nti";

interface Committee {
  id: string;
  name: string;
  chairman: string;
  viceChairman: string;
  members: string[];
}

interface CommitteeMembershipsModalProps {
  darkMode: boolean;
  onClose: () => void;
  onConfirm: (committees: Committee[]) => void;
  onPrevious: () => void;
}

const availableCommittees = [
  "Executive Committee",
  "Finance Committee",
  "Program Committee",
  "Logistics Committee",
  "Marketing Committee",
  "Technical Committee",
  "Documentation Committee"
];

const availableOfficials = [
  "John Smith",
  "Jane Doe",
  "Alice Brown",
  "Bob Wilson",
  "Charlie Davis",
  "Diana Evans",
  "Frank Miller",
  "Grace Lee",
  "Henry Cooper",
  "Isabel Martinez",
  "Kevin Zhang",
  "Laura White",
  "Michael Chen",
  "Nina Patel"
];

export function CommitteeMembershipsModal({
  darkMode,
  onClose,
  onConfirm,
  onPrevious
}: CommitteeMembershipsModalProps) {
  const [committees, setCommittees] = useState<Committee[]>([
    {
      id: "1",
      name: "",
      chairman: "",
      viceChairman: "",
      members: [""]
    }
  ]);

  const [openDropdown, setOpenDropdown] = useState<{
    committeeId: string;
    field: "committee" | "chairman" | "viceChairman" | "member";
    memberIndex?: number;
  } | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleAddCommittee = () => {
    const newCommittee: Committee = {
      id: Date.now().toString(),
      name: "",
      chairman: "",
      viceChairman: "",
      members: [""]
    };
    setCommittees([...committees, newCommittee]);
  };

  const handleAddMember = (committeeId: string) => {
    setCommittees(
      committees.map(c =>
        c.id === committeeId
          ? { ...c, members: [...c.members, ""] }
          : c
      )
    );
  };

  const handleCommitteeChange = (committeeId: string, name: string) => {
    setCommittees(
      committees.map(c =>
        c.id === committeeId ? { ...c, name } : c
      )
    );
    setOpenDropdown(null);
  };

  const handleChairmanChange = (committeeId: string, chairman: string) => {
    setCommittees(
      committees.map(c =>
        c.id === committeeId ? { ...c, chairman } : c
      )
    );
    setOpenDropdown(null);
  };

  const handleViceChairmanChange = (committeeId: string, viceChairman: string) => {
    setCommittees(
      committees.map(c =>
        c.id === committeeId ? { ...c, viceChairman } : c
      )
    );
    setOpenDropdown(null);
  };

  const handleMemberChange = (committeeId: string, memberIndex: number, value: string) => {
    setCommittees(
      committees.map(c =>
        c.id === committeeId
          ? {
              ...c,
              members: c.members.map((m, i) => (i === memberIndex ? value : m))
            }
          : c
      )
    );
    setOpenDropdown(null);
  };

  const handleConfirm = () => {
    // Validate that all committees have required fields
    for (const committee of committees) {
      if (!committee.name.trim()) {
        alert("Please select a committee name");
        return;
      }
      if (!committee.chairman.trim()) {
        alert(`Please select a chairman for ${committee.name}`);
        return;
      }
      if (!committee.viceChairman.trim()) {
        alert(`Please select a vice chairman for ${committee.name}`);
        return;
      }
      const validMembers = committee.members.filter(m => m.trim() !== "");
      if (validMembers.length === 0) {
        alert(`Please add at least one member to ${committee.name}`);
        return;
      }
    }

    // Filter out empty members and pass to parent
    const validCommittees = committees.map(c => ({
      ...c,
      members: c.members.filter(m => m.trim() !== "")
    }));

    onConfirm(validCommittees);
  };

  const getUsedCommitteeNames = (currentCommitteeId: string) => {
    return committees
      .filter(c => c.id !== currentCommitteeId)
      .map(c => c.name)
      .filter(name => name !== "");
  };

  const getUsedOfficials = (committeeId: string, excludeField?: string, memberIndex?: number) => {
    const committee = committees.find(c => c.id === committeeId);
    if (!committee) return [];

    const used: string[] = [];
    if (excludeField !== "chairman" && committee.chairman) used.push(committee.chairman);
    if (excludeField !== "viceChairman" && committee.viceChairman) used.push(committee.viceChairman);
    if (excludeField !== "member") {
      committee.members.forEach((m, i) => {
        if (m && i !== memberIndex) used.push(m);
      });
    }
    return used;
  };

  return (
    <div 
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="committee-modal-title"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-[788px] relative shadow-2xl max-h-[90vh] overflow-y-auto" 
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <div className="bg-[#334870] dark:bg-[#1e293b] h-[88px] rounded-t-3xl flex items-center justify-between px-10 relative">
          <h2 id="committee-modal-title" className="text-white text-2xl">Create Project</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close committee memberships modal"
          >
            <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
              <path d={svgPaths.p211dc000} />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-10">
          <h3 className="text-black dark:text-white text-2xl mb-6">Committee Memberships:</h3>

          {committees.map((committee, committeeIndex) => (
            <div key={committee.id} className="mb-8">
              {committeeIndex > 0 && (
                <div className="border-t border-gray-300 dark:border-gray-600 mb-6 -mt-2" />
              )}

              {/* Committee Dropdown */}
              <div className="mb-4">
                <label className="block text-black dark:text-white mb-2">Committee:</label>
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown?.committeeId === committee.id &&
                        openDropdown?.field === "committee"
                          ? null
                          : { committeeId: committee.id, field: "committee" }
                      )
                    }
                    className="w-full h-[38px] px-3 border border-[#939393] dark:border-gray-600 rounded-[5px] bg-white dark:bg-gray-700 text-left flex items-center justify-between"
                  >
                    <span className="text-[#515151] dark:text-gray-300">
                      {committee.name || "Select a Committee"}
                    </span>
                    <svg className="w-3 h-3 flex-shrink-0" fill="#6D798E" viewBox="0 0 13 13">
                      <path d={svgPaths.p284e7f80} />
                    </svg>
                  </button>
                  {openDropdown?.committeeId === committee.id &&
                    openDropdown?.field === "committee" && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                        {availableCommittees
                          .filter(c => !getUsedCommitteeNames(committee.id).includes(c))
                          .map(committeeName => (
                            <button
                              key={committeeName}
                              onClick={() => handleCommitteeChange(committee.id, committeeName)}
                              className="w-full px-4 py-2 text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            >
                              {committeeName}
                            </button>
                          ))}
                      </div>
                    )}
                </div>
              </div>

              {/* Chairman and Vice Chairman */}
              <div className="grid grid-cols-2 gap-6 mb-4">
                {/* Chairman */}
                <div>
                  <label className="block text-black dark:text-white mb-2">Chairman:</label>
                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown?.committeeId === committee.id &&
                          openDropdown?.field === "chairman"
                            ? null
                            : { committeeId: committee.id, field: "chairman" }
                        )
                      }
                      className="w-full h-[38px] px-3 border border-[#939393] dark:border-gray-600 rounded-[5px] bg-white dark:bg-gray-700 text-left flex items-center justify-between"
                    >
                      <span className="text-[#515151] dark:text-gray-300">
                        {committee.chairman || "Select an Official"}
                      </span>
                      <svg className="w-3 h-3 flex-shrink-0" fill="#6D798E" viewBox="0 0 13 13">
                        <path d={svgPaths.p284e7f80} />
                      </svg>
                    </button>
                    {openDropdown?.committeeId === committee.id &&
                      openDropdown?.field === "chairman" && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                          {availableOfficials
                            .filter(o => !getUsedOfficials(committee.id, "chairman").includes(o))
                            .map(official => (
                              <button
                                key={official}
                                onClick={() => handleChairmanChange(committee.id, official)}
                                className="w-full px-4 py-2 text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                              >
                                {official}
                              </button>
                            ))}
                        </div>
                      )}
                  </div>
                </div>

                {/* Vice Chairman */}
                <div>
                  <label className="block text-black dark:text-white mb-2">Vice Chairman:</label>
                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown?.committeeId === committee.id &&
                          openDropdown?.field === "viceChairman"
                            ? null
                            : { committeeId: committee.id, field: "viceChairman" }
                        )
                      }
                      className="w-full h-[38px] px-3 border border-[#939393] dark:border-gray-600 rounded-[5px] bg-white dark:bg-gray-700 text-left flex items-center justify-between"
                    >
                      <span className="text-[#515151] dark:text-gray-300">
                        {committee.viceChairman || "Select an Official"}
                      </span>
                      <svg className="w-3 h-3 flex-shrink-0" fill="#6D798E" viewBox="0 0 13 13">
                        <path d={svgPaths.p284e7f80} />
                      </svg>
                    </button>
                    {openDropdown?.committeeId === committee.id &&
                      openDropdown?.field === "viceChairman" && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                          {availableOfficials
                            .filter(o => !getUsedOfficials(committee.id, "viceChairman").includes(o))
                            .map(official => (
                              <button
                                key={official}
                                onClick={() => handleViceChairmanChange(committee.id, official)}
                                className="w-full px-4 py-2 text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                              >
                                {official}
                              </button>
                            ))}
                        </div>
                      )}
                  </div>
                </div>
              </div>

              {/* Members */}
              {committee.members.map((member, memberIndex) => (
                <div key={memberIndex} className="mb-3">
                  <label className="block text-black dark:text-white mb-2">
                    Member {memberIndex + 1}:
                  </label>
                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown?.committeeId === committee.id &&
                          openDropdown?.field === "member" &&
                          openDropdown?.memberIndex === memberIndex
                            ? null
                            : { committeeId: committee.id, field: "member", memberIndex }
                        )
                      }
                      className="w-full h-[38px] px-3 border border-[#939393] dark:border-gray-600 rounded-[5px] bg-white dark:bg-gray-700 text-left flex items-center justify-between"
                    >
                      <span className="text-[#515151] dark:text-gray-300">
                        {member || "Select an Official"}
                      </span>
                      <svg className="w-3 h-3 flex-shrink-0" fill="#6D798E" viewBox="0 0 13 13">
                        <path d={svgPaths.p284e7f80} />
                      </svg>
                    </button>
                    {openDropdown?.committeeId === committee.id &&
                      openDropdown?.field === "member" &&
                      openDropdown?.memberIndex === memberIndex && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                          {availableOfficials
                            .filter(o => !getUsedOfficials(committee.id, "member", memberIndex).includes(o))
                            .map(official => (
                              <button
                                key={official}
                                onClick={() =>
                                  handleMemberChange(committee.id, memberIndex, official)
                                }
                                className="w-full px-4 py-2 text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                              >
                                {official}
                              </button>
                            ))}
                        </div>
                      )}
                  </div>
                </div>
              ))}

              {/* Add another Member button */}
              <button
                onClick={() => handleAddMember(committee.id)}
                className="w-1/2 h-[37px] mb-4 bg-[#dedede] dark:bg-gray-700 border border-dashed border-[#acacac] dark:border-gray-600 rounded-[6px] text-[#606060] dark:text-gray-300 hover:bg-[#d0d0d0] dark:hover:bg-gray-600 transition-colors"
              >
                Add another Member
              </button>
            </div>
          ))}

          {/* Add another Committee button */}
          <button
            onClick={handleAddCommittee}
            className="w-1/2 h-[37px] mb-8 bg-[#dedede] dark:bg-gray-700 border border-[#acacac] dark:border-gray-600 rounded-[6px] text-[#606060] dark:text-gray-300 hover:bg-[#d0d0d0] dark:hover:bg-gray-600 transition-colors"
          >
            Add another Committee
          </button>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="w-[110px] h-[45px] bg-[rgba(224,108,110,0.2)] dark:bg-red-900/20 border border-[#e06c6e] dark:border-red-500 rounded-[6px] text-[#e06c6e] dark:text-red-400 hover:bg-[rgba(224,108,110,0.3)] dark:hover:bg-red-900/30 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onPrevious}
              className="w-[110px] h-[45px] bg-[rgba(172,172,172,0.2)] dark:bg-gray-700 border border-[#acacac] dark:border-gray-600 rounded-[6px] text-[#606060] dark:text-gray-300 hover:bg-[rgba(172,172,172,0.3)] dark:hover:bg-gray-600 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={handleConfirm}
              className="w-[110px] h-[45px] bg-[#174499] dark:bg-blue-600 rounded-[6px] text-white hover:bg-[#123570] dark:hover:bg-blue-700 transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Click outside dropdowns to close */}
      {openDropdown && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </div>
  );
}