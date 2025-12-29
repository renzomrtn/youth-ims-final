import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Upload, Edit } from "lucide-react";
import { ProjectMonitorContent } from "./ProjectMonitorContent";
import { CreateProjectModal } from "./CreateProjectModal";
import { CommitteeMembershipsModal } from "./CommitteeMembershipsModal";
import { CertificateGenerator } from "./CertificateGenerator";
import svgPaths from "../imports/svg-u8mtnpgcn3";

interface ProjectsContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onSubPageChange: (subPage: string) => void;
  onOpenKanban: (data: {
    projectTitle: string;
    committeeName: string;
    chairman: string;
    viceChairman: string;
  }) => void;
}

interface Committee {
  name: string;
  chairman: {
    name: string;
    initials: string;
    gradient: string;
  };
  viceChairman: {
    name: string;
    initials: string;
    gradient: string;
  };
  members: Array<{
    name: string;
    initials: string;
    gradient: string;
  }>;
}

interface Project {
  id: number;
  proponent: string;
  title: string;
  lineItemId: string;
  lineItemArea: string;
  budget: string;
  spent: string;
  startDate: string;
  dueDate: string;
  accomplished: string;
  progress: number;
  status: "Completed" | "In Progress" | "Pending";
  expenseStatus: "Verified" | "Pending" | "Rejected";
  committees: Committee[];
}

// SVG paths for certificate generator
const svgPathsCert = {
  p3053b100: "M3.125 11.875L6.25 15L10 8.75",
  p320a7e80: "M6.25 10L10 6.25"
};

