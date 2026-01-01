import { useState, useEffect } from "react";
import { Search, Plus, Info, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { ExpenseVerificationModal, ExpenseVerificationData } from "./ExpenseVerificationModal";
import { ExpenseVerificationDetailView } from "./ExpenseVerificationDetailView";
import { FlaggingData } from "./FlaggingModal";

interface ExpenseVerificationContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onSubPageChange?: (subPage: string | undefined) => void;
}

interface ExpenseItem {
  id: string;
  lineItemId: string;
  lineItem: string;
  areaOfParticipation: string;
  budget: number;
  totalAmountSpent: number;
  fromDate: string;
  toDate: string;
  submittedBy: string;
  status: "Verified" | "Unverified" | "Pending" | "Flagged";
}

export function ExpenseVerificationContent({ darkMode, viewMode, onSubPageChange }: ExpenseVerificationContentProps) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("current");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedBarangay, setSelectedBarangay] = useState("Caliang");
  const [isExpenseVerificationModalOpen, setIsExpenseVerificationModalOpen] = useState(false);
  const [selectedExpenseItem, setSelectedExpenseItem] = useState<ExpenseItem | null>(null);

  // Mock flagging data for the flagged expense item
  const mockFlaggingData: FlaggingData = {
    lineItem: "HIV/AIDS Awareness Seminar",
    selectedExpenses: [
      {
        id: "1",
        particular: "Venue Rental (1-day seminar)",
        amount: 12000.00,
        date: "September 1, 2025",
      },
    ],
    fieldsToCorrect: {
      particular: false,
      amount: true,
      dateOfExpense: false,
      attachment: false,
    },
    remarks: "Attached receipt shows ₱10,000 but claim is ₱12,000. Please clarify the discrepancy.",
  };

  // Notify parent component of tab changes
  useEffect(() => {
    if (onSubPageChange) {
      onSubPageChange(activeTab);
    }
  }, [activeTab, onSubPageChange]);

  const expenseItems: ExpenseItem[] = [
    {
      id: "1",
      lineItemId: "ID: LI-2025/810-26ZQ",
      lineItem: "HIV/AIDS Awareness Seminar",
      areaOfParticipation: "Adolescent and Youth Health",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Flagged"
    },
    {
      id: "2",
      lineItemId: "ID: LI-2025/801-LZXIE",
      lineItem: "Anti-Illegal Drugs Seminar",
      areaOfParticipation: "Peace Building and Security",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Verified"
    },
    {
      id: "3",
      lineItemId: "ID: LI-2025/802-ZWPK",
      lineItem: "Leadership Training Camp",
      areaOfParticipation: "Quality Education",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Verified"
    },
    {
      id: "4",
      lineItemId: "ID: LI-2025/803-9JKL",
      lineItem: "Environmental Cleanup Drive",
      areaOfParticipation: "Sports Development",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Verified"
    },
    {
      id: "5",
      lineItemId: "ID: LI-2025/804-82HQ",
      lineItem: "Youth Sports Festival",
      areaOfParticipation: "Good Governance",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "Maria Garcia",
      status: "Verified"
    }
  ];

  const pastExpenseItems: ExpenseItem[] = [
    {
      id: "6",
      lineItemId: "LI-20250910-2ECO",
      lineItem: "Community Health Check-Up",
      areaOfParticipation: "Adolescent and Youth Health",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2024",
      toDate: "September 1, 2024",
      submittedBy: "Maria Garcia",
      status: "Verified"
    },
    {
      id: "7",
      lineItemId: "LI-20250911-43XR",
      lineItem: "Fire Safety Awareness and Drill Program",
      areaOfParticipation: "Peace Building and Security",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2024",
      toDate: "September 1, 2024",
      submittedBy: "Maria Garcia",
      status: "Verified"
    },
    {
      id: "8",
      lineItemId: "LI-20250912-7HMP",
      lineItem: "Training Program for Youth Athletes",
      areaOfParticipation: "Sports Development",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2024",
      toDate: "September 1, 2024",
      submittedBy: "Maria Garcia",
      status: "Verified"
    },
    {
      id: "9",
      lineItemId: "LI-20250913-14UL",
      lineItem: "Educational Assistance for Qualified Students",
      areaOfParticipation: "Good Governance",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2024",
      toDate: "September 1, 2024",
      submittedBy: "Maria Garcia",
      status: "Verified"
    }
  ];

  const monitoringExpenseItems: ExpenseItem[] = [
    {
      id: "11",
      lineItemId: "LI-20250910-2ECO",
      lineItem: "Mental Health Awareness Seminar",
      areaOfParticipation: "Adolescent and Youth Health",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "James Doakes",
      status: "Verified"
    },
    {
      id: "12",
      lineItemId: "LI-20250911-LLXWE",
      lineItem: "Road safety awareness",
      areaOfParticipation: "Peace Building and Security",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "James Doakes",
      status: "Verified"
    },
    {
      id: "13",
      lineItemId: "LI-20250912-7HMP",
      lineItem: "Youth Digital Literacy Training",
      areaOfParticipation: "Quality Education",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "James Doakes",
      status: "Verified"
    },
    {
      id: "14",
      lineItemId: "LI-20250913-914JKL",
      lineItem: "Rehabilitation of Barangay Basketball Court",
      areaOfParticipation: "Sports Development",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "James Doakes",
      status: "Verified"
    },
    {
      id: "15",
      lineItemId: "LI-20250914-GHRD",
      lineItem: "Community Feeding Program for Children",
      areaOfParticipation: "Good Governance",
      budget: 55555.56,
      totalAmountSpent: 55555.56,
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      submittedBy: "James Doakes",
      status: "Verified"
    }
  ];

  const filteredItems = expenseItems.filter(item =>
    item.lineItem.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.lineItemId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.submittedBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPastItems = pastExpenseItems.filter(item =>
    item.lineItem.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.lineItemId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.submittedBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMonitoringItems = monitoringExpenseItems.filter(item =>
    item.lineItem.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.lineItemId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.submittedBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Role-based permission checks
  const canSubmitVerification = () => {
    return user?.role === "SKF Secretary" || user?.role === "SKF Treasurer";
  };

  const canApprove = () => {
    return user?.role === "SKF Treasurer" || user?.role === "SKF President";
  };

  const canFlag = () => {
    return user?.role === "SKF Auditor" || user?.role === "SKF President";
  };

  const canViewFinancialDetails = () => {
    return user?.role === "SKF Treasurer" || user?.role === "SKF Auditor" || user?.role === "SKF President";
  };

  const getRoleInfo = () => {
    switch (user?.role) {
      case "SKF Secretary":
        return {
          title: "Secretary Access",
          description: "You can submit and view expense verifications",
          color: "bg-blue-50 border-blue-200 text-blue-700"
        };
      case "SKF Treasurer":
        return {
          title: "Treasurer Access",
          description: "You can approve/reject expenses and view financial details",
          color: "bg-green-50 border-green-200 text-green-700"
        };
      case "SKF Auditor":
        return {
          title: "Auditor Access",
          description: "You can flag items and audit all verifications",
          color: "bg-orange-50 border-orange-200 text-orange-700"
        };
      case "SKF President":
        return {
          title: "President Access",
          description: "You have full access to all verification functions",
          color: "bg-purple-50 border-purple-200 text-purple-700"
        };
      default:
        return {
          title: "User Access",
          description: "Limited access",
          color: "bg-gray-50 border-gray-200 text-gray-700"
        };
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Verified":
        return (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#d1fae5] border border-[#6ee7b7] text-[#047857]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] mr-2"></span>
            <span className="text-xs">Verified</span>
          </div>
        );
      case "Unverified":
        return (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fffbeb] border border-[#fe9a00] text-[#e17100]">
            <span className="w-2 h-2 rounded-full bg-[#fe9a00] mr-2"></span>
            <span className="text-xs">Unverified</span>
          </div>
        );
      case "Pending":
        return (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-gray-600">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
            <span className="text-xs">Pending</span>
          </div>
        );
      case "Flagged":
        return (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fff7f7] border border-[#fe0000] text-[#e10000]">
            <span className="w-2 h-2 rounded-full bg-[#fe0000] mr-2"></span>
            <span className="text-xs">Flagged</span>
          </div>
        );
      default:
        return null;
    }
  };

  const handleExpenseVerificationConfirm = (data: ExpenseVerificationData) => {
    console.log("Expense verification submitted:", data);
    // Here you would typically submit the expense verification data
  };

  // If viewing detail, show the detail view instead
  if (selectedExpenseItem) {
    return (
      <ExpenseVerificationDetailView
        darkMode={darkMode}
        onBack={() => setSelectedExpenseItem(null)}
        lineItemId={selectedExpenseItem.lineItemId}
        lineItemTitle={selectedExpenseItem.lineItem}
        lineItemArea={selectedExpenseItem.areaOfParticipation}
        budget={selectedExpenseItem.budget}
        totalAmountSpent={selectedExpenseItem.totalAmountSpent}
        fromDate={selectedExpenseItem.fromDate}
        toDate={selectedExpenseItem.toDate}
        submittedBy={selectedExpenseItem.submittedBy}
        status={selectedExpenseItem.status}
        flaggingData={selectedExpenseItem.status === "Flagged" ? mockFlaggingData : null}
      />
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Expense Verification Modal */}
      {isExpenseVerificationModalOpen && (
        <ExpenseVerificationModal
          isOpen={isExpenseVerificationModalOpen}
          onClose={() => setIsExpenseVerificationModalOpen(false)}
          onConfirm={handleExpenseVerificationConfirm}
        />
      )}

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8">
        <div className="flex gap-8">
          {["Current Verifications", "Past Verifications", "Verifications Monitoring"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "Current Verifications" ? "current" : tab === "Past Verifications" ? "past" : "monitoring")}
              className={`py-4 relative ${
                (activeTab === "current" && tab === "Current Verifications") ||
                (activeTab === "past" && tab === "Past Verifications") ||
                (activeTab === "monitoring" && tab === "Verifications Monitoring")
                  ? "text-[#174499] dark:text-blue-400"
                  : "text-[#606060] dark:text-gray-400"
              }`}
            >
              <span>{tab}</span>
              {((activeTab === "current" && tab === "Current Verifications") ||
                (activeTab === "past" && tab === "Past Verifications") ||
                (activeTab === "monitoring" && tab === "Verifications Monitoring")) && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#174499] dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8">
        {/* Role Explanation Cards - Only show for Auditor and Treasurer */}
        {user?.role === "SKF Auditor" && (
          <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">
              Role: SKF Auditor
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              As the Auditor, you can review expense verifications and flag items that need correction or approve verified expenses.
            </p>
          </div>
        )}
        {user?.role === "SKF Treasurer" && (
          <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-900 dark:text-green-200 mb-2">
              Role: SKF Treasurer
            </h3>
            <p className="text-sm text-green-800 dark:text-green-300">
              As the Treasurer, you can submit expense verifications for review and respond to any flagged items.
            </p>
          </div>
        )}
      
        <div className="bg-white dark:bg-gray-800 rounded-lg">
          {activeTab === "current" && (
            <>
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl text-black dark:text-white">Expense Verification</h2>
                  {user?.role === "SKF Treasurer" && (
                    <button 
                      onClick={() => setIsExpenseVerificationModalOpen(true)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#3b5998] hover:bg-[#2d4373] text-white rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Submit Verification
                    </button>
                  )}
                </div>

                {/* Search Bar and Dropdown for Treasurer/Auditor only */}
                {(user?.role === "SKF Treasurer" || user?.role === "SKF Auditor") ? (
                  <div className="flex items-center gap-3">
                    {/* Dropdown - placeholder for future filtering */}
                    <div className="relative">
                      <select className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 cursor-pointer">
                        <option>All Status</option>
                        <option>Verified</option>
                        <option>Unverified</option>
                        <option>Flagged</option>
                        <option>Pending</option>
                      </select>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search Expenses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 placeholder-gray-400"
                      />
                    </div>
                  </div>
                ) : (
                  /* Search Bar Only for Secretary/President */
                  <div className="flex items-center justify-end gap-3">
                    <div className="relative w-96">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search Expenses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 placeholder-gray-400"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Line Item
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Line Item Information
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Total Amount Spent
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Expenditure Period
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Submitted By
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="px-6 py-4">
                          <p className="text-black dark:text-white">{item.lineItem}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-black dark:text-white">
                              {item.lineItemId}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              <span className="font-semibold">Area of Advocacy:</span> {item.areaOfParticipation}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              <span className="font-semibold">Budget:</span> {formatCurrency(item.budget)}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-black dark:text-white">
                            {formatCurrency(item.totalAmountSpent)}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-black dark:text-white">
                              <span className="font-semibold">From:</span> {item.fromDate}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              <span className="font-semibold">To:</span> {item.toDate}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-black dark:text-white">{item.submittedBy}</p>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => setSelectedExpenseItem(item)}
                            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                          >
                            <Info className="w-4 h-4 text-[#6d798e] dark:text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredItems.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">No expense verifications found matching your search.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="flex items-center gap-1 px-3 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#3b5998] text-white rounded">
                  {currentPage}
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="flex items-center gap-1 px-3 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {activeTab === "past" && (
            <>
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl text-black dark:text-white">Past Expense Verifications</h2>
                </div>

                {/* Search Bar */}
                <div className="relative w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search Expenses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Line Item
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Line Item Information
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Total Amount Spent
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Expenditure Period
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Submitted By
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPastItems.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="px-6 py-4">
                          <p className="text-black dark:text-white">{item.lineItem}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-black dark:text-white">
                              {item.lineItemId}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              <span className="font-semibold">Area of Participation:</span> {item.areaOfParticipation}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              <span className="font-semibold">Budget:</span> {formatCurrency(item.budget)}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-black dark:text-white">
                            {formatCurrency(item.totalAmountSpent)}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-black dark:text-white">
                              <span className="font-semibold">From:</span> {item.fromDate}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              <span className="font-semibold">To:</span> {item.toDate}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-black dark:text-white">{item.submittedBy}</p>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors">
                            <Info className="w-4 h-4 text-[#6d798e] dark:text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredPastItems.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">No past expense verifications found matching your search.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="flex items-center gap-1 px-3 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#3b5998] text-white rounded">
                  {currentPage}
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="flex items-center gap-1 px-3 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {activeTab === "monitoring" && (
            <>
              {/* Header with Title and Filters */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg text-black dark:text-white">Expense Verification per Barangay</h3>
                  
                  <div className="flex items-center gap-4">
                    {/* Year Dropdown */}
                    <div className="relative">
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 cursor-pointer"
                      >
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Barangay Dropdown */}
                    <div className="relative">
                      <select
                        value={selectedBarangay}
                        onChange={(e) => setSelectedBarangay(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 cursor-pointer"
                      >
                        <option value="Caliang">Caliang</option>
                        <option value="Abella">Abella</option>
                        <option value="Carolina">Carolina</option>
                        <option value="Del Rosario">Del Rosario</option>
                        <option value="Mabolo">Mabolo</option>
                        <option value="Sabang">Sabang</option>
                        <option value="Triangulo">Triangulo</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-80">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search Verifications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div>
                <table className="w-full min-w-max">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                        Line Item
                      </th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                        Line Item Information
                      </th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                        Total Amount Spent
                      </th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                        Expenditure Period
                      </th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                        Submitted By
                      </th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMonitoringItems.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="px-6 py-7 w-[300px]">
                          <p className="text-[#101828] dark:text-gray-200">{item.lineItem}</p>
                        </td>
                        <td className="px-6 py-7 w-[310px]">
                          <div className="flex flex-col gap-1">
                            <p className="text-sm text-[#4a5565] dark:text-gray-400">
                              {item.lineItemId}
                            </p>
                            <p className="text-sm text-[#4a5565] dark:text-gray-400">
                              <span className="font-semibold">Area of Participation:</span> {item.areaOfParticipation}
                            </p>
                            <p className="text-sm text-[#4a5565] dark:text-gray-400">
                              <span className="font-semibold">Budget:</span> {formatCurrency(item.budget)}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-7 w-[185px]">
                          <p className="text-sm text-[#4a5565] dark:text-gray-400">
                            {formatCurrency(item.totalAmountSpent)}
                          </p>
                        </td>
                        <td className="px-6 py-7 w-[332px]">
                          <div className="flex flex-col gap-1">
                            <p className="text-sm text-[#4a5565] dark:text-gray-400">
                              <span className="font-semibold">From:</span> {item.fromDate}
                            </p>
                            <p className="text-sm text-[#4a5565] dark:text-gray-400">
                              <span className="font-semibold">To:</span> {item.toDate}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-7 w-[240px]">
                          <p className="text-[#101828] dark:text-gray-200">{item.submittedBy}</p>
                        </td>
                        <td className="px-6 py-7 w-[155px]">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="px-6 py-7 w-[60px]">
                          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors">
                            <Info className="w-4 h-4 text-[#6d798e] dark:text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredMonitoringItems.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">No monitoring expense verifications found matching your search.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="flex items-center gap-1 px-3 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#3b5998] text-white rounded">
                  {currentPage}
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="flex items-center gap-1 px-3 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}