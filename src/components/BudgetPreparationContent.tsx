import { useState, useEffect } from "react";
import { Search, Plus, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { SKMonitorContent } from "./SKMonitorContent";
import { AddFundsModal } from "./AddFundsModal";
import { NewLineItemModal, NewLineItemData } from "./NewLineItemModal";
import { FundAugmentationModal, FundAugmentationData } from "./FundAugmentationModal";
import { NewNeedsAssessmentModal, NeedsAssessmentData } from "./NewNeedsAssessmentModal";
import { budgetAPI } from "../utils/database";
import iconImage from "../assets/840a7c9e4be257a2a4b1a91d02385fb8ed9cd3fd.png";

interface BudgetPreparationContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
}

interface LineItem {
  id: string;
  lineItemId: string;
  needsId: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  remaining: number;
  implementationDate: string;
  status: "In Progress" | "Completed" | "Pending";
}

interface NeedsAssessment {
  id: string;
  needsId: string;
  evidence: string;
  description: string;
  areaOfParticipation: string;
  yearIdentified: string;
  proposedSolution: string;
  status: "In Progress" | "Completed" | "Pending";
}

interface Fund {
  id: string;
  fiscalYear: string;
  amount: number;
  type: "annual" | "supplemental";
}

export function BudgetPreparationContent({ darkMode, viewMode }: BudgetPreparationContentProps) {
  const [activeTab, setActiveTab] = useState("lineitems");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddFundsModalOpen, setIsAddFundsModalOpen] = useState(false);
  const [isNewLineItemModalOpen, setIsNewLineItemModalOpen] = useState(false);
  const [isFundAugmentationModalOpen, setIsFundAugmentationModalOpen] = useState(false);
  const [selectedLineItem, setSelectedLineItem] = useState<LineItem | null>(null);
  const [budgetType, setBudgetType] = useState<"annual" | "supplemental">("annual");
  const [isNewNeedsAssessmentModalOpen, setIsNewNeedsAssessmentModalOpen] = useState(false);

  // State for data
  const [lineItems, setLineItems] = useState<LineItem[]>([]);
  const [needsAssessments, setNeedsAssessments] = useState<NeedsAssessment[]>([]);
  const [funds, setFunds] = useState<Fund[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Helper function to generate Needs ID
  const generateNeedsId = () => {
    const year = new Date().getFullYear();
    const nextNumber = needsAssessments.length + 1;
    return `NID-${year}-${String(nextNumber).padStart(3, '0')}`;
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
  try {
    setLoading(true);
    setError(null);

    // Fetch line items and funds (these endpoints exist)
    const [lineItemsData, fundsData] = await Promise.all([
      budgetAPI.getLineItems(),
      budgetAPI.getFunds(),
    ]);

    // Try to fetch needs assessments, but don't fail if endpoint doesn't exist
    let needsAssessmentsData = [];
    try {
      needsAssessmentsData = await budgetAPI.getNeedsAssessments();
      console.log("Needs Assessments Data:", needsAssessmentsData);
    } catch (needsError) {
      console.log("Needs assessments endpoint not available yet, using local state");
      // Keep the current needs assessments state if the endpoint doesn't exist
      needsAssessmentsData = needsAssessments;
    }

    console.log("Line Items Data:", lineItemsData);
    console.log("First Line Item:", lineItemsData[0]);
    console.log("Funds Data:", fundsData);
    console.log("First Fund:", fundsData[0]);

    setLineItems(lineItemsData || []);
    setFunds(fundsData || []);
    setNeedsAssessments(needsAssessmentsData || []);
  } catch (err) {
    console.error("Error fetching data:", err);
    setError(err instanceof Error ? err.message : "Failed to fetch data");
  } finally {
    setLoading(false);
  }
};

  // Calculate budget totals from funds
const totalAnnualBudget = funds
    .filter(f => f.type === "annual")
    .reduce((sum, f) => sum + (f.amount ?? 0), 0);

  const totalSupplementalBudget = funds
    .filter(f => f.type === "supplemental")
    .reduce((sum, f) => sum + (f.amount ?? 0), 0);

  const totalCommitted = lineItems.reduce((sum, item) => sum + (item.budget ?? 0), 0);
  const totalSpent = lineItems.reduce((sum, item) => sum + ((item.budget ?? 0) - (item.remaining ?? 0)), 0);
  const totalRemaining = (totalAnnualBudget + totalSupplementalBudget) - totalCommitted;

  const filteredLineItems = lineItems.filter(item =>
    (item.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.lineItemId?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.needsId?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.category?.toLowerCase() || "").includes(searchQuery.toLowerCase())
  );

  const filteredNeedsAssessments = needsAssessments.filter(item =>
    (item.needsId?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.evidence?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.description?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (item.proposedSolution?.toLowerCase() || "").includes(searchQuery.toLowerCase())
  );
  const formatCurrency = (amount: number | undefined | null) => {
    const safeAmount = amount ?? 0; // Use 0 if amount is null or undefined
    return `₱${safeAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#d1fae5] border border-[#6ee7b7] text-[#047857]";
      case "In Progress":
        return "bg-[#fffbeb] border border-[#fe9a00] text-[#e17100]";
      case "Pending":
        return "bg-gray-100 border border-gray-300 text-gray-600";
      default:
        return "bg-gray-100 border border-gray-300 text-gray-600";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#10b981]";
      case "In Progress":
        return "bg-[#fe9a00]";
      case "Pending":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const handleAddFundsConfirm = async (data: { fiscalYear: string; amount: number; recordId: string }) => {
    try {
      await budgetAPI.createFund({
        fiscalYear: data.fiscalYear,
        amount: data.amount,
        type: budgetType,
        recordId: data.recordId,
      });
      
      // Refresh data
      await fetchAllData();
      setIsAddFundsModalOpen(false);
    } catch (err) {
      console.error("Error adding funds:", err);
      alert("Failed to add funds. Please try again.");
    }
  };

  const handleNewLineItemConfirm = async (data: NewLineItemData) => {
    try {
      // Generate line item ID
      const year = new Date().getFullYear();
      const existingLineItems = lineItems.filter(item => 
        item.lineItemId && item.lineItemId.startsWith(`LI-${year}-`)
      );
      
      let nextNumber = 1;
      if (existingLineItems.length > 0) {
        const numbers = existingLineItems.map(item => {
          const match = item.lineItemId?.match(/LI-\d{4}-(\d{3})/);
          return match ? parseInt(match[1], 10) : 0;
        });
        nextNumber = Math.max(...numbers, 0) + 1;
      }
      
      const lineItemId = `LI-${year}-${String(nextNumber).padStart(3, '0')}`;
      
      // Prepare the data to send to backend
      const lineItemData = {
        lineItemId,
        needsId: data.needsId || '', // For PPA
        title: data.lineItemName,
        description: data.justification || '', // For GAE
        category: data.activityType === "Projects/Programs/Activities (PPA)" ? "PPA" : "GAE",
        budget: data.amountToAllocate,
        remaining: data.amountToAllocate, // Initially, remaining = budget
        implementationDate: `${data.implementationPeriod.from} - ${data.implementationPeriod.to}`,
        implementationPeriodFrom: data.implementationPeriod.from,
        implementationPeriodTo: data.implementationPeriod.to,
        status: "Pending", // Default status
        sourceOfFund: data.sourceOfFund,
        activityType: data.activityType,
        advocacyArea: data.advocacyArea,
      };

      console.log("Creating line item with data:", lineItemData);

      // Send to backend
      await budgetAPI.createLineItem(lineItemData);
      
      console.log("Line item created successfully");
      
      // Refresh data to show the new line item
      await fetchAllData();
      
      // Close the modal
      setIsNewLineItemModalOpen(false);
      
      // Show success message
      alert("Line item created successfully!");
    } catch (err) {
      console.error("Error creating line item:", err);
      alert("Failed to create line item. Please try again.");
    }
  };

  const handleFundAugmentationConfirm = async (data: FundAugmentationData) => {
    try {
      if (!selectedLineItem) return;

      // Update the line item with augmented funds
      await budgetAPI.updateLineItem(selectedLineItem.id, {
        budget: selectedLineItem.budget + data.amount,
        remaining: selectedLineItem.remaining + data.amount,
      });
      
      // Refresh data
      await fetchAllData();
      setIsFundAugmentationModalOpen(false);
      setSelectedLineItem(null);
    } catch (err) {
      console.error("Error augmenting funds:", err);
      alert("Failed to augment funds. Please try again.");
    }
  };

  const handleNewNeedsAssessmentConfirm = async (data: NeedsAssessmentData) => {
  try {
    // Generate IDs using the helper function
    const tempId = `NA-${Date.now()}`;
    const tempNeedsId = generateNeedsId(); // Using the helper function
    
    // Create new assessment object
    const newAssessment: NeedsAssessment = {
      id: tempId,
      needsId: tempNeedsId,
      evidence: data.recordId,
      description: data.description,
      areaOfParticipation: data.areaOfParticipation,
      yearIdentified: new Date().getFullYear().toString(),
      proposedSolution: data.proposedSolution,
      status: "Pending",
    };

    // Try to save to backend, but fall back to local state if it fails
    try {
      const savedAssessment = await budgetAPI.createNeedsAssessment({
        areaOfParticipation: data.areaOfParticipation,
        recordId: data.recordId,
        description: data.description,
        proposedSolution: data.proposedSolution,
        status: "Pending",
        yearIdentified: new Date().getFullYear().toString(),
      });
      
      console.log("New needs assessment created in backend:", savedAssessment);
      
      // Refresh data from backend
      await fetchAllData();
    } catch (apiError) {
      console.log("Backend not available, saving locally:", apiError);
      
      // Add to local state
      setNeedsAssessments(prev => [...prev, newAssessment]);
      
      console.log("New needs assessment created locally:", newAssessment);
    }
    
    // Close the modal
    setIsNewNeedsAssessmentModalOpen(false);
    
    // Optional: Show success message
    alert("Needs assessment created successfully!");
  } catch (err) {
    console.error("Error creating needs assessment:", err);
    alert("Failed to create needs assessment. Please try again.");
  }
};

  const handleUpdateLineItem = async (item: LineItem) => {
    try {
      // You would typically open an edit modal here
      // For now, just logging
      console.log("Edit line item:", item);
    } catch (err) {
      console.error("Error updating line item:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#174499] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading budget data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">Error: {error}</p>
          <button
            onClick={fetchAllData}
            className="px-4 py-2 bg-[#3b5998] text-white rounded-lg hover:bg-[#2d4373]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Add Funds Modal */}
      <AddFundsModal
        isOpen={isAddFundsModalOpen}
        onClose={() => setIsAddFundsModalOpen(false)}
        budgetType={budgetType}
        onConfirm={handleAddFundsConfirm}
      />

      {/* New Line Item Modal */}
      <NewLineItemModal
          isOpen={isNewLineItemModalOpen}
          onClose={() => setIsNewLineItemModalOpen(false)}
          onConfirm={handleNewLineItemConfirm}
          totalAnnualBudget={totalAnnualBudget}
          totalSupplementalBudget={totalSupplementalBudget}
          totalCommitted={totalCommitted}
        />

      {/* Fund Augmentation Modal */}
      <FundAugmentationModal
        isOpen={isFundAugmentationModalOpen}
        onClose={() => {
          setIsFundAugmentationModalOpen(false);
          setSelectedLineItem(null);
        }}
        lineItemName={selectedLineItem?.title || ""}
        onConfirm={handleFundAugmentationConfirm}
        totalAnnualBudget={totalAnnualBudget}
        totalSupplementalBudget={totalSupplementalBudget}
        totalCommitted={totalCommitted}
      />


      {/* New Needs Assessment Modal */}
      <NewNeedsAssessmentModal
        isOpen={isNewNeedsAssessmentModalOpen}
        onClose={() => setIsNewNeedsAssessmentModalOpen(false)}
        onConfirm={handleNewNeedsAssessmentConfirm}
      />

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8">
        <div className="flex gap-8">
          {["Line Items", "Needs Assessment", "SK Monitor"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === "Line Items" ? "lineitems" : tab === "Needs Assessment" ? "needsassessment" : "skmonitor")}
              className={`py-4 relative ${
                (activeTab === "lineitems" && tab === "Line Items") ||
                (activeTab === "needsassessment" && tab === "Needs Assessment") ||
                (activeTab === "skmonitor" && tab === "SK Monitor")
                  ? "text-[#174499] dark:text-blue-400"
                  : "text-[#606060] dark:text-gray-400"
              }`}
            >
              <span>{tab}</span>
              {((activeTab === "lineitems" && tab === "Line Items") ||
                (activeTab === "needsassessment" && tab === "Needs Assessment") ||
                (activeTab === "skmonitor" && tab === "SK Monitor")) && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#174499] dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg">
          {/* Summary Cards */}
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-7 mb-8">
              {/* Total Annual Budget */}
              <div
                className="p-6 rounded-lg border shadow-lg"
                style={{
                  backgroundImage: "linear-gradient(169.67deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)",
                  borderColor: "#bedbff"
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#155dfc]">Total Annual Budget For 2026</p>
                  <button 
                    onClick={() => {
                      setBudgetType("annual");
                      setIsAddFundsModalOpen(true);
                    }}
                    className="w-6 h-6 flex items-center justify-center rounded text-[#155dfc] hover:bg-blue-100"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3.33333 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M8 3.33333V12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </button>
                </div>
                <p className="text-[30px] text-[#101828] mb-2">{formatCurrency(totalAnnualBudget)}</p>
                <p className="text-xs text-[#155dfc]">Base allocation for this year</p>
              </div>

              {/* Total Supplemental Budget */}
              <div
                className="p-6 rounded-lg border shadow-lg"
                style={{
                  backgroundImage: "linear-gradient(169.67deg, rgb(250, 245, 255) 0%, rgb(243, 232, 255) 100%)",
                  borderColor: "#e9d4ff"
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#9810fa]">Total Supplemental Budget</p>
                  <button 
                    onClick={() => {
                      setBudgetType("supplemental");
                      setIsAddFundsModalOpen(true);
                    }}
                    className="w-6 h-6 flex items-center justify-center rounded text-[#9810fa] hover:bg-purple-100"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3.33333 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M8 3.33333V12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </button>
                </div>
                <p className="text-[30px] text-[#101828] mb-2">{formatCurrency(totalSupplementalBudget)}</p>
                <p className="text-xs text-[#9810fa]">Certified available funds for release</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-7">
              {/* Total Committed */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                <p className="text-[#155dfc] dark:text-blue-400 mb-3">Total Priority</p>
                <p className="text-[30px] text-[#101828] dark:text-white mb-2">{formatCurrency(totalCommitted)}</p>
                <p className="text-xs text-[#155dfc] dark:text-blue-400">Promised amounts per Line Items</p>
              </div>

              {/* Total Spent */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                <p className="text-[#155dfc] dark:text-blue-400 mb-3">Total Spent</p>
                <p className="text-[30px] text-[#101828] dark:text-white mb-2">{formatCurrency(totalSpent)}</p>
                <p className="text-xs text-[#155dfc] dark:text-blue-400">Total amount spent across all categories PS, MOOE, and CO</p>
              </div>

              {/* Total Remaining */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                <p className="text-[#F53B57] dark:text-red-400 mb-3">Total Remaining</p>
                <p className="text-[30px] text-[#101828] dark:text-white mb-2">{formatCurrency(totalRemaining)}</p>
                <p className="text-xs text-[#F53B57] dark:text-red-400">Remaining funds</p>
              </div>
            </div>
          </div>

          {activeTab === "lineitems" && (
            <>
              {/* Line Items Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-black dark:text-white">Line Items</h2>
                <div className="flex items-center gap-3">
                  {/* Search Input */}
                  <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search line items..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 placeholder-gray-400"
                    />
                  </div>

                  {/* New Line Item Button */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#3b5998] hover:bg-[#2d4373] text-white rounded-lg transition-colors" onClick={() => setIsNewLineItemModalOpen(true)}>
                    <Plus className="w-4 h-4" />
                    New Line Item
                  </button>
                </div>
              </div>

              {/* Line Items Table */}
              <div>
                <table className="w-full min-w-max">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-6 text-center text-[#364153] dark:text-gray-200">Line Item ID</th>
                      <th className="px-6 py-6 text-center text-[#364153] dark:text-gray-200">Needs ID</th>
                      <th className="px-6 py-6 text-center text-[#364153] dark:text-gray-200">Line Items</th>
                      <th className="px-6 py-6 text-center text-[#364153] dark:text-gray-200">Category</th>
                      <th className="px-6 py-6 text-center text-[#364153] dark:text-gray-200">Budget</th>
                      <th className="px-6 py-6 text-center text-[#364153] dark:text-gray-200">Implementation Date</th>
                      <th className="px-6 py-6 text-center text-[#364153] dark:text-gray-200">Status</th>
                      <th className="px-6 py-6 text-center text-[#364153] dark:text-gray-200">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLineItems.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="px-6 py-6 text-center">
                          <p className="text-[#364153] dark:text-gray-200">{item.lineItemId}</p>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <p className="text-[#364153] dark:text-gray-200">{item.needsId}</p>
                        </td>
                        <td className="px-6 py-6">
                          <p className="text-[#364153] dark:text-gray-200 mb-1">{item.title}</p>
                          <p className="text-sm text-[#6a7282] dark:text-gray-400">{item.description}</p>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <p className="text-[#364153] dark:text-gray-200">{item.category}</p>
                        </td>
                        <td className="px-6 py-6">
                          <p className="text-[#364153] dark:text-gray-200 mb-1">
                            <span className="font-medium">Budget:</span> {formatCurrency(item.budget)}
                          </p>
                          <p className="text-sm text-[#6a7282] dark:text-gray-400">
                            <span className="font-medium">Remaining:</span> {formatCurrency(item.remaining)}
                          </p>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <p className="text-[#364153] dark:text-gray-200">{item.implementationDate}</p>
                        </td>
                        <td className="px-6 py-6 text-center">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                            <span className={`w-2 h-2 rounded-full mr-2 ${getStatusDotColor(item.status)}`}></span>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-6 text-right">
                          <div className="flex items-center justify-center gap-2">
                            <button 
                              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                              onClick={() => handleUpdateLineItem(item)}
                            >
                              <Edit className="w-4 h-4 text-[#364153] dark:text-gray-400" />
                            </button>
                            <button 
                              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors relative group"
                              onClick={() => {
                                setSelectedLineItem(item);
                                setIsFundAugmentationModalOpen(true);
                              }}
                              title="Fund Augmentation"
                            >
                              <img src={iconImage} alt="Fund Augmentation" className="w-4 h-4" />
                              <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap bottom-full left-1/2 -translate-x-1/2 mb-1">
                                Fund Augmentation
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredLineItems.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">No line items found matching your search.</p>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === "needsassessment" && (
            <>
              {/* Needs Assessment Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-black dark:text-white">Needs Assessments</h2>
                <div className="flex items-center gap-3">
                  {/* Search Input */}
                  <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search needs assessment..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#174499] dark:focus:border-blue-400 text-[#364153] dark:text-gray-200 placeholder-gray-400"
                    />
                  </div>

                  {/* New Assessment Button */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#3b5998] hover:bg-[#2d4373] text-white rounded-lg transition-colors" onClick={() => setIsNewNeedsAssessmentModalOpen(true)}>
                    <Plus className="w-4 h-4" />
                    New Assessment
                  </button>
                </div>
              </div>

              {/* Needs Assessment Table */}
              <div>
                <table className="w-full min-w-max">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">Needs ID</th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">Evidence</th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">Assessment Detail</th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">Year Identified</th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">Proposed Solution</th>
                      <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">Status</th>
                      <th className="px-6 py-4 text-right text-[#364153] dark:text-gray-200">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredNeedsAssessments.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="px-6 py-6">
                          <p className="text-[#101828] dark:text-gray-200">{item.needsId}</p>
                        </td>
                        <td className="px-6 py-6">
                          <p className="text-[#4a5565] dark:text-gray-400">{item.evidence}</p>
                        </td>
                        <td className="px-6 py-6">
                          <p className="text-[#101828] dark:text-gray-200 mb-1">{item.description}</p>
                          <p className="text-xs text-[#6a7282] dark:text-gray-400">Area of Advocacy: {item.areaOfParticipation}</p>
                        </td>
                        <td className="px-6 py-6">
                          <p className="text-[#4a5565] dark:text-gray-400">{item.yearIdentified}</p>
                        </td>
                        <td className="px-6 py-6">
                          <p className="text-[#101828] dark:text-gray-200">{item.proposedSolution}</p>
                        </td>
                        <td className="px-6 py-6">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                            {item.status === "In Progress" && (
                              <>
                                <span className="w-2 h-2 rounded-full bg-[#fe9a00] mr-2"></span>
                                {item.status}
                              </>
                            )}
                            {item.status === "Completed" && (
                              <>
                                <span className="w-2 h-2 rounded-full bg-[#00C950] mr-2"></span>
                                {item.status}
                              </>
                            )}
                            {item.status === "Pending" && (
                              <>
                                <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                            {item.status}
                          </>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors">
                        <Edit className="w-4 h-4 text-[#3b5998] dark:text-gray-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredNeedsAssessments.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No needs assessments found matching your search.</p>
              </div>
            )}
          </div>
        </>
      )}

      {activeTab === "skmonitor" && (
        <SKMonitorContent darkMode={darkMode} />
      )}

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
    </div>
  </div>
</div>
);
}