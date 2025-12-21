import { FolderOpen, Banknote, Receipt, FileArchive } from "lucide-react";

interface PortalManagementContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onSubPageChange?: (subPage: string | undefined) => void;
}

interface StatCard {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
}

interface ActionCard {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export function PortalManagementContent({ 
  darkMode, 
  viewMode,
  onSubPageChange 
}: PortalManagementContentProps) {
  
  const handleCardClick = (cardId: string) => {
    if (onSubPageChange) {
      onSubPageChange(cardId);
    }
  };

  // Statistics cards
  const statCards: StatCard[] = [
    {
      title: "Annual Budget",
      value: "₱500,000.00",
      icon: <Banknote className="w-5 h-5 text-[#00d68f]" />,
      iconBg: "bg-[#d1fae5]"
    },
    {
      title: "Line Items",
      value: "50",
      icon: <Receipt className="w-5 h-5 text-[#00d68f]" />,
      iconBg: "bg-[#d1fae5]"
    },
    {
      title: "Verified Expenses",
      value: "45",
      icon: <FolderOpen className="w-5 h-5 text-[#1e90ff]" />,
      iconBg: "bg-[#dbeafe]"
    },
    {
      title: "Archived Documents",
      value: "156",
      icon: <FileArchive className="w-5 h-5 text-[#c084fc]" />,
      iconBg: "bg-[#f3e8ff]"
    }
  ];

  // Action cards
  const actionCards: ActionCard[] = [
    {
      id: "verifiedexpenses",
      title: "Verified Expenses",
      icon: <FolderOpen className="w-12 h-12 text-white" />
    },
    {
      id: "lineitems",
      title: "Line Items",
      icon: <Receipt className="w-12 h-12 text-white" />
    },
    {
      id: "portalarchives",
      title: "Archives",
      icon: <FileArchive className="w-12 h-12 text-white" />
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      <div className="p-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl text-black dark:text-white mb-2">Portal Management</h2>
          <p className="text-[#606060] dark:text-gray-400">
            Select a section to manage portal content
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm text-[#606060] dark:text-gray-400">{card.title}</p>
                <div className={`${card.iconBg} dark:bg-opacity-20 rounded-lg p-2`}>
                  {card.icon}
                </div>
              </div>
              <p className="text-2xl text-black dark:text-white">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-3 gap-6 max-w-[1200px]">
          {actionCards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="bg-gradient-to-br from-[#2b7fff] to-[#155dfc] hover:from-[#1e6eec] hover:to-[#0d4fd4] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all hover:scale-[1.02] shadow-lg"
            >
              <div className="bg-white/20 rounded-xl p-4">
                {card.icon}
              </div>
              <h3 className="text-xl text-white">
                {card.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
