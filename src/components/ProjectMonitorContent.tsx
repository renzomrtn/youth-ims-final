import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

interface ProjectMonitorContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
}

interface Project {
  id: string;
  proponent: string;
  title: string;
  lineItemId: string;
  areaOfParticipation: string;
  budget: number;
  spent: number;
  started: string;
  dueDate: string;
  accomplished: string;
  progress: number;
  status: "Completed" | "In Progress" | "Pending";
}

// darkmode and viewmode props are currently unused but may be used in the future- removed for the meantime
export function ProjectMonitorContent({  }: ProjectMonitorContentProps) {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedBarangay, setSelectedBarangay] = useState("Cabaug");
  const [searchQuery, setSearchQuery] = useState("");
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [barangayDropdownOpen, setBarangayDropdownOpen] = useState(false);

  const years = ["2025", "2024", "2023", "2022"];
  const barangays = [
    "Calauag",
    "San Isidro",
    "Poblacion",
    "Bagong Silang",
    "Riverside",
    "Highland",
    "Vista Verde",
    "Sunshine Village"
  ];

  const projects: Project[] = [
    {
      id: "1",
      proponent: "Melody Marks",
      title: "Dengue Seminar",
      lineItemId: "LI-L-2025/910-2K2Q",
      areaOfParticipation: "Health",
      budget: 950000,
      spent: 900000,
      started: "Jan 15, 2025",
      dueDate: "Dec 15, 2025",
      accomplished: "Dec 15, 2025",
      progress: 100,
      status: "Completed"
    },
    {
      id: "2",
      proponent: "Teddy Tarantino",
      title: "Self Defense Seminar",
      lineItemId: "LI-L-2025/911-4X89",
      areaOfParticipation: "Public Safety",
      budget: 1200000,
      spent: 950000,
      started: "Feb 1, 2025",
      dueDate: "Mar 30, 2025",
      accomplished: "Mar 30, 2025",
      progress: 100,
      status: "Completed"
    },
    {
      id: "3",
      proponent: "Max Ellis",
      title: "Leadership Training Camp",
      lineItemId: "LI-L-2025/912-7M4P",
      areaOfParticipation: "Education",
      budget: 750000,
      spent: 750000,
      started: "Mar 10, 2025",
      dueDate: "Nov 15, 2025",
      accomplished: "Nov 15, 2025",
      progress: 100,
      status: "Completed"
    },
    {
      id: "4",
      proponent: "Hazel Moore",
      title: "Inter-Barangay Sports League",
      lineItemId: "LI-L-2025/913-91N1",
      areaOfParticipation: "Sports",
      budget: 900000,
      spent: 850000,
      started: "Apr 20, 2025",
      dueDate: "Apr 20, 2025",
      accomplished: "Apr 20, 2025",
      progress: 100,
      status: "Completed"
    },
    {
      id: "5",
      proponent: "Eden Ivy",
      title: "Youth Development Workshop",
      lineItemId: "LI-L-2025/914-52ND",
      areaOfParticipation: "Social Services",
      budget: 850000,
      spent: 700000,
      started: "Jun 5, 2025",
      dueDate: "Dec 31, 2025",
      accomplished: "Dec 31, 2025",
      progress: 100,
      status: "Completed"
    }
  ];

  // Filter projects based on search query
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.proponent.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.lineItemId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.areaOfParticipation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString()}.00`;
  };

  return (
    <div className="flex flex-col h-full p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-black dark:text-white mb-6">See Projects per Barangay</h2>
        
        {/* Filters and Search */}
        <div className="flex items-center gap-4">
          {/* Year Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setYearDropdownOpen(!yearDropdownOpen);
                setBarangayDropdownOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-[#174499] dark:hover:border-blue-400 transition-colors min-w-[120px] justify-between"
            >
              <span className="text-[#364153] dark:text-gray-200">{selectedYear}</span>
              <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
            {yearDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 min-w-[120px]">
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setYearDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      selectedYear === year ? "bg-blue-50 dark:bg-blue-900/20 text-[#174499] dark:text-blue-400" : "text-[#364153] dark:text-gray-200"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Barangay Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setBarangayDropdownOpen(!barangayDropdownOpen);
                setYearDropdownOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-[#174499] dark:hover:border-blue-400 transition-colors min-w-[160px] justify-between"
            >
              <span className="text-[#364153] dark:text-gray-200">{selectedBarangay}</span>
              <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
            {barangayDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 min-w-[160px] max-h-64 overflow-y-auto">
                {barangays.map(barangay => (
                  <button
                    key={barangay}
                    onClick={() => {
                      setSelectedBarangay(barangay);
                      setBarangayDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      selectedBarangay === barangay ? "bg-blue-50 dark:bg-blue-900/20 text-[#174499] dark:text-blue-400" : "text-[#364153] dark:text-gray-200"
                    }`}
                  >
                    {barangay}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <tr>
              <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                Proponent
              </th>
              <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                Project Title
              </th>
              <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                Line Item Information
              </th>
              <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                Budgeting Information
              </th>
              <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                Date Information
              </th>
              <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                Progress & Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-[#364153] dark:text-gray-200">{project.proponent}</p>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-[#364153] dark:text-gray-200">{project.title}</p>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-[#4a5565] dark:text-gray-400 mb-1">
                    <span className="text-[#364153] dark:text-gray-300">ID:</span> {project.lineItemId}
                  </p>
                  <p className="text-sm text-[#4a5565] dark:text-gray-400">
                    <span className="text-[#364153] dark:text-gray-300">Area of Participation:</span> {project.areaOfParticipation}
                  </p>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-[#4a5565] dark:text-gray-400 mb-1">
                    <span className="text-[#364153] dark:text-gray-300">Budget:</span> {formatCurrency(project.budget)}
                  </p>
                  <p className="text-sm text-[#4a5565] dark:text-gray-400">
                    <span className="text-[#364153] dark:text-gray-300">Spent:</span> {formatCurrency(project.spent)}
                  </p>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-[#4a5565] dark:text-gray-400 mb-1">
                    <span className="text-[#364153] dark:text-gray-300">Started:</span> {project.started}
                  </p>
                  <p className="text-sm text-[#4a5565] dark:text-gray-400 mb-1">
                    <span className="text-[#364153] dark:text-gray-300">Due Date:</span> {project.dueDate}
                  </p>
                  <p className="text-sm text-[#4a5565] dark:text-gray-400">
                    <span className="text-[#364153] dark:text-gray-300">Accomplished:</span> {project.accomplished}
                  </p>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-[#4a5565] dark:text-gray-400">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-[#00C950]"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#d1fae5] border border-[#6ee7b7] text-[#047857]">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] mr-2"></span>
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}