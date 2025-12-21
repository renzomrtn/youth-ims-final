import { useState } from "react";
import { X, Calendar, ChevronDown } from "lucide-react";
import svgPaths from "../imports/svg-37sznsw223";

interface AddTaskModalProps {
  darkMode: boolean;
  onClose: () => void;
  onConfirm: (task: {
    title: string;
    assignees: string[];
    dueDate: string;
    priority: "High" | "Medium" | "Low";
  }) => void;
}

// Mock members list - in a real app, this would come from your personnel data
const availableMembers = [
  "John Smith",
  "Jane Doe",
  "Alice Brown",
  "Bob Wilson",
  "Charlie Davis",
  "Diana Evans",
  "Frank Miller",
  "Grace Lee",
  "Henry Cooper",
  "Isabel Martinez"
];

export function AddTaskModal({ darkMode, onClose, onConfirm }: AddTaskModalProps) {
  const [taskName, setTaskName] = useState("");
  const [assignedMembers, setAssignedMembers] = useState<string[]>([""]);
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
  const [memberDropdownIndex, setMemberDropdownIndex] = useState<number | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleAddMember = () => {
    setAssignedMembers([...assignedMembers, ""]);
  };

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = [...assignedMembers];
    newMembers[index] = value;
    setAssignedMembers(newMembers);
    setMemberDropdownIndex(null);
  };

  const handleRemoveMember = (index: number) => {
    if (assignedMembers.length > 1) {
      const newMembers = assignedMembers.filter((_, i) => i !== index);
      setAssignedMembers(newMembers);
    }
  };

  const handleConfirm = () => {
    // Validate inputs
    if (!taskName.trim()) {
      alert("Please enter a task name");
      return;
    }

    const validMembers = assignedMembers.filter(m => m.trim() !== "");
    if (validMembers.length === 0) {
      alert("Please assign at least one member");
      return;
    }

    if (!dueDate) {
      alert("Please select a due date");
      return;
    }

    onConfirm({
      title: taskName,
      assignees: validMembers,
      dueDate: dueDate,
      priority: priority
    });
  };

  const getFilteredMembers = (currentIndex: number) => {
    const selectedMembers = assignedMembers.filter((_, i) => i !== currentIndex);
    return availableMembers.filter(member => !selectedMembers.includes(member));
  };

  return (
    <div 
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-task-title"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-[788px] relative shadow-2xl max-h-[90vh] overflow-y-auto" 
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <div className="bg-[#334870] dark:bg-[#1e293b] h-[88px] rounded-t-3xl flex items-center justify-between px-10">
          <h2 id="add-task-title" className="text-white text-2xl">Add a Task</h2>
          <button
            onClick={onClose}
            className="w-6 h-6 text-white hover:text-gray-300 transition-colors"
            aria-label="Close add task modal"
          >
            <X className="w-full h-full" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-10">
          <h3 className="text-black dark:text-white text-2xl mb-6">Task Details:</h3>

          {/* Task Name */}
          <div className="mb-6">
            <label className="block text-black dark:text-white mb-2">Task Name:</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full h-[38px] px-3 border border-[#939393] dark:border-gray-600 rounded-[5px] bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:border-[#174499] dark:focus:border-blue-400"
              placeholder="Enter task name"
            />
          </div>

          {/* Assigned Members */}
          <div className="mb-4">
            <label className="block text-black dark:text-white mb-2">Assigned Member:</label>
            {assignedMembers.map((member, index) => (
              <div key={index} className="mb-3 relative">
                <div className="relative">
                  <input
                    type="text"
                    value={member}
                    onChange={(e) => handleMemberChange(index, e.target.value)}
                    onFocus={() => setMemberDropdownIndex(index)}
                    className="w-full h-[38px] pl-3 pr-10 border border-[#939393] dark:border-gray-600 rounded-[5px] bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:border-[#174499] dark:focus:border-blue-400"
                    placeholder="Search or Select a Member"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    {assignedMembers.length > 1 && (
                      <button
                        onClick={() => handleRemoveMember(index)}
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                    <ChevronDown className="w-4 h-4 text-[#6D798E] dark:text-gray-400" />
                  </div>
                </div>

                {/* Dropdown */}
                {memberDropdownIndex === index && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                    {getFilteredMembers(index)
                      .filter(m => m.toLowerCase().includes(member.toLowerCase()))
                      .map((availableMember) => (
                        <button
                          key={availableMember}
                          onClick={() => handleMemberChange(index, availableMember)}
                          className="w-full px-4 py-2 text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          {availableMember}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add Another Member Button */}
          <button
            onClick={handleAddMember}
            className="w-full h-[37px] mb-6 bg-[#dedede] dark:bg-gray-700 border border-[#acacac] dark:border-gray-600 rounded-[6px] text-[#606060] dark:text-gray-300 hover:bg-[#d0d0d0] dark:hover:bg-gray-600 transition-colors"
          >
            Add another Member
          </button>

          {/* Priority Selection */}
          <div className="mb-6">
            <label className="block text-black dark:text-white mb-2">Priority:</label>
            <div className="relative">
              <button
                onClick={() => setShowPriorityDropdown(!showPriorityDropdown)}
                className="w-full h-[38px] px-3 border border-[#939393] dark:border-gray-600 rounded-[5px] bg-white dark:bg-gray-700 text-black dark:text-white flex items-center justify-between focus:outline-none focus:border-[#174499] dark:focus:border-blue-400"
              >
                <span>{priority}</span>
                <ChevronDown className="w-4 h-4 text-[#6D798E] dark:text-gray-400" />
              </button>
              {showPriorityDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10">
                  {(["High", "Medium", "Low"] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setPriority(p);
                        setShowPriorityDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Due Date */}
          <div className="mb-8">
            <label className="block text-black dark:text-white mb-2">Task's due date:</label>
            <div className="relative">
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full h-[38px] px-3 border border-[#939393] dark:border-gray-600 rounded-[5px] bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:border-[#174499] dark:focus:border-blue-400"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="w-[110px] h-[45px] bg-[rgba(224,108,110,0.2)] dark:bg-red-900/20 border border-[#e06c6e] dark:border-red-500 rounded-[6px] text-[#e06c6e] dark:text-red-400 hover:bg-[rgba(224,108,110,0.3)] dark:hover:bg-red-900/30 transition-colors"
            >
              Cancel
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

      {/* Click outside to close */}
      {(memberDropdownIndex !== null || showPriorityDropdown) && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => {
            setMemberDropdownIndex(null);
            setShowPriorityDropdown(false);
          }}
        />
      )}
    </div>
  );
}