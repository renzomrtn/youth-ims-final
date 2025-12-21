import { useState } from "react";
import { Search, Plus, ChevronLeft, Eye, Edit, FileText } from "lucide-react";
import svgPaths from "../imports/svg-hx3j332lyi";
import { UploadDocumentModal } from "./UploadDocumentModal";

interface ArchivesResolutionsContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onBack: () => void;
  onSubPageChange?: (subPage: string | undefined) => void;
}

interface Resolution {
  number: number;
  recordId: string;
  title: string;
  author: string;
  uploadedDate: string;
  lastEditedBy: string;
  fileType: string;
  fileSize: string;
}

export function ArchivesResolutionsContent({ 
  darkMode, 
  viewMode, 
  onBack,
  onSubPageChange 
}: ArchivesResolutionsContentProps) {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const years = ["2025", "2024", "2023", "2022"];
  const currentYear = new Date().getFullYear().toString();

  // Sample resolutions data
  const resolutions: Resolution[] = [
    {
      number: 8,
      recordId: "RID-12118PU21",
      title: "Resolution on Educational Aid for Disaster Victims",
      author: "John Dale Cruz",
      uploadedDate: "September 09, 2024",
      lastEditedBy: "Emely Rexi",
      fileType: "PDF",
      fileSize: "1.4 MB"
    },
    {
      number: 7,
      recordId: "RID-12711ASR21",
      title: "Resolution opposing House Bill 10147d and Senate Bill 2707",
      author: "John Dale Cruz",
      uploadedDate: "December 25, 2024",
      lastEditedBy: "Maria Santos",
      fileType: "PDF",
      fileSize: "1.5 MB"
    },
    {
      number: 6,
      recordId: "RID-150273B23",
      title: "Resolution on Youth-Focused Drug Prevention",
      author: "Pedro Reyes",
      uploadedDate: "October 12, 2024",
      lastEditedBy: "Nina Garcia",
      fileType: "PDF",
      fileSize: "0.9 MB"
    },
    {
      number: 5,
      recordId: "RID-1FT27JJG21",
      title: "Resolution on Free HIV/AIDS Medication",
      author: "Carlos Mendez",
      uploadedDate: "September 18, 2024",
      lastEditedBy: "Sarah Dale Cruz",
      fileType: "PDF",
      fileSize: "1.1 MB"
    },
    {
      number: 4,
      recordId: "RID-15N271B21",
      title: "Resolution on Support for Youth Sports League",
      author: "Robert Tan",
      uploadedDate: "August 05, 2024",
      lastEditedBy: "Sarah Lopez",
      fileType: "PDF",
      fileSize: "1.0 MB"
    },
    {
      number: 3,
      recordId: "RID-12716ER3",
      title: "Resolution on Mental Health Programs for Youth",
      author: "Jennifer Aquino",
      uploadedDate: "December 30, 2024",
      lastEditedBy: "Michael Demas",
      fileType: "PDF",
      fileSize: "1.3 MB"
    },
    {
      number: 2,
      recordId: "RID-1271JVSD21",
      title: "Resolution on Financial Aid for Students",
      author: "Diana Diwa",
      uploadedDate: "September 12, 2024",
      lastEditedBy: "Patricia Cruz",
      fileType: "PDF",
      fileSize: "0.8 MB"
    },
    {
      number: 1,
      recordId: "RID-121073B11",
      title: "Resolution",
      author: "Annalyn Reyes",
      uploadedDate: "August 25, 2024",
      lastEditedBy: "Rosa Martinez",
      fileType: "PDF",
      fileSize: "0.7 MB"
    }
  ];

  const filteredResolutions = resolutions.filter(resolution =>
    resolution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resolution.recordId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resolution.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Back Button */}
      <div className="bg-white dark:bg-gray-800 px-8 pt-6 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#4a5565] dark:text-gray-400 hover:text-[#174499] dark:hover:text-blue-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Categories</span>
        </button>
      </div>

      {/* Year Tabs */}
      <div className="bg-white dark:bg-gray-800 px-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`py-4 px-1 relative ${
                selectedYear === year
                  ? "text-[#155dfc] dark:text-blue-400"
                  : "text-[#4a5565] dark:text-gray-400"
              }`}
            >
              <span>{year}</span>
              {selectedYear === year && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#155dfc] dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="bg-white dark:bg-gray-800 min-h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              {/* Category Icon */}
              <div className="w-12 h-12 rounded-[10px] flex items-center justify-center p-2.5"
                style={{ background: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}
              >
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl text-black dark:text-white">Resolutions</h2>
            </div>

            {/* Search and Add Button */}
            <div className="flex items-center justify-between">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 placeholder-gray-400"
                />
              </div>

              {/* Add Document Button - Only visible for current year */}
              {selectedYear === currentYear && (
                <button 
                  onClick={() => setIsUploadModalOpen(true)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#3b5998] hover:bg-[#2d4373] text-white rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Document
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div>
            <table className="w-full min-w-max">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <tr>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 w-20">
                    Number
                  </th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 w-48">
                    Record ID
                  </th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 w-80">
                    Document Details
                  </th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 w-32">
                    File
                  </th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 w-28">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredResolutions.map((resolution) => (
                  <tr
                    key={resolution.recordId}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="px-6 py-6">
                      <p className="text-[#101828] dark:text-gray-200">{resolution.number}</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-[#4a5565] dark:text-gray-400 text-sm">{resolution.recordId}</p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#3b5998] dark:text-blue-400" />
                        <p className="text-[#101828] dark:text-gray-200">{resolution.title}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">Author:</span> {resolution.author}
                        </p>
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">Uploaded:</span> {resolution.uploadedDate}
                        </p>
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">Last Edited by:</span> {resolution.lastEditedBy}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-sm text-[#4a5565] dark:text-gray-400">
                        {resolution.fileType} {resolution.fileSize}
                      </p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors">
                          <Eye className="w-4 h-4 text-[#6d798e] dark:text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors">
                          <Edit className="w-4 h-4 text-[#6d798e] dark:text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredResolutions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No resolutions found matching your search.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="px-4 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button className="px-4 py-2 bg-[#3b5998] text-white rounded">
              {currentPage}
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Upload Document Modal */}
      <UploadDocumentModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}