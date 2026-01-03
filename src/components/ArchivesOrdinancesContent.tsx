import { useState, useEffect } from "react";
import { Search, Plus, ChevronLeft, Eye, Edit, Scale, FileText } from "lucide-react";
import { UploadDocumentModal } from "./UploadDocumentModal";
import { archivesAPI } from "../utils/database";

interface ArchivesOrdinancesContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onBack: () => void;
  onSubPageChange?: (subPage: string | undefined) => void;
}

interface Ordinance {
  id: string;
  number: number;
  recordId: string;
  title: string;
  author: string;
  uploadedDate: string;
  lastEditedBy: string;
  fileType: string;
  fileSize: string;
  year: string;
  fileData?: string;
  fileMimeType?: string;
}

export function ArchivesOrdinancesContent({ 
  darkMode, 
  viewMode, 
  onBack,
  onSubPageChange 
}: ArchivesOrdinancesContentProps) {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [ordinances, setOrdinances] = useState<Ordinance[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Default years - always show these even if no documents exist
  const defaultYears = ["2026", "2025", "2024", "2023", "2022"];
  const [availableYears, setAvailableYears] = useState<string[]>(defaultYears);

  const handleViewDocument = (ordinance: Ordinance) => {
    console.log('Attempting to view document:', ordinance);
    
    if (!ordinance.fileData) {
      alert('This document does not have an attached file. It may have been uploaded before file storage was implemented.');
      return;
    }
    
    if (!ordinance.fileMimeType) {
      alert('File type information is missing.');
      return;
    }

    try {
      // Remove any whitespace from base64 string
      const base64Data = ordinance.fileData.trim();
      
      // Decode base64 to binary
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: ordinance.fileMimeType });
      
      console.log('Blob created:', blob.size, 'bytes, type:', blob.type);
      
      // Create URL and open in new tab
      const url = URL.createObjectURL(blob);
      const newWindow = window.open(url, '_blank');
      
      if (!newWindow) {
        alert('Pop-up blocked. Please allow pop-ups for this site to view documents.');
      }
      
      // Clean up after a delay
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error('Error viewing document:', error);
      alert('Failed to open document. The file may be corrupted or in an invalid format.');
    }
  };

  useEffect(() => {
    fetchOrdinances();
  }, []);

  async function fetchOrdinances() {
    try {
      setLoading(true);
      const docs = await archivesAPI.getDocuments('ordinances');
      
      // Extract year from date or year field for each document
      const docsWithYear = docs.map((doc: any) => ({
        ...doc,
        year: doc.year || (doc.date ? doc.date.split('-')[0] : new Date().getFullYear().toString())
      }));
      
      // Extract unique years from documents
      const docYears = Array.from(new Set(docsWithYear.map((doc: any) => doc.year).filter(Boolean)));
      
      // Combine with default years and remove duplicates, then sort descending
      const allYears = Array.from(new Set([...defaultYears, ...docYears])).sort((a, b) => b.localeCompare(a));
      setAvailableYears(allYears);
      
      setOrdinances(docsWithYear);
    } catch (error) {
      console.error('Error fetching ordinances:', error);
    } finally {
      setLoading(false);
    }
  }

  // Filter ordinances by selected year and search query
  const filteredOrdinances = ordinances
    .filter(ordinance => ordinance.year === selectedYear)
    .filter(ordinance =>
      (ordinance.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ordinance.recordId || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ordinance.author || '').toLowerCase().includes(searchQuery.toLowerCase())
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
          {availableYears.map((year) => (
            <button
              key={`year-tab-${year}`}
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
      <div className="flex-1 bg-[#f3f3f3] dark:bg-gray-900 p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm min-h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              {/* Category Icon */}
              <div className="w-12 h-12 rounded-[10px] flex items-center justify-center p-2.5"
                style={{ background: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)" }}
              >
                <Scale className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl text-black dark:text-white">Ordinances</h2>
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
              {selectedYear === "2026" && (
                <button
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#3b5998] hover:bg-[#2d4373] text-white rounded-lg transition-colors"
                  onClick={() => setIsUploadModalOpen(true)}
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
                {filteredOrdinances.map((ordinance, index) => (
                  <tr
                    key={ordinance.id || `ordinance-${ordinance.recordId}-${index}`}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="px-6 py-6">
                      <p className="text-[#101828] dark:text-gray-200">{ordinance.number}</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-[#4a5565] dark:text-gray-400 text-sm">{ordinance.recordId}</p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#3b5998] dark:text-blue-400" />
                        <p className="text-[#101828] dark:text-gray-200">{ordinance.title}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">Author:</span> {ordinance.author}
                        </p>
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">Uploaded:</span> {ordinance.uploadedDate}
                        </p>
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">Last Edited by:</span> {ordinance.lastEditedBy}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-sm text-[#4a5565] dark:text-gray-400">
                        {ordinance.fileType} {ordinance.fileSize}
                      </p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleViewDocument(ordinance)}
                          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                          title="View Document"
                        >
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

            {filteredOrdinances.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No ordinances found matching your search.</p>
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
        category="ordinances"
        onUploadSuccess={fetchOrdinances}
      />
    </div>
  );
}