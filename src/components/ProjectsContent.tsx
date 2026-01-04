import { useState } from "react";
import { Plus, Edit } from "lucide-react";
import { ProjectMonitorContent } from "./ProjectMonitorContent";
import { CreateProjectModal } from "./CreateProjectModal";
import { CommitteeMembershipsModal } from "./CommitteeMembershipsModal";
import { ProjectConfirmationModal } from "./ProjectConfirmationModal";
import { CertificateGenerator } from "./CertificateGenerator";
import { ProjectsByYearContent } from "./ProjectsByYearContent";
import svgPaths from "../imports/svg-u8mtnpgcn3";
import React from "react";

import { projectsAPI } from "../utils/database";
import { useEffect } from "react";

interface ProjectsContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onSubPageChange: (subPage: string) => void;
  onOpenKanban: (data: {
    projectId: string;
    projectTitle: string;
    committeeName: string;
    committeeId: string;
    chairman: string;
    viceChairman: string;
  }) => void;
  refreshTrigger?: number;
}

interface Committee {
  id: string;
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

export function ProjectsContent({ darkMode, viewMode, onSubPageChange, onOpenKanban, refreshTrigger }: ProjectsContentProps) {
  const [activeTab, setActiveTab] = useState("projects");
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [expandedYears, setExpandedYears] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] = useState(false);
  const [isCommitteeMembershipsModalOpen, setIsCommitteeMembershipsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [pendingCommittees, setPendingCommittees] = useState<Committee[]>([]);
  const [pendingProjectData, setPendingProjectData] = useState<{
    proponent: string;
    lineItemId: string;
    projectTitle: string;
    dueDate: string;
  } | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const refreshProjects = async () => {
    try {
      const data = await projectsAPI.getAll();
      if (data && Array.isArray(data)) {
        setProjects(data);
      }
    } catch (error) {
      console.error("Error refreshing projects:", error);
    }
  };

  const handleCloseKanban = async () => {
    setKanbanData(null);
    setCurrentSubPage(undefined);
  };

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await projectsAPI.getAll();
        console.log('Loaded projects:', data);
        if (data && Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error('Invalid projects data:', data);
          setProjects([]);
        }
      } catch (error) {
        console.error("Error loading projects:", error);
        setProjects([]);
      }
    };

    loadProjects();
  }, [refreshTrigger]);

  const mockProjects = projects;

  const handleFirstModalConfirm = (data: {
    proponent: string;
    lineItemId: string;
    projectTitle: string;
    dueDate: string;
  }) => {
    setPendingProjectData(data);
    setIsCreateProjectModalOpen(false);
    setIsCommitteeMembershipsModalOpen(true);
  };

  const handleCommitteeMembershipsConfirm = (committees: Array<{
    id: string;
    name: string;
    chairman: string;
    viceChairman: string;
    members: string[];
  }>) => {
    setPendingCommittees(committees);  // Store committees
    setIsCommitteeMembershipsModalOpen(false);  // Close committee modal
    setIsConfirmationModalOpen(true);
  };

  const handleFinalConfirmation = async () => {
    if (!pendingProjectData) return;

    const lineItemDetails = [
      { id: "LI-L-2024/910-2K2Q", area: "Health Promotion" },
      { id: "LI-E-2024/850-3M4P", area: "Education" },
      { id: "LI-S-2024/720-5N6R", area: "Social Services" },
      { id: "LI-C-2024/630-8T9W", area: "Community Development" },
      { id: "LI-Y-2024/540-2X7Z", area: "Youth Development" }
    ].find(item => item.id === pendingProjectData.lineItemId);

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

    const formattedCommittees = pendingCommittees.map((committee, idx) => ({
      id: committee.id || `committee-${idx}`,
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

    const newProject = {
      proponent: pendingProjectData.proponent,
      title: pendingProjectData.projectTitle,
      lineItemId: pendingProjectData.lineItemId,
      lineItemArea: lineItemDetails?.area || "Unknown Area",
      budget: "₱0.00",
      spent: "₱0.00",
      startDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      dueDate: pendingProjectData.dueDate,
      accomplished: "",
      progress: 0,
      status: "Pending",
      expenseStatus: "Pending",
      committees: formattedCommittees
    };

    try {
      const createdProject = await projectsAPI.create(newProject);
      setProjects([...projects, createdProject]);
      setIsConfirmationModalOpen(false);
      setPendingProjectData(null);
      setPendingCommittees([]);
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project. Please try again.");
    }
  };

  const handleConfirmationClose = () => {
    setIsConfirmationModalOpen(false);
    setPendingProjectData(null);
    setPendingCommittees([]);
  };

  const handleConfirmationPrevious = () => {
    setIsConfirmationModalOpen(false);
    setIsCommitteeMembershipsModalOpen(true);
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
      return (
        <ProjectsByYearContent
          darkMode={darkMode}
          projects={mockProjects}
          expandedYears={expandedYears}
          onToggleYear={toggleYear}
        />
      );
    }

    // Projects tab content
    return (
      <>
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-black dark:text-white">Projects for 2025</h2>
          <div className="flex items-center gap-4">
            <input
              type="search"
              placeholder="Search projects..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder:text-gray-400"
              aria-label="Search projects"
            />
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-[#174499] hover:bg-[#0f2f6b] text-white rounded-lg transition-colors" 
              onClick={() => setIsCreateProjectModalOpen(true)}
              aria-label="Create new project"
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              New Project
            </button>
          </div>
        </header>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full" aria-label="Projects for 2025">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300 w-8"></th>
                <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Proponent</th>
                <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Project Title</th>
                <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Line Item Information</th>
                <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Budgeting Information</th>
                <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Date Information</th>
                <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Progress & Status</th>
                <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Expense Verification</th>
                <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockProjects.map((project) => (
                <React.Fragment key={project.id}>
                  {/* Main Row */}
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4">
                      {project.committees?.length > 0 && (
                        <button
                          onClick={() => toggleRow(project.id)}
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-transform"
                          style={{
                            transform: expandedRows.includes(project.id) ? "rotate(180deg)" : "rotate(0deg)"
                          }}
                          aria-expanded={expandedRows.includes(project.id)}
                          aria-label={`${expandedRows.includes(project.id) ? 'Collapse' : 'Expand'} committees for ${project.title}`}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d={svgPaths.p1e8d6080} fill="currentColor" className="text-gray-600 dark:text-gray-400" />
                          </svg>
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-white">{project.proponent}</td>
                    <td className="px-6 py-4 text-black dark:text-white">{project.title}</td>
                    <td className="px-6 py-4">
                      <p className="text-black dark:text-white">{project.lineItemId}</p>
                      <p className="text-gray-600 dark:text-gray-400">{project.lineItemArea}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-black dark:text-white">Budget: {project.budget}</p>
                      <p className="text-gray-600 dark:text-gray-400">Spent: {project.spent}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-black dark:text-white">Started: <time>{project.startDate}</time></p>
                      <p className="text-black dark:text-white">Due Date: <time>{project.dueDate}</time></p>
                      <p className="text-gray-600 dark:text-gray-400">Accomplished: <time>{project.accomplished}</time></p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="mb-2">
                        <output className="text-black dark:text-white mb-1 block" aria-label={`Progress: ${project.progress} percent`}>
                          {project.progress}%
                        </output>
                        <div 
                          className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2" 
                          role="progressbar" 
                          aria-valuenow={project.progress} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                          aria-label="Project progress"
                        >
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
                        }`} role="status" aria-label={`Project status: ${project.status}`}>
                        <span className={`w-2 h-2 rounded-full mr-2 ${project.status === "Completed" ? "bg-[#10b981]" : "bg-[#fe9a00]"
                          }`} aria-hidden="true" />
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${project.expenseStatus === "Verified"
                        ? "bg-[#d1fae5] border-[#6ee7b7] text-[#047857]"
                        : project.expenseStatus === "Pending"
                          ? "bg-gray-100 border-gray-300 text-gray-600"
                          : "bg-[#fff7f7] border-[#fe0000] text-[#e10000]"
                        }`} role="status" aria-label={`Expense verification: ${project.expenseStatus}`}>
                        <span className={`w-2 h-2 rounded-full mr-2 ${project.expenseStatus === "Verified"
                          ? "bg-[#10b981]"
                          : project.expenseStatus === "Pending"
                            ? "bg-gray-400"
                            : "bg-[#fe0000]"
                          }`} aria-hidden="true" />
                        {project.expenseStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded" aria-label={`Edit ${project.title}`}>
                        <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </td>
                  </tr>

                  {/* Expanded Committee Row */}
                  {expandedRows.includes(project.id) && project.committees.length > 0 && (
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td colSpan={9} className="px-6 py-6">
                        <section aria-label={`Committees for ${project.title}`}>
                          <div className="grid grid-cols-4 gap-4">
                            {project.committees?.map((committee, idx) => (
                              <article
                                key={committee.id || `committee-${project.id}-${idx}`}
                                className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                              >
                                <button
                                  onClick={() => onOpenKanban({
                                    projectId: project.id.toString(),
                                    projectTitle: project.title,
                                    committeeName: committee.name,
                                    committeeId: committee.id || idx.toString(),
                                    chairman: committee.chairman.name,
                                    viceChairman: committee.viceChairman.name,
                                  })}
                                  className="w-full hover:border-[#174499] dark:hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer text-left"
                                  aria-label={`View kanban board for ${committee.name} committee`}
                                >
                                  <h3 className="text-center text-[#364153] dark:text-gray-200 mb-4">
                                    Committee: {committee.name}
                                  </h3>

                                  {/* Chairman */}
                                  <div className="flex items-center gap-2 mb-3">
                                    <div
                                      className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0"
                                      style={{ backgroundImage: committee.chairman.gradient }}
                                      aria-hidden="true"
                                    >
                                      <span className="text-xs">{committee.chairman.initials}</span>
                                    </div>
                                    <div>
                                      <p className="text-xs text-[#6a7282] dark:text-gray-400">Chairman</p>
                                      <p className="text-sm text-[#4a5565] dark:text-gray-300">{committee.chairman.name}</p>
                                    </div>
                                  </div>

                                  {/* Vice Chairman */}
                                  <div className="flex items-center gap-2 mb-4">
                                    <div
                                      className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0"
                                      style={{ backgroundImage: committee.viceChairman.gradient }}
                                      aria-hidden="true"
                                    >
                                      <span className="text-xs">{committee.viceChairman.initials}</span>
                                    </div>
                                    <div>
                                      <p className="text-xs text-[#6a7282] dark:text-gray-400">Vice Chairman</p>
                                      <p className="text-sm text-[#4a5565] dark:text-gray-300">{committee.viceChairman.name}</p>
                                    </div>
                                  </div>

                                  {/* Members */}
                                  <p className="mb-2 text-sm text-[#364153] dark:text-gray-200">Members:</p>
                                  <ul className="space-y-2">
                                    {committee.members.map((member, mIdx) => (
                                      <li key={`${committee.id}-member-${mIdx}`} className="flex items-center gap-2">
                                        <div
                                          className="w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0"
                                          style={{ backgroundImage: member.gradient }}
                                          aria-hidden="true"
                                        >
                                          <span className="text-xs">{member.initials}</span>
                                        </div>
                                        <span className="text-sm text-[#4a5565] dark:text-gray-300">{member.name}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </button>
                              </article>
                            ))}
                          </div>
                        </section>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav className="flex items-center justify-center gap-2 p-6 border-t border-gray-200 dark:border-gray-700" aria-label="Pagination">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            disabled={currentPage === 1}
            aria-label="Go to previous page"
          >
            Previous
          </button>
          <button 
            className="px-4 py-2 bg-[#174499] text-white rounded"
            aria-current="page"
            aria-label={`Page ${currentPage}, current page`}
          >
            {currentPage}
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            aria-label="Go to next page"
          >
            Next
          </button>
        </nav>
      </>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Tabs */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8" aria-label="Project views">
        <ul className="flex gap-8" role="tablist">
          {["Projects", "Certificate Generator", "Projects per Year", "Project Monitor"].map((tab) => (
            <li key={tab} role="presentation">
              <button
                onClick={() => handleTabChange(tab.toLowerCase().replace(/\s+/g, ""))}
                className={`py-4 relative ${activeTab === tab.toLowerCase().replace(/\s+/g, "")
                  ? "text-[#174499] dark:text-blue-400"
                  : "text-[#606060] dark:text-gray-400"
                  }`}
                role="tab"
                aria-selected={activeTab === tab.toLowerCase().replace(/\s+/g, "")}
                aria-controls={`${tab.toLowerCase().replace(/\s+/g, "")}-panel`}
              >
                <span>{tab}</span>
                {activeTab === tab.toLowerCase().replace(/\s+/g, "") && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#174499] dark:bg-blue-400" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <main 
        className="flex-1 overflow-auto p-8" 
        role="tabpanel" 
        id={`${activeTab}-panel`}
        aria-labelledby={`${activeTab}-tab`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg">
          {renderContent()}
        </div>
      </main>

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
      {/* Confirmation Modal */}
      {isConfirmationModalOpen && pendingProjectData && (
        <ProjectConfirmationModal
          isOpen={isConfirmationModalOpen}
          onClose={handleConfirmationClose}
          onConfirm={handleFinalConfirmation}
          onPrevious={handleConfirmationPrevious}
          projectData={pendingProjectData}
          committees={pendingCommittees}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}