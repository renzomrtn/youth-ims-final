import { useState } from "react";
import { X, ChevronDown, Upload } from "lucide-react";
import { archivesAPI } from "../utils/database";

interface UploadDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  category: 'resolutions' | 'ordinances' | 'minutes';
  onUploadSuccess?: () => void;
}

export function UploadDocumentModal({ 
  isOpen, 
  onClose, 
  darkMode, 
  category,
  onUploadSuccess 
}: UploadDocumentModalProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // YYYY-MM-DD
  const [authors, setAuthors] = useState<string[]>([""]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // Get current user from session storage or context
  const getCurrentUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      return user.fullName || user.username;
    }
    return 'System';
  };

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

  const handleRemoveAuthor = (index: number) => {
    if (authors.length > 1) {
      const newAuthors = authors.filter((_, i) => i !== index);
      setAuthors(newAuthors);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type
      if (file.type !== 'application/pdf') {
        setError('Only PDF files are allowed');
        return;
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      
      setError('');
      setSelectedFile(file);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getFileType = (filename: string): string => {
    const ext = filename.split('.').pop()?.toUpperCase();
    return ext || 'FILE';
  };

  const generateRecordId = (category: string, year: string, number: number): string => {
    const prefix = category === 'resolutions' ? 'RES' : 
                   category === 'ordinances' ? 'ORD' : 'MIN';
    return `${prefix}-${year}-${String(number).padStart(3, '0')}`;
  };

  const handleConfirm = async () => {
    // Validate inputs
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (!date) {
      setError("Date is required");
      return;
    }
    
    const validAuthors = authors.filter(a => a.trim());
    if (validAuthors.length === 0) {
      setError("At least one author is required");
      return;
    }

    if (!selectedFile) {
      setError("Please select a file to upload");
      return;
    }

    setError("");
    setUploading(true);

    try {
      const currentUser = getCurrentUser();
      const uploadDate = new Date().toISOString().split('T')[0];
      const year = date.split('-')[0];
      
      // Get existing documents to determine next number
      const existingDocs = await archivesAPI.getDocuments(category);
      const docsInYear = existingDocs.filter((doc: any) => {
        const docYear = doc.year || (doc.date ? doc.date.split('-')[0] : '');
        return docYear === year;
      });
      const nextNumber = docsInYear.length + 1;
      
      // Generate record ID
      const recordId = generateRecordId(category, year, nextNumber);
      
      // Convert file to base64 for storage
      const fileBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result as string;
          const base64Data = base64.split(',')[1]; // Remove data:mime;base64, prefix
          // console.log('File converted to base64, size:', base64Data.length, 'characters');
          resolve(base64Data);
        };
        reader.onerror = (error) => {
          console.error('FileReader error:', error);
          reject(error);
        };
        reader.readAsDataURL(selectedFile);
      });
      
      // Create document object
      const document = {
        category,
        recordId,
        number: nextNumber,
        title: title.trim(),
        author: validAuthors.join(', '),
        date,
        year,
        uploadedDate: uploadDate,
        lastEditedBy: currentUser,
        fileType: getFileType(selectedFile.name),
        fileSize: formatFileSize(selectedFile.size),
        fileName: selectedFile.name,
        fileData: fileBase64, // Store base64 encoded file
        fileMimeType: selectedFile.type,
      };

      console.log('Saving document:', {
        ...document,
        fileData: `${fileBase64.substring(0, 50)}... (${fileBase64.length} chars total)`
      });

      // Save to database
      await archivesAPI.createDocument(document);
      
      // console.log('Document saved successfully!');

      // Reset form
      setTitle("");
      setDate(new Date().toISOString().split('T')[0]);
      setAuthors([""]);
      setSelectedFile(null);
      
      // Call success callback to refresh parent
      if (onUploadSuccess) {
        onUploadSuccess();
      }
      
      onClose();
    } catch (error) {
      console.error("Error uploading document:", error);
      setError("Failed to upload document. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    // Reset and close
    setTitle("");
    setDate(new Date().toISOString().split('T')[0]);
    setAuthors([""]);
    setSelectedFile(null);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-[24px] w-[788px] max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Header */}
        <div className="bg-[#334870] h-[88px] rounded-t-[24px] relative flex items-center px-10 sticky top-0 z-10">
          <h2 className="text-white text-2xl">Upload Document</h2>
          <button
            onClick={handleCancel}
            className="absolute right-8 top-8 text-white hover:text-gray-300 transition-colors"
            disabled={uploading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-10">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 rounded-lg">
              <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Title Field */}
          <div className="mb-6">
            <label className="block text-base text-black dark:text-white mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Youth Development Resolution 2024-01"
              className="w-full h-[38px] px-4 border border-[#939393] rounded-[5px] text-[#515151] dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:border-[#174499]"
              disabled={uploading}
            />
          </div>

          {/* Date Field */}
          <div className="mb-6">
            <label className="block text-base text-black dark:text-white mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-[38px] px-4 border border-[#939393] rounded-[5px] text-[#515151] dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:border-[#174499]"
              disabled={uploading}
            />
          </div>

          {/* Author Field */}
          <div className="mb-6">
            <label className="block text-base text-black dark:text-white mb-2">
              Author(s) <span className="text-red-500">*</span>
            </label>
            {authors.map((author, index) => (
              <div key={index} className="mb-2 flex gap-2">
                <div className="relative flex-1">
                  <select
                    value={author}
                    onChange={(e) => handleAuthorChange(index, e.target.value)}
                    className="w-full h-[38px] px-4 pr-10 border border-[#939393] rounded-[5px] text-[#515151] dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:border-[#174499] appearance-none"
                    disabled={uploading}
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
                {authors.length > 1 && (
                  <button
                    onClick={() => handleRemoveAuthor(index)}
                    className="px-3 h-[38px] border border-red-400 dark:border-red-600 rounded-[5px] text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    disabled={uploading}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            {/* Add Another Author Button */}
            <button
              onClick={handleAddAuthor}
              className="w-full h-[38px] border border-dashed border-[#939393] dark:border-gray-600 rounded-[5px] text-[#515151] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              disabled={uploading}
            >
              Add another Author
            </button>
          </div>

          {/* Upload File Button */}
          <div className="mb-6">
            <label className="block text-base text-black dark:text-white mb-2">
              File <span className="text-red-500">*</span>
            </label>
            <label className="flex items-center justify-center gap-2 w-full h-[38px] bg-[#dedede] dark:bg-gray-600 border border-[#939393] dark:border-gray-500 rounded-[5px] cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
              <Upload className="w-5 h-5 text-[#6d798e] dark:text-gray-300" />
              <span className="text-[#515151] dark:text-gray-200 truncate max-w-[600px]">
                {selectedFile ? selectedFile.name : "Upload PDF File"}
              </span>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf"
                disabled={uploading}
              />
            </label>
            {selectedFile && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Size: {formatFileSize(selectedFile.size)}
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Only PDF files are supported
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancel}
              className="w-[110px] h-[45px] bg-[rgba(224,108,110,0.2)] border border-[#e06c6e] rounded-[6px] text-[#e06c6e] hover:bg-[rgba(224,108,110,0.3)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={uploading}
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="w-[110px] h-[45px] bg-[#174499] rounded-[6px] text-white hover:bg-[#0f2d66] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}