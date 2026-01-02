import { useState, useEffect } from "react";
import { FileText, Scale, Clock, Plus } from "lucide-react";
import { AddArchiveTypeModal } from "./AddArchiveTypeModal";
import { archivesAPI } from "../utils/database";

interface ArchivesContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onSubPageChange?: (subPage: string | undefined) => void;
  customCategories?: CategoryData[];
  onCustomCategoriesChange?: (categories: CategoryData[]) => void;
}

export interface CategoryData {
  id: string;
  name: string;
  count: number;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
  isCustom?: boolean;
}

export function ArchivesContent({ darkMode, viewMode, onSubPageChange, customCategories, onCustomCategoriesChange }: ArchivesContentProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [documentCounts, setDocumentCounts] = useState<Record<string, number>>({
    resolutions: 0,
    ordinances: 0,
    minutes: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDocumentCounts() {
      try {
        setLoading(true);
        // Fetch all documents for each category
        const [resolutionsDocs, ordinancesDocs, minutesDocs] = await Promise.all([
          archivesAPI.getDocuments('resolutions'),
          archivesAPI.getDocuments('ordinances'),
          archivesAPI.getDocuments('minutes'),
        ]);

        setDocumentCounts({
          resolutions: resolutionsDocs.length,
          ordinances: ordinancesDocs.length,
          minutes: minutesDocs.length,
        });
      } catch (error) {
        console.error('Error fetching document counts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDocumentCounts();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    if (onSubPageChange) {
      onSubPageChange(categoryId);
    }
  };

  const handleAddArchiveType = (typeName: string) => {
    const newCategory: CategoryData = {
      id: `custom-${Date.now()}`,
      name: typeName,
      count: 0,
      icon: <FileText className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(59, 127, 252) 0%, rgb(43, 108, 230) 100%)",
      bgGradient: "linear-gradient(162.329deg, rgba(59, 127, 252, 0.35) 0%, rgba(43, 108, 230, 0.35) 100%)",
      isCustom: true
    };
    const updatedCategories = [...(customCategories || []), newCategory];
    if (onCustomCategoriesChange) {
      onCustomCategoriesChange(updatedCategories);
    }
  };

  // Category data
  const categories: CategoryData[] = [
    {
      id: "resolutions",
      name: "Resolutions",
      count: documentCounts.resolutions,
      icon: <FileText className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)",
      bgGradient: "linear-gradient(162.329deg, rgba(43, 127, 255, 0.35) 0%, rgba(21, 93, 252, 0.35) 100%)"
    },
    {
      id: "ordinances",
      name: "Ordinances",
      count: documentCounts.ordinances,
      icon: <Scale className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)",
      bgGradient: "linear-gradient(162.329deg, rgba(173, 70, 255, 0.35) 0%, rgba(152, 16, 250, 0.35) 100%)"
    },
    {
      id: "minutes",
      name: "Minutes",
      count: documentCounts.minutes,
      icon: <Clock className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(251, 44, 54) 0%, rgb(231, 0, 11) 100%)",
      bgGradient: "linear-gradient(162.329deg, rgba(251, 44, 54, 0.35) 0%, rgba(231, 0, 11, 0.35) 100%)"
    }
  ];

  // Combine default and custom categories
  const allCategories = [...categories, ...(customCategories || [])];

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Content Area */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-3 gap-6 max-w-[1600px]">
          {/* Category Cards */}
          {allCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="relative rounded-[14px] p-5 border border-gray-400/50 dark:border-gray-600/50 hover:scale-[1.02] transition-transform"
              style={{ background: category.bgGradient }}
            >
              <div className="flex flex-col items-center gap-3.5">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-[10px] flex items-center justify-center p-3"
                  style={{ background: category.gradient }}
                >
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#101828] dark:text-gray-100 text-base">
                  {category.name}
                </h3>

                {/* Count */}
                <div className="flex items-center gap-2">
                  <span className="text-[#364153] dark:text-gray-300 text-sm font-semibold">
                    {category.count}
                  </span>
                  <span className="text-[#364153] dark:text-gray-300 text-sm">
                    documents
                  </span>
                </div>
              </div>
            </button>
          ))}

          {/* Add Category Card */}
          <button
            className="relative rounded-[14px] p-5 border border-dashed border-[#606060] dark:border-gray-500 bg-[rgba(194,194,194,0.35)] dark:bg-gray-700/35 hover:bg-[rgba(194,194,194,0.5)] dark:hover:bg-gray-700/50 transition-colors h-[168px]"
            onClick={() => setIsAddModalOpen(true)}
          >
            <div className="flex flex-col items-center justify-center gap-4 h-full">
              {/* Plus Icon */}
              <div className="w-14 h-14 rounded-[10px] bg-[#f3f4f6] dark:bg-gray-600 flex items-center justify-center">
                <Plus className="w-8 h-8 text-[#4a5565] dark:text-gray-300" />
              </div>

              {/* Title */}
              <h3 className="text-[#101828] dark:text-gray-100 text-base">
                Add Category
              </h3>

              {/* Description */}
              <p className="text-[#4a5565] dark:text-gray-400 text-sm">
                Create new archive type
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Add Archive Type Modal */}
      <AddArchiveTypeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddArchiveType}
        darkMode={darkMode}
      />
    </div>
  );
}