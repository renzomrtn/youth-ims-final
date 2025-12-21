import { useState } from "react";
import { X, ChevronDown, Upload } from "lucide-react";

interface UploadDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export function UploadDocumentModal({ isOpen, onClose, darkMode }: UploadDocumentModalProps) {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState<string[]>([""]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAuthorDropdownOpen, setIsAuthorDropdownOpen] = useState(false);

  // Sample officials list
  const officials = [
    "John Dale Cruz",
    "Maria Santos",
    "Pedro Reyes",
    "Carlos Mendez",
    "Nina Garcia",
    "Sarah Lopez",
    "Jennifer Aquino",
    "Michael Demas",
    "Robert Tan",
    "Diana Diwa",
    "Patricia Cruz",
    "Annalyn Reyes",
    "Rosa Martinez",
    "Emely Rexi"
  ];

  const handleAddAuthor = () => {
    setAuthors([...authors, ""]);
  };

  const handleAuthorChange = (index: number, value: string) => {
    const newAuthors = [...authors];
    newAuthors[index] = value;
    setAuthors(newAuthors);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleConfirm = () => {
    // Handle document upload logic here
    console.log({ title, authors, selectedFile });
    // Reset and close
    setTitle("");
    setAuthors([""]);
    setSelectedFile(null);
    onClose();
  };

  const handleCancel = () => {
    // Reset and close
    setTitle("");
    setAuthors([""]);
    setSelectedFile(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-[24px] w-[788px] relative shadow-2xl">
        {/* Header */}
        <div className="bg-[#334870] h-[88px] rounded-t-[24px] relative flex items-center px-10">
          <h2 className="text-white text-2xl">Upload Document</h2>
          <button
            onClick={handleCancel}
            className="absolute right-8 top-8 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-10">
          {/* Title Field */}
          <div className="mb-6">
            <label className="block text-base text-black dark:text-white mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-[38px] px-4 border border-[#939393] rounded-[5px] text-[#515151] dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:border-[#174499]"
            />
          </div>

          {/* Author Field */}
          <div className="mb-6">
            <label className="block text-base text-black dark:text-white mb-2">
              Author
            </label>
            {authors.map((author, index) => (
              <div key={index} className="mb-2">
                <div className="relative">
                  <select
                    value={author}
                    onChange={(e) => handleAuthorChange(index, e.target.value)}
                    className="w-full h-[38px] px-4 pr-10 border border-[#939393] rounded-[5px] text-[#515151] dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:border-[#174499] appearance-none"
                  >
                    <option value="">Select an Official</option>
                    {officials.map((official) => (
                      <option key={official} value={official}>
                        {official}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6d798e] pointer-events-none" />
                </div>
              </div>
            ))}

            {/* Add Another Author Button */}
            <button
              onClick={handleAddAuthor}
              className="w-full h-[38px] border border-dashed border-[#939393] dark:border-gray-600 rounded-[5px] text-[#515151] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Add another Author
            </button>
          </div>

          {/* Upload File Button */}
          <div className="mb-6">
            <label className="flex items-center justify-center gap-2 w-full h-[38px] bg-[#dedede] dark:bg-gray-600 border border-[#939393] dark:border-gray-500 rounded-[5px] cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
              <Upload className="w-5 h-5 text-[#6d798e] dark:text-gray-300" />
              <span className="text-[#515151] dark:text-gray-200">
                {selectedFile ? selectedFile.name : "Upload File"}
              </span>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancel}
              className="w-[110px] h-[45px] bg-[rgba(224,108,110,0.2)] border border-[#e06c6e] rounded-[6px] text-[#e06c6e] hover:bg-[rgba(224,108,110,0.3)] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="w-[110px] h-[45px] bg-[#174499] rounded-[6px] text-white hover:bg-[#0f2d66] transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}