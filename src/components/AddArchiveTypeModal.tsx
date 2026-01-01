import { useState } from "react";
import { X } from "lucide-react";
import { validateText, VALIDATION_MESSAGE } from "../utils/textValidation";

interface AddArchiveTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (typeName: string) => void;
  darkMode: boolean;
}

export function AddArchiveTypeModal({
  isOpen,
  onClose,
  onAdd,
  darkMode,
}: AddArchiveTypeModalProps) {
  const [typeName, setTypeName] = useState("");
  const [typeNameError, setTypeNameError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!typeName.trim()) {
      return;
    }

    if (typeNameError) {
      return;
    }

    onAdd(typeName);
    setTypeName("");
    setTypeNameError("");
    onClose();
  };

  const handleClose = () => {
    setTypeName("");
    setTypeNameError("");
    onClose();
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
          <h2 className="text-2xl text-white">Add Type</h2>
          <button
            onClick={handleClose}
            className="text-white hover:bg-white/10 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-10 py-8">
          <div className="mb-8">
            <label className="block text-black mb-2">Archive Name:</label>
            <input
              type="text"
              value={typeName}
              onChange={(e) => {
                const value = e.target.value;
                setTypeName(value);
                if (value && !validateText(value)) {
                  setTypeNameError(VALIDATION_MESSAGE);
                } else {
                  setTypeNameError("");
                }
              }}
              placeholder=""
              className="w-full h-[38px] px-4 border border-[#939393] rounded-md text-[#515151] focus:outline-none focus:border-[#174499]"
              required
            />
            {typeNameError && (
              <p className="mt-2 text-sm text-red-500">{typeNameError}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="w-[110px] h-[45px] border-2 border-[#e06c6e] bg-[rgba(224,108,110,0.2)] text-[#e06c6e] rounded-md hover:bg-[rgba(224,108,110,0.3)] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!typeName.trim() || !!typeNameError}
              className="w-[110px] h-[45px] bg-[#174499] text-white rounded-md hover:bg-[#123a7d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}