import { useState } from "react";
import { ChevronLeft, FileText, Scale, Clock } from "lucide-react";

interface PortalArchivesContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onBack: () => void;
}

interface ArchiveCategory {
  id: string;
  title: string;
  count: number;
  icon: React.ReactNode;
  gradient: string;
  borderColor: string;
}

export function PortalArchivesContent({ 
  darkMode, 
  viewMode, 
  onBack 
}: PortalArchivesContentProps) {
  const [selectedYear, setSelectedYear] = useState("2025");

  const years = ["2025", "2024", "2023", "2022"];

  const categories: ArchiveCategory[] = [
    {
      id: "resolutions",
      title: "Resolutions",
      count: 24,
      icon: <FileText className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)",
      borderColor: "rgba(96, 96, 96, 0.5)"
    },
    {
      id: "ordinances",
      title: "Ordinances",
      count: 18,
      icon: <Scale className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)",
      borderColor: "rgba(96, 96, 96, 0.5)"
    },
    {
      id: "minutes",
      title: "Minutes",
      count: 67,
      icon: <Clock className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, rgb(251, 44, 54) 0%, rgb(231, 0, 11) 100%)",
      borderColor: "rgba(96, 96, 96, 0.5)"
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Back Button */}
      <div className="bg-white dark:bg-gray-800 px-8 pt-6 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#4a5565] dark:text-gray-400 hover:text-[#174499] dark:hover:text-blue-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Portal Management</span>
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
      <div className="flex-1 bg-white dark:bg-gray-800">
        <div className="p-8">
          {/* Category Cards */}
          <div className="grid grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative rounded-[14px] p-5 border"
                style={{
                  background: darkMode 
                    ? category.gradient.replace(/0.35/g, '0.2')
                    : category.gradient.replace(/rgb/g, 'rgba').replace(/\)/g, ', 0.35)'),
                  borderColor: category.borderColor
                }}
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
                  <h3 className="text-[#101828] dark:text-gray-200 text-center">
                    {category.title}
                  </h3>

                  {/* Count */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#364153] dark:text-gray-300">
                      {category.count}
                    </span>
                    <span className="text-sm text-[#364153] dark:text-gray-400">
                      documents
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Message */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <span className="font-semibold">Portal Archives:</span> These documents are published to the public portal for citizens to view. Manage document visibility and accessibility from this section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
