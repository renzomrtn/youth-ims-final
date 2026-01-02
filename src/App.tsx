import { useState } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ExpenseVerificationProvider } from "./contexts/ExpenseVerificationContext";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { DashboardContent } from "./components/DashboardContent";
import { ProjectsContent } from "./components/ProjectsContent";
import { BudgetPreparationContent } from "./components/BudgetPreparationContent";
import { BudgetFlowContent } from "./components/BudgetFlowContent";
import { LoginPage } from "./components/LoginPage";
import { KanbanBoard } from "./components/KanbanBoard";
import { ExpenseVerificationContent } from "./components/ExpenseVerificationContent";
import { ArchivesContent } from "./components/ArchivesContent";
import { ArchivesResolutionsContent } from "./components/ArchivesResolutionsContent";
import { ArchivesOrdinancesContent } from "./components/ArchivesOrdinancesContent";
import { ArchivesMinutesContent } from "./components/ArchivesMinutesContent";
import { PortalManagementContent } from "./components/PortalManagementContent";
import { PortalVerifiedExpensesContent } from "./components/PortalVerifiedExpensesContent";
import { PortalLineItemsContent } from "./components/PortalLineItemsContent";
import { PortalArchivesContent } from "./components/PortalArchivesContent";
import { PersonnelContent } from "./components/PersonnelContent";

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [currentSubPage, setCurrentSubPage] = useState<
    string | undefined
  >(undefined);
  const [viewMode, setViewMode] = useState<
    "federation" | "barangay"
  >("federation");

  // Kanban state
  const [kanbanData, setKanbanData] = useState<{
    projectTitle: string;
    committeeName: string;
    chairman: string;
    viceChairman: string;
  } | null>(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleOpenKanban = (data: {
    projectTitle: string;
    committeeName: string;
    chairman: string;
    viceChairman: string;
  }) => {
    setKanbanData(data);
    setCurrentSubPage("kanban");
  };

  const handleCloseKanban = () => {
    setKanbanData(null);
    setCurrentSubPage(undefined);
  };

  if (!isAuthenticated) {
    return <LoginPage darkMode={darkMode} />;
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          viewMode={viewMode}
          setViewMode={setViewMode}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          currentPage={currentPage}
          currentSubPage={currentSubPage}
          kanbanData={kanbanData}
        />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setCurrentSubPage={setCurrentSubPage}
            darkMode={darkMode}
            sidebarOpen={sidebarOpen}
          />
          <main
            className="flex-1 overflow-auto"
            role="main"
            aria-label="Main content"
          >
            {kanbanData && currentSubPage === "kanban" ? (
              <KanbanBoard
                darkMode={darkMode}
                projectTitle={kanbanData.projectTitle}
                committeeName={kanbanData.committeeName}
                chairman={kanbanData.chairman}
                viceChairman={kanbanData.viceChairman}
                onBack={handleCloseKanban}
              />
            ) : (
              <>
                {currentPage === "dashboard" && (
                  <DashboardContent
                    darkMode={darkMode}
                    viewMode={viewMode}
                  />
                )}
                {currentPage === "projects" && (
                  <ProjectsContent
                    darkMode={darkMode}
                    viewMode={viewMode}
                    onSubPageChange={setCurrentSubPage}
                    onOpenKanban={handleOpenKanban}
                  />
                )}
                {currentPage === "budgetpreparation" && (
                  <BudgetPreparationContent
                    darkMode={darkMode}
                    viewMode={viewMode}
                  />
                )}
                {currentPage === "budgetflow" && (
                  <BudgetFlowContent
                    darkMode={darkMode}
                    viewMode={viewMode}
                  />
                )}
                {currentPage === "expenseverification" && (
                  <ExpenseVerificationContent
                    darkMode={darkMode}
                    viewMode={viewMode}
                    onSubPageChange={setCurrentSubPage}
                  />
                )}
                {currentPage === "archives" && (
                  <>
                    {currentSubPage === "resolutions" ? (
                      <ArchivesResolutionsContent
                        darkMode={darkMode}
                        viewMode={viewMode}
                        onBack={() =>
                          setCurrentSubPage(undefined)
                        }
                        onSubPageChange={setCurrentSubPage}
                      />
                    ) : currentSubPage === "ordinances" ? (
                      <ArchivesOrdinancesContent
                        darkMode={darkMode}
                        viewMode={viewMode}
                        onBack={() =>
                          setCurrentSubPage(undefined)
                        }
                        onSubPageChange={setCurrentSubPage}
                      />
                    ) : currentSubPage === "minutes" ? (
                      <ArchivesMinutesContent
                        darkMode={darkMode}
                        viewMode={viewMode}
                        onBack={() =>
                          setCurrentSubPage(undefined)
                        }
                        onSubPageChange={setCurrentSubPage}
                      />
                    ) : (
                      <ArchivesContent
                        darkMode={darkMode}
                        viewMode={viewMode}
                        onSubPageChange={setCurrentSubPage}
                      />
                    )}
                  </>
                )}
                {currentPage === "portalmanagement" && (
                  <>
                    {currentSubPage === "verifiedexpenses" ? (
                      <PortalVerifiedExpensesContent
                        darkMode={darkMode}
                        viewMode={viewMode}
                        onBack={() =>
                          setCurrentSubPage(undefined)
                        }
                      />
                    ) : currentSubPage === "lineitems" ? (
                      <PortalLineItemsContent
                        darkMode={darkMode}
                        viewMode={viewMode}
                        onBack={() =>
                          setCurrentSubPage(undefined)
                        }
                      />
                    ) : currentSubPage === "portalarchives" ? (
                      <PortalArchivesContent
                        darkMode={darkMode}
                        viewMode={viewMode}
                        onBack={() =>
                          setCurrentSubPage(undefined)
                        }
                      />
                    ) : (
                      <PortalManagementContent
                        darkMode={darkMode}
                        viewMode={viewMode}
                        onSubPageChange={setCurrentSubPage}
                      />
                    )}
                  </>
                )}
                {currentPage === "personnel" && (
                  <PersonnelContent
                    darkMode={darkMode}
                    viewMode={viewMode}
                  />
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ExpenseVerificationProvider>
        <AppContent />
      </ExpenseVerificationProvider>
    </AuthProvider>
  );
}