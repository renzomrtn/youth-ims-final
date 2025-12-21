import svgPaths from "../imports/svg-7vtnwhnxri";
import imgAnalytics from "../assets/9066d0c3e92d7f448f496f9762ca0285553bd417.png";

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setCurrentSubPage: (subPage: string | undefined) => void;
  darkMode: boolean;
  sidebarOpen: boolean;
}

export function Sidebar({
  currentPage,
  setCurrentPage,
  setCurrentSubPage,
  darkMode,
  sidebarOpen,
}: SidebarProps) {
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setCurrentSubPage(undefined); // Clear subpage when changing main page
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setCurrentSubPage(undefined); // Clear subpage when changing main page
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: () => (
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d={svgPaths.p13b4cd00}
              fill={
                currentPage === "dashboard"
                  ? "#FFFFFF"
                  : "#606060"
              }
            />
            <path
              d={svgPaths.p32939e80}
              fill={
                currentPage === "dashboard"
                  ? "#FFFFFF"
                  : "#606060"
              }
            />
            <path
              d={svgPaths.pdc9c900}
              fill={
                currentPage === "dashboard"
                  ? "#FFFFFF"
                  : "#606060"
              }
            />
            <path
              d={svgPaths.p20de0972}
              fill={
                currentPage === "dashboard"
                  ? "#FFFFFF"
                  : "#606060"
              }
            />
          </g>
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      icon: () => (
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d={svgPaths.p24403780}
              stroke={
                currentPage === "projects"
                  ? "#FFFFFF"
                  : "#606060"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M8 10V14"
              stroke={
                currentPage === "projects"
                  ? "#FFFFFF"
                  : "#606060"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M12 10V12"
              stroke={
                currentPage === "projects"
                  ? "#FFFFFF"
                  : "#606060"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M16 10V16"
              stroke={
                currentPage === "projects"
                  ? "#FFFFFF"
                  : "#606060"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      ),
    },
    {
      id: "budgetpreparation",
      label: "Budget Preparation",
      icon: () => (
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d="M12 2V22"
              stroke={
                currentPage === "budgetpreparation"
                  ? "#FFFFFF"
                  : "#606060"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p2ba0dca0}
              stroke={
                currentPage === "budgetpreparation"
                  ? "#FFFFFF"
                  : "#606060"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      ),
    },
    {
      id: "expenseverification",
      label: "Expense Verification",
      icon: () => (
        <div className="content-stretch flex items-center overflow-clip relative shrink-0">
          <div className="relative shrink-0 size-[23px]">
            <img
              alt="expense verification icon"
              className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
              src={imgAnalytics}
              style={{
                filter:
                  currentPage === "expenseverification"
                    ? "brightness(0) invert(1)"
                    : "grayscale(100%)",
              }}
            />
          </div>
        </div>
      ),
    },
    {
      id: "archives",
      label: "Archives",
      icon: () => (
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d={svgPaths.p6b45080}
              stroke={
                currentPage === "archives"
                  ? "#FFFFFF"
                  : "#606060"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p2962b330}
              stroke={
                currentPage === "archives"
                  ? "#FFFFFF"
                  : "#606060"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M10 12H14"
              stroke={
                currentPage === "archives"
                  ? "#FFFFFF"
                  : "#606060"
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      ),
    },
    {
      id: "portalmanagement",
      label: "Portal Management",
      icon: () => (
        <div className="content-stretch flex items-center overflow-clip relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d={svgPaths.p11d16a80}
                  stroke={
                    currentPage === "portalmanagement"
                      ? "#FFFFFF"
                      : "#606060"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M3 9H21"
                  stroke={
                    currentPage === "portalmanagement"
                      ? "#FFFFFF"
                      : "#606060"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M9 21V9"
                  stroke={
                    currentPage === "portalmanagement"
                      ? "#FFFFFF"
                      : "#606060"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: "personnel",
      label: "Personnel",
      icon: () => (
        <div className="content-stretch flex items-center overflow-clip relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d={svgPaths.p1d820380}
                  stroke={
                    currentPage === "personnel"
                      ? "#FFFFFF"
                      : "#606060"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p27451300}
                  stroke={
                    currentPage === "personnel"
                      ? "#FFFFFF"
                      : "#606060"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p2981fe00}
                  stroke={
                    currentPage === "personnel"
                      ? "#FFFFFF"
                      : "#606060"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p161d4800}
                  stroke={
                    currentPage === "personnel"
                      ? "#FFFFFF"
                      : "#606060"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        </div>
      ),
    },
  ];

  if (!sidebarOpen) {
    return null;
  }

  return (
    <aside
      id="main-sidebar"
      className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-0"
      } overflow-hidden`}
      role="navigation"
      aria-label="Main navigation"
    >
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              currentPage === item.id
                ? "bg-[#174499] text-white"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            aria-label={`Navigate to ${item.label}`}
            aria-current={
              currentPage === item.id ? "page" : undefined
            }
          >
            <div
              className="w-5 h-5 shrink-0"
              aria-hidden="true"
            >
              <item.icon />
            </div>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}