export function ProjectsContent({ darkMode, viewMode, onSubPageChange, onOpenKanban }: ProjectsContentProps) {
  const [activeTab, setActiveTab] = useState("projects");
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [expandedYears, setExpandedYears] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] = useState(false);
  const [isCommitteeMembershipsModalOpen, setIsCommitteeMembershipsModalOpen] = useState(false);
  const [pendingProjectData, setPendingProjectData] = useState<{
    proponent: string;
    lineItemId: string;
    projectTitle: string;
  } | null>(null);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      proponent: "Melody Marks",
      title: "HIV/AIDS Awareness Seminar",
      lineItemId: "LI-L-2024/910-2K2Q",
      lineItemArea: "Health Promotion",
      budget: "₱25,000.00",
      spent: "₱22,500.00",
      startDate: "Jan 15, 2024",
      dueDate: "Mar 30, 2024",
      accomplished: "Mar 28, 2024",
      progress: 100,
      status: "Completed",
      expenseStatus: "Verified",
      committees: [
        {
          name: "Executive",
          chairman: { name: "John Smith", initials: "JS", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
          viceChairman: { name: "Jane Doe", initials: "JD", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
          members: [
            { name: "Alice Johnson", initials: "AJ", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
            { name: "Bob Williams", initials: "BW", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
          ]
        },
        {
          name: "Finance",
          chairman: { name: "Mike Brown", initials: "MB", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
          viceChairman: { name: "Sarah Davis", initials: "SD", gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
          members: [
            { name: "Tom Wilson", initials: "TW", gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
            { name: "Emma Garcia", initials: "EG", gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
          ]
        }
      ]
    },
    {
      id: 2,
      proponent: "Teddy Tarantino",
      title: "Youth Leadership Training",
      lineItemId: "LI-L-2024/911-4X89",
      lineItemArea: "Leadership Development",
      budget: "₱35,000.00",
      spent: "₱28,000.00",
      startDate: "Feb 1, 2024",
      dueDate: "Jun 30, 2024",
      accomplished: "Jun 28, 2024",
      progress: 100,
      status: "Completed",
      expenseStatus: "Verified",
      committees: [
        {
          name: "Program",
          chairman: { name: "Lisa Martinez", initials: "LM", gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
          viceChairman: { name: "David Lee", initials: "DL", gradient: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)" },
          members: [
            { name: "Chris Taylor", initials: "CT", gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
          ]
        }
      ]
    },
    {
      id: 3,
      proponent: "Max Ellis",
      title: "Community Sports Festival",
      lineItemId: "LI-L-2024/912-7M4P",
      lineItemArea: "Sports & Recreation",
      budget: "₱50,000.00",
      spent: "₱35,000.00",
      startDate: "Mar 10, 2024",
      dueDate: "Dec 15, 2024",
      accomplished: "",
      progress: 70,
      status: "In Progress",
      expenseStatus: "Pending",
      committees: [
        {
          name: "Program",
          chairman: { name: "Lisa Martinez", initials: "LM", gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
          viceChairman: { name: "David Lee", initials: "DL", gradient: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)" },
          members: [
            { name: "Chris Taylor", initials: "CT", gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
          ]
        }
      ]
    }
  ]);

  // Mock projects data - reference to state
  const mockProjects = projects;

  // Step 1: Handle first modal confirm - open second modal
  const handleFirstModalConfirm = (data: {
    proponent: string;
    lineItemId: string;
    projectTitle: string;
  }) => {
    setPendingProjectData(data);
    setIsCreateProjectModalOpen(false);
    setIsCommitteeMembershipsModalOpen(true);
  };

  // Step 2: Handle second modal confirm - create project
  const handleCommitteeMembershipsConfirm = (committees: Array<{
    id: string;
    name: string;
    chairman: string;
    viceChairman: string;
    members: string[];
  }>) => {
    if (!pendingProjectData) return;

    // Find line item details
    const lineItemDetails = [
      { id: "LI-L-2024/910-2K2Q", area: "Health Promotion" },
      { id: "LI-E-2024/850-3M4P", area: "Education" },
      { id: "LI-S-2024/720-5N6R", area: "Social Services" },
      { id: "LI-C-2024/630-8T9W", area: "Community Development" },
      { id: "LI-Y-2024/540-2X7Z", area: "Youth Development" }
    ].find(item => item.id === pendingProjectData.lineItemId);

    // Generate gradients for committee members
    const gradients = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)"
    ];

    const getInitials = (name: string) => {
      return name
        .split(" ")
        .map(part => part[0])
        .join("")
        .toUpperCase();
    };

    // Transform committees to match project structure
    const formattedCommittees: Committee[] = committees.map((committee, idx) => ({
      name: committee.name,
      chairman: {
        name: committee.chairman,
        initials: getInitials(committee.chairman),
        gradient: gradients[idx % gradients.length]
      },
      viceChairman: {
        name: committee.viceChairman,
        initials: getInitials(committee.viceChairman),
        gradient: gradients[(idx + 1) % gradients.length]
      },
      members: committee.members.map((member, mIdx) => ({
        name: member,
        initials: getInitials(member),
        gradient: gradients[(idx + mIdx + 2) % gradients.length]
      }))
    }));

    const newProject: Project = {
      id: projects.length + 1,
      proponent: pendingProjectData.proponent,
      title: pendingProjectData.projectTitle,
      lineItemId: pendingProjectData.lineItemId,
      lineItemArea: lineItemDetails?.area || "Unknown Area",
      budget: "₱0.00",
      spent: "₱0.00",
      startDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      dueDate: "",
      accomplished: "",
      progress: 0,
      status: "Pending",
      expenseStatus: "Pending",
      committees: formattedCommittees
    };

    setProjects([...projects, newProject]);
    setIsCommitteeMembershipsModalOpen(false);
    setPendingProjectData(null);
  };

  const handleCommitteeMembershipsClose = () => {
    setIsCommitteeMembershipsModalOpen(false);
    setPendingProjectData(null);
  };

  const handleCommitteeMembershipsPrevious = () => {
    setIsCommitteeMembershipsModalOpen(false);
    setIsCreateProjectModalOpen(true);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "certificategenerator") {
      onSubPageChange("certificategenerator");
    } else if (tab === "projectsperyear") {
      onSubPageChange("projectsperyear");
    } else if (tab === "projectmonitor") {
      onSubPageChange("projectmonitor");
    } else {
      onSubPageChange("");
    }
  };

  const toggleRow = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleYear = (year: number) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const renderContent = () => {
    if (activeTab === "projectmonitor") {
      return <ProjectMonitorContent darkMode={darkMode} viewMode={viewMode} />;
    }

    if (activeTab === "certificategenerator") {
      return (
        <CertificateGenerator
          darkMode={darkMode}
          selectedProject={selectedProject}
          projects={mockProjects}
          onProjectChange={setSelectedProject}
        />
      );
    }

    if (activeTab === "projectsperyear") {
      const projects2024 = mockProjects;
      const projects2023: Project[] = [];
      const projects2022: Project[] = [];

      return (
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-black dark:text-white">Projects by Year</h2>
            <input
              type="text"
              placeholder="Search projects..."
              aria-label="Search projects"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder:text-gray-400"
            />
          </div>

          {/* Projects for 2024 */}
          <div className="mb-6">
            <button
              onClick={() => toggleYear(2024)}
              aria-label={`${expandedYears.includes(2024) ? 'Collapse' : 'Expand'} projects for 2024`}
              aria-expanded={expandedYears.includes(2024)}
              className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-2 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-black dark:text-white">Projects for 2024</h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${expandedYears.includes(2024) ? "rotate-180" : ""
                  }`}
              />
            </button>
            {expandedYears.includes(2024) && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Proponent</th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Project Title</th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Line Item Information</th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Budgeting Information</th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Date Information</th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Progress & Status</th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects2024.map((project) => (
                      <tr
                        key={project.id}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="px-6 py-4 text-black dark:text-white">{project.proponent}</td>
                        <td className="px-6 py-4 text-black dark:text-white">{project.title}</td>
                        <td className="px-6 py-4">
                          <div className="text-black dark:text-white">{project.lineItemId}</div>
                          <div className="text-gray-600 dark:text-gray-400 text-sm">{project.lineItemArea}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-black dark:text-white">Budget: {project.budget}</div>
                          <div className="text-gray-600 dark:text-gray-400 text-sm">Spent: {project.spent}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-black dark:text-white text-sm">Started: {project.startDate}</div>
                          <div className="text-black dark:text-white text-sm">Due Date: {project.dueDate}</div>
                          <div className="text-gray-600 dark:text-gray-400 text-sm">Accomplished: {project.accomplished}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm border-2 flex items-center gap-1.5 w-fit ${project.status === "Completed"
                            ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
                            : "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400"
                            }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${project.status === "Completed" ? "bg-green-600 dark:bg-green-400" : "bg-orange-600 dark:bg-orange-400"
                              }`} />
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                            <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Projects for 2023 */}
          <div className="mb-6">
            <button
              onClick={() => toggleYear(2023)}
              className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-2 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-black dark:text-white">Projects for 2023</h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${expandedYears.includes(2023) ? "rotate-180" : ""
                  }`}
              />
            </button>
            {expandedYears.includes(2023) && (
              <div className="p-4 text-gray-600 dark:text-gray-400">
                No projects for this year
              </div>
            )}
          </div>

          {/* Projects for 2022 */}
          <div className="mb-6">
            <button
              onClick={() => toggleYear(2022)}
              className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-2 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-black dark:text-white">Projects for 2022</h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${expandedYears.includes(2022) ? "rotate-180" : ""
                  }`}
              />
            </button>
            {expandedYears.includes(2022) && (
              <div className="p-4 text-gray-600 dark:text-gray-400">
                No projects for this year
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 p-6">
            <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              Previous
            </button>
            <button className="px-4 py-2 bg-[#174499] text-white rounded">
              1
            </button>
            <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              Next
            </button>
          </div>
        </div>
      );
    }

    // Projects tab content
    return (
      <>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-black dark:text-white">Projects for 2025</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search projects..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder:text-gray-400"
            />
            <button className="flex items-center gap-2 px-4 py-2 bg-[#174499] hover:bg-[#0f2f6b] text-white rounded-lg transition-colors" onClick={() => setIsCreateProjectModalOpen(true)} aria-label="Create new project">
              <Plus className="w-4 h-4" />
              New Project
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300 w-8"></th>
                <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Proponent</th>
                <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Project Title</th>
                <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Line Item Information</th>
                <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Budgeting Information</th>
                <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Date Information</th>
                <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Progress & Status</th>
                <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Expense Verification</th>
                <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockProjects.map((project) => (
                <>
                  {/* Main Row */}
                  <tr
                    key={project.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-700/50"
                  >
                    <td className="px-6 py-4">
                      {project.committees.length > 0 && (
                        <button
                          onClick={() => toggleRow(project.id)}
                          aria-label={`${expandedRows.includes(project.id) ? 'Collapse' : 'Expand'} committee details for ${project.title}`}
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-transform"
                          style={{
                            transform: expandedRows.includes(project.id) ? "rotate(180deg)" : "rotate(0deg)"
                          }}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <path d={svgPaths.p1e8d6080} fill="currentColor" className="text-gray-600 dark:text-gray-400" />
                          </svg>
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-white">{project.proponent}</td>
                    <td className="px-6 py-4 text-black dark:text-white">{project.title}</td>
                    <td className="px-6 py-4">
                      <div className="text-black dark:text-white">{project.lineItemId}</div>
                      <div className="text-gray-600 dark:text-gray-400">{project.lineItemArea}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-black dark:text-white">Budget: {project.budget}</div>
                      <div className="text-gray-600 dark:text-gray-400">Spent: {project.spent}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-black dark:text-white">Started: {project.startDate}</div>
                      <div className="text-black dark:text-white">Due Date: {project.dueDate}</div>
                      <div className="text-gray-600 dark:text-gray-400">Accomplished: {project.accomplished}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="text-black dark:text-white mb-1">{project.progress}%</div>
                        <div role="progressbar"
                          aria-valuenow={project.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`Project progress: ${project.progress}%`}
                          className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${project.progress}%`,
                              backgroundColor: project.progress === 100 ? "#00C950" : "#86b0ff"
                            }}
                          />
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${project.status === "Completed"
                        ? "bg-[#d1fae5] border-[#6ee7b7] text-[#047857]"
                        : "bg-[#fffbeb] border-[#fe9a00] text-[#e17100]"
                        }`} role="status"
                        aria-label={`Project status: ${project.status}`}>
                        <span className={`w-2 h-2 rounded-full mr-2 ${project.status === "Completed" ? "bg-[#10b981]" : "bg-[#fe9a00]"
                          }`} />
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${project.expenseStatus === "Verified"
                        ? "bg-[#d1fae5] border-[#6ee7b7] text-[#047857]"
                        : project.expenseStatus === "Pending"
                          ? "bg-gray-100 border-gray-300 text-gray-600"
                          : "bg-[#fff7f7] border-[#fe0000] text-[#e10000]"
                        }`}>
                        <span className={`w-2 h-2 rounded-full mr-2 ${project.expenseStatus === "Verified"
                          ? "bg-[#10b981]"
                          : project.expenseStatus === "Pending"
                            ? "bg-gray-400"
                            : "bg-[#fe0000]"
                          }`} />
                        {project.expenseStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded" aria-label={`Edit project: ${project.title}`}>
                        <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </td>
                  </tr>

                  {/* Expanded Committee Row */}
                  {expandedRows.includes(project.id) && project.committees.length > 0 && (
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td colSpan={9} className="px-6 py-6">
                        <div className="grid grid-cols-4 gap-4">
                          {project.committees.map((committee, idx) => (
                            <button
                              key={idx}
                              onClick={() => onOpenKanban({
                                projectTitle: project.title,
                                committeeName: committee.name,
                                chairman: committee.chairman.name,
                                viceChairman: committee.viceChairman.name,
                              })}
                              aria-label={`Open kanban board for ${committee.name} committee of ${project.title}`}
                              className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-[#174499] dark:hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer text-left"
                            >
                              <h3 className="text-center text-[#364153] dark:text-gray-200 mb-4">
                                Committee: {committee.name}
                              </h3>

                              {/* Chairman */}
                              <div className="flex items-center gap-2 mb-3">
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0"
                                  style={{ backgroundImage: committee.chairman.gradient }}
                                >
                                  <span className="text-xs">{committee.chairman.initials}</span>
                                </div>
                                <div>
                                  <div className="text-xs text-[#6a7282] dark:text-gray-400">Chairman</div>
                                  <div className="text-sm text-[#4a5565] dark:text-gray-300">{committee.chairman.name}</div>
                                </div>
                              </div>

                              {/* Vice Chairman */}
                              <div className="flex items-center gap-2 mb-4">
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0"
                                  style={{ backgroundImage: committee.viceChairman.gradient }}
                                >
                                  <span className="text-xs">{committee.viceChairman.initials}</span>
                                </div>
                                <div>
                                  <div className="text-xs text-[#6a7282] dark:text-gray-400">Vice Chairman</div>
                                  <div className="text-sm text-[#4a5565] dark:text-gray-300">{committee.viceChairman.name}</div>
                                </div>
                              </div>

                              {/* Members */}
                              <div className="mb-2 text-sm text-[#364153] dark:text-gray-200">Members:</div>
                              <div className="space-y-2">
                                {committee.members.map((member, mIdx) => (
                                  <div key={mIdx} className="flex items-center gap-2">
                                    <div
                                      className="w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0"
                                      style={{ backgroundImage: member.gradient }}
                                    >
                                      <span className="text-xs">{member.initials}</span>
                                    </div>
                                    <div className="text-sm text-[#4a5565] dark:text-gray-300">{member.name}</div>
                                  </div>
                                ))}
                              </div>
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            disabled={currentPage === 1}
            aria-label="Go to previous page">
            Previous
          </button>
          <button className="px-4 py-2 bg-[#174499] text-white rounded" aria-label={`Current page, page ${currentPage}`} aria-current="page">
            {currentPage}
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            aria-label="Go to next page"
          >
            Next
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8">
        <div className="flex gap-8">
          {["Projects", "Certificate Generator", "Projects per Year", "Project Monitor"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab.toLowerCase().replace(/\s+/g, ""))}
              aria-label={`${tab} tab`}
              aria-current={activeTab === tab.toLowerCase().replace(/\s+/g, "") ? "page" : undefined}
              className={`py-4 relative ${activeTab === tab.toLowerCase().replace(/\s+/g, "")
                ? "text-[#174499] dark:text-blue-400"
                : "text-[#606060] dark:text-gray-400"
                }`}
            >
              <span>{tab}</span>
              {activeTab === tab.toLowerCase().replace(/\s+/g, "") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#174499] dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg">
          {renderContent()}
        </div>
      </div>

      {/* Create Project Modal */}
      <CreateProjectModal isOpen={isCreateProjectModalOpen} onClose={() => setIsCreateProjectModalOpen(false)} onCreate={handleFirstModalConfirm} />
      {/* Committee Memberships Modal */}
      {isCommitteeMembershipsModalOpen && (
        <CommitteeMembershipsModal
          darkMode={darkMode}
          onClose={handleCommitteeMembershipsClose}
          onConfirm={handleCommitteeMembershipsConfirm}
          onPrevious={handleCommitteeMembershipsPrevious}
        />
      )}
    </div>
  );
}