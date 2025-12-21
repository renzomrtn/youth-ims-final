import { useState } from "react";
import { FileText, Scale, Clock, Plus } from "lucide-react";

interface ArchivesContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onSubPageChange?: (subPage: string | undefined) => void;
}

interface CategoryData {
  id: string;
  name: string;
  count: number;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
}

export function ArchivesContent({ darkMode, viewMode, onSubPageChange }: ArchivesContentProps) {
  const [selectedYear, setSelectedYear] = useState("2025");

  const years = ["2025", "2024", "2023", "2022"];

  const handleCategoryClick = (categoryId: string) => {
    if (onSubPageChange) {
      onSubPageChange(categoryId);
    }
  };

  // Category data - counts can change based on selected year
  const categories: CategoryData[] = [
    {
      id: "resolutions",
      name: "Resolutions",
      count: selectedYear === "2025" ? 24 : selectedYear === "2024" ? 18 : selectedYear === "2023" ? 15 : 12,
      icon: <FileText className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)",
      bgGradient: "linear-gradient(162.329deg, rgba(43, 127, 255, 0.35) 0%, rgba(21, 93, 252, 0.35) 100%)"
    },
    {
      id: "ordinances",
      name: "Ordinances",
      count: selectedYear === "2025" ? 18 : selectedYear === "2024" ? 14 : selectedYear === "2023" ? 10 : 8,
      icon: <Scale className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)",
      bgGradient: "linear-gradient(162.329deg, rgba(173, 70, 255, 0.35) 0%, rgba(152, 16, 250, 0.35) 100%)"
    },
    {
      id: "minutes",
      name: "Minutes",
      count: selectedYear === "2025" ? 67 : selectedYear === "2024" ? 52 : selectedYear === "2023" ? 38 : 28,
      icon: <Clock className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(251, 44, 54) 0%, rgb(231, 0, 11) 100%)",
      bgGradient: "linear-gradient(162.329deg, rgba(251, 44, 54, 0.35) 0%, rgba(231, 0, 11, 0.35) 100%)"
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Year Tabs */}
      <div className="bg-white dark:bg-gray-800 px-5 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`py-5 px-1 relative ${
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

      {/* Content Area */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-3 gap-6 max-w-[1600px]">
          {/* Category Cards */}
          {categories.map((category) => (
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
          <button className="relative rounded-[14px] p-5 border border-dashed border-[#606060] dark:border-gray-500 bg-[rgba(194,194,194,0.35)] dark:bg-gray-700/35 hover:bg-[rgba(194,194,194,0.5)] dark:hover:bg-gray-700/50 transition-colors h-[168px]">
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
    </div>
  );
}