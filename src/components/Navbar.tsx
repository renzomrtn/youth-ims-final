import { Moon, Sun, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import imgLogo from "../assets/70b6037ca8811c299a242748a14f3ede2d943af5.png";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  viewMode: "federation" | "barangay";
  setViewMode: (mode: "federation" | "barangay") => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  currentPage: string;
  currentSubPage?: string;
  kanbanData?: {
    projectTitle: string;
    committeeName: string;
  } | null;
}

export function Navbar({
  darkMode,
  toggleDarkMode,
  viewMode,
  setViewMode,
  sidebarOpen,
  toggleSidebar,
  currentPage,
  currentSubPage,
  kanbanData,
}: NavbarProps) {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  // Generate breadcrumb trail
  const getBreadcrumb = () => {
    const parts = [];
    
    // Handle kanban view
    if (currentSubPage === "kanban" && kanbanData) {
      parts.push("Projects");
      parts.push(kanbanData.projectTitle);
      parts.push(`${kanbanData.committeeName} Committee Kanban View`);
      return "/ " + parts.join(" / ");
    }
    
    // Add main page
    if (currentPage === "dashboard") {
      parts.push("Home");
    } else if (currentPage === "projects") {
      parts.push("Projects");
    } else if (currentPage === "budgetpreparation") {
      parts.push("Budget");
    } else if (currentPage === "budgetflow") {
      parts.push("Budget Flow");
    } else if (currentPage === "expenseverification") {
      parts.push("Expense Verification");
    } else if (currentPage === "archives") {
      parts.push("Archives");
    } else if (currentPage === "portalmanagement") {
      parts.push("Portal Management");
    } else if (currentPage === "personnel") {
      parts.push("Personnel");
    }
    
    // Add subpage if exists
    if (currentSubPage && currentSubPage !== "kanban") {
      if (currentSubPage === "certificategenerator") {
        parts.push("Certificate Generator");
      } else if (currentSubPage === "projectsperyear") {
        parts.push("Projects by Year");
      } else if (currentSubPage === "projectmonitor") {
        parts.push("Project Monitor");
      } else if (currentSubPage === "lineitems") {
        parts.push("Line Items");
      } else if (currentSubPage === "needsassessment") {
        parts.push("Needs Assessment");
      } else if (currentSubPage === "skmonitor") {
        parts.push("SK Monitor");
      } else if (currentSubPage === "current") {
        parts.push("Current Verifications");
      } else if (currentSubPage === "past") {
        parts.push("Past Verifications");
      } else if (currentSubPage === "monitoring") {
        parts.push("Verifications Monitoring");
      } else if (currentSubPage === "resolutions") {
        parts.push("Resolutions");
      } else if (currentSubPage === "ordinances") {
        parts.push("Ordinances");
      } else if (currentSubPage === "minutes") {
        parts.push("Minutes");
      } else if (currentSubPage === "verifiedexpenses") {
        parts.push("Verified Expenses");
      } else if (currentSubPage === "portalarchives") {
        parts.push("Archives");
      }
    }
    
    return parts.length > 0 ? "/ " + parts.join(" / ") : "/ Home";
  };

  return (
    <header 
      className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-5 flex items-center justify-between shrink-0 transition-colors"
      role="banner"
    >
      {/* Left Side - Burger Button and Branding */}
      <div className="flex items-center gap-5">
        {/* Burger Menu Button */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={sidebarOpen}
          aria-controls="main-sidebar"
        >
          <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        {/* Branding */}
        <div className="flex items-center gap-1.5">
          <img src={imgLogo} alt="YOUTH - Youth Officials' Unified Tracking Hub Logo" className="w-[42px] h-[42px] object-cover shrink-0" />
          <div className="w-[3px] h-[42px] bg-black dark:bg-white rounded-[5px] shrink-0" aria-hidden="true" />
          <div className="flex flex-col justify-center">
            <h1 className="text-[20px] leading-tight dark:text-white">YOUTH</h1>
            <p className="text-[9px] leading-tight dark:text-gray-400">Youth Officials&apos; Unified Tracking Hub</p>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav 
          className="flex items-center text-[#606060] dark:text-gray-400 text-[22px] ml-3"
          aria-label="Breadcrumb navigation"
        >
          {getBreadcrumb()}
        </nav>
      </div>

      {/* Right Side - Dark Mode Toggle and Profile */}
      <div className="flex items-center gap-5">
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={darkMode}
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" aria-hidden="true" />
          ) : (
            <Moon className="w-5 h-5 text-[#364153]" aria-hidden="true" />
          )}
        </button>

        {/* Profile */}
        <div className="relative">
          <button 
            className="flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg px-2 py-1 transition-colors"
            onClick={() => setShowDropdown(!showDropdown)}
            aria-label="User profile menu"
            aria-expanded={showDropdown}
            aria-haspopup="true"
          >
            <div className="w-[42px] h-[42px]">
              <svg className="w-full h-full" viewBox="0 0 42 42" fill="none">
                <path d="M21 32.52C17 32.52 13.464 30.472 11.4 27.4C11.448 24.2 17.8 22.44 21 22.44C24.2 22.44 30.552 24.2 30.6 27.4C28.536 30.472 25 32.52 21 32.52ZM21 9.8C22.273 9.8 23.4939 10.3057 24.3941 11.2059C25.2943 12.1061 25.8 13.327 25.8 14.6C25.8 15.873 25.2943 17.0939 24.3941 17.9941C23.4939 18.8943 22.273 19.4 21 19.4C19.727 19.4 18.5061 18.8943 17.6059 17.9941C16.7057 17.0939 16.2 15.873 16.2 14.6C16.2 13.327 16.7057 12.1061 17.6059 11.2059C18.5061 10.3057 19.727 9.8 21 9.8ZM21 5C18.8989 5 16.8183 5.41385 14.8771 6.21793C12.9359 7.022 11.172 8.20055 9.68629 9.68629C6.68571 12.6869 5 16.7565 5 21C5 25.2435 6.68571 29.3131 9.68629 32.3137C11.172 33.7994 12.9359 34.978 14.8771 35.7821C16.8183 36.5861 18.8989 37 21 37C25.2435 37 29.3131 35.3143 32.3137 32.3137C35.3143 29.3131 37 25.2435 37 21C37 12.152 29.8 5 21 5Z" fill="#AEAEAE" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400">Welcome Back,</p>
              <p className="text-base dark:text-white">{user?.role || "User"}</p>
            </div>
            <ChevronDown className="w-5 h-5 dark:text-gray-300" />
          </button>

          {/* Profile Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
              {/* View Mode Toggle */}
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-xs text-[#606060] dark:text-gray-400 mb-2">Switch View</p>
                <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("federation")}
                    className={`flex-1 px-3 py-2 text-sm rounded-md transition-all ${
                      viewMode === "federation"
                        ? "bg-white dark:bg-gray-600 text-[#174499] dark:text-blue-400 shadow-sm"
                        : "text-[#606060] dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    }`}
                  >
                    Federation
                  </button>
                  <button
                    onClick={() => setViewMode("barangay")}
                    className={`flex-1 px-3 py-2 text-sm rounded-md transition-all ${
                      viewMode === "barangay"
                        ? "bg-white dark:bg-gray-600 text-[#174499] dark:text-blue-400 shadow-sm"
                        : "text-[#606060] dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    }`}
                  >
                    Barangay
                  </button>
                </div>
              </div>

              <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white">
                Profile
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white">
                Settings
              </button>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
              <button 
                onClick={() => {
                  logout();
                  setShowDropdown(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-red-600 dark:text-red-400"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}