import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface SKMonitorContentProps {
  darkMode: boolean;
}

interface BudgetData {
  annualBudget: number;
  supplementalBudget: number;
  committed: number;
  spent: number;
  remaining: number;
  pieData: Array<{ name: string; value: number; color: string }>;
}

export function SKMonitorContent({ darkMode }: SKMonitorContentProps) {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedBarangay, setSelectedBarangay] = useState("All");
  const [barangaySearchOpen, setBarangaySearchOpen] = useState(false);
  const [barangaySearchQuery, setBarangaySearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBarangaySearchOpen(false);
        setBarangaySearchQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sample data that varies by year and barangay
  const budgetDataByYearAndBarangay: Record<string, Record<string, BudgetData>> = {
    "2025": {
      "All": {
        annualBudget: 0,
        supplementalBudget: 0,
        committed: 0,
        spent: 0,
        remaining: 0,
        pieData: [
          { name: "Health", value: 11.2, color: "#EE82EE" },
          { name: "Education", value: 17.2, color: "#5DADE2" },
          { name: "Environment", value: 7.7, color: "#2ECC71" },
          { name: "Global Mobility", value: 4.1, color: "#F39C12" },
          { name: "Active Citizenship", value: 8.9, color: "#BB8FCE" },
          { name: "Governance", value: 6.5, color: "#E74C3C" },
          { name: "Social Equity & Inclusion", value: 5.7, color: "#3498DB" },
          { name: "Peacebuilding & Security", value: 5.0, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 10.1, color: "#16A085" },
          { name: "General Administrative Expense", value: 23.7, color: "#F1C40F" }
        ]
      },
      "Barangay 1": {
        annualBudget: 150000,
        supplementalBudget: 25000,
        committed: 80000,
        spent: 45000,
        remaining: 50000,
        pieData: [
          { name: "Health", value: 11.2, color: "#EE82EE" },
          { name: "Education", value: 17.2, color: "#5DADE2" },
          { name: "Environment", value: 7.7, color: "#2ECC71" },
          { name: "Global Mobility", value: 4.1, color: "#F39C12" },
          { name: "Active Citizenship", value: 8.9, color: "#BB8FCE" },
          { name: "Governance", value: 6.5, color: "#E74C3C" },
          { name: "Social Equity & Inclusion", value: 5.7, color: "#3498DB" },
          { name: "Peacebuilding & Security", value: 5.0, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 10.1, color: "#16A085" },
          { name: "General Administrative Expense", value: 23.7, color: "#F1C40F" }
        ]
      },
      "Barangay 2": {
        annualBudget: 200000,
        supplementalBudget: 30000,
        committed: 120000,
        spent: 75000,
        remaining: 35000,
        pieData: [
          { name: "Health", value: 11.2, color: "#EE82EE" },
          { name: "Education", value: 17.2, color: "#5DADE2" },
          { name: "Environment", value: 7.7, color: "#2ECC71" },
          { name: "Global Mobility", value: 4.1, color: "#F39C12" },
          { name: "Active Citizenship", value: 8.9, color: "#BB8FCE" },
          { name: "Governance", value: 6.5, color: "#E74C3C" },
          { name: "Social Equity & Inclusion", value: 5.7, color: "#3498DB" },
          { name: "Peacebuilding & Security", value: 5.0, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 10.1, color: "#16A085" },
          { name: "General Administrative Expense", value: 23.7, color: "#F1C40F" }
        ]
      }
    },
    "2024": {
      "All": {
        annualBudget: 750000,
        supplementalBudget: 50000,
        committed: 600000,
        spent: 580000,
        remaining: 220000,
        pieData: [
          { name: "Health", value: 11.2, color: "#EE82EE" },
          { name: "Education", value: 17.2, color: "#5DADE2" },
          { name: "Environment", value: 7.7, color: "#2ECC71" },
          { name: "Global Mobility", value: 4.1, color: "#F39C12" },
          { name: "Active Citizenship", value: 8.9, color: "#BB8FCE" },
          { name: "Governance", value: 6.5, color: "#E74C3C" },
          { name: "Social Equity & Inclusion", value: 5.7, color: "#3498DB" },
          { name: "Peacebuilding & Security", value: 5.0, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 10.1, color: "#16A085" },
          { name: "General Administrative Expense", value: 23.7, color: "#F1C40F" }
        ]
      },
      "Barangay 1": {
        annualBudget: 120000,
        supplementalBudget: 20000,
        committed: 90000,
        spent: 85000,
        remaining: 55000,
        pieData: [
          { name: "Health", value: 11.2, color: "#EE82EE" },
          { name: "Education", value: 17.2, color: "#5DADE2" },
          { name: "Environment", value: 7.7, color: "#2ECC71" },
          { name: "Global Mobility", value: 4.1, color: "#F39C12" },
          { name: "Active Citizenship", value: 8.9, color: "#BB8FCE" },
          { name: "Governance", value: 6.5, color: "#E74C3C" },
          { name: "Social Equity & Inclusion", value: 5.7, color: "#3498DB" },
          { name: "Peacebuilding & Security", value: 5.0, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 10.1, color: "#16A085" },
          { name: "General Administrative Expense", value: 23.7, color: "#F1C40F" }
        ]
      },
      "Barangay 2": {
        annualBudget: 180000,
        supplementalBudget: 25000,
        committed: 140000,
        spent: 130000,
        remaining: 75000,
        pieData: [
          { name: "Health", value: 11.2, color: "#EE82EE" },
          { name: "Education", value: 17.2, color: "#5DADE2" },
          { name: "Environment", value: 7.7, color: "#2ECC71" },
          { name: "Global Mobility", value: 4.1, color: "#F39C12" },
          { name: "Active Citizenship", value: 8.9, color: "#BB8FCE" },
          { name: "Governance", value: 6.5, color: "#E74C3C" },
          { name: "Social Equity & Inclusion", value: 5.7, color: "#3498DB" },
          { name: "Peacebuilding & Security", value: 5.0, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 10.1, color: "#16A085" },
          { name: "General Administrative Expense", value: 23.7, color: "#F1C40F" }
        ]
      }
    }
  };

  const currentData = budgetDataByYearAndBarangay[selectedYear]?.[selectedBarangay] || budgetDataByYearAndBarangay["2025"]["All"];

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const barangayOptions = ["All", "Barangay 1", "Barangay 2", "Barangay 3"];
  const filteredBarangays = barangayOptions.filter(barangay =>
    barangay.toLowerCase().includes(barangaySearchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <h2 className="text-black dark:text-white mb-8">SK Budget Monitor</h2>

      <div className="grid grid-cols-[1fr_auto] gap-8">
        {/* Left Side - Pie Chart */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600">
          <div className="flex items-start justify-between mb-8">
            <h3 className="text-xl text-black dark:text-white">
              Expenditure per<br />Areas of Participation
            </h3>
            
            <div className="flex flex-col gap-3">
              {/* Year Dropdown */}
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 pr-10 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:border-[#174499] cursor-pointer min-w-[150px]"
                >
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Barangay Search Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setBarangaySearchOpen(!barangaySearchOpen)}
                  className="w-full appearance-none bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 pr-10 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:border-[#174499] cursor-pointer min-w-[150px] text-left"
                >
                  {selectedBarangay === "All" ? "All Barangays" : selectedBarangay}
                </button>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                
                {barangaySearchOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg shadow-lg z-10">
                    {/* Search Input */}
                    <div className="p-2 border-b border-gray-200 dark:border-gray-500">
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search barangay..."
                          value={barangaySearchQuery}
                          onChange={(e) => setBarangaySearchQuery(e.target.value)}
                          className="w-full pl-8 pr-2 py-1.5 text-sm bg-transparent border border-gray-300 dark:border-gray-500 rounded focus:outline-none focus:border-[#174499] text-gray-700 dark:text-gray-200"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>
                    
                    {/* Options */}
                    <div className="max-h-48 overflow-y-auto">
                      {filteredBarangays.length > 0 ? (
                        filteredBarangays.map((barangay) => (
                          <button
                            key={barangay}
                            onClick={() => {
                              setSelectedBarangay(barangay);
                              setBarangaySearchOpen(false);
                              setBarangaySearchQuery("");
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                              selectedBarangay === barangay
                                ? "bg-blue-50 dark:bg-gray-700 text-[#174499] dark:text-blue-400"
                                : "text-gray-700 dark:text-gray-200"
                            }`}
                          >
                            {barangay === "All" ? "All Barangays" : barangay}
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          No barangays found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="flex items-center gap-12">
            {/* Legend - Now on left */}
            <div className="flex flex-col gap-4">
              {currentData.pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="w-6 h-4 rounded"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Pie Chart - Now on right */}
            <div className="flex-1 flex items-center justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={currentData.pieData}
                    cx="40%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={160}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {currentData.pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Side - Budget Cards */}
        <div className="flex flex-col gap-4 w-[340px]">
          {/* Total Annual Budget */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-5 border border-gray-200 dark:border-gray-600">
            <p className="text-[#155dfc] dark:text-blue-400 text-sm mb-2">
              Total Annual Budget For {selectedYear}
            </p>
            <p className="text-2xl text-[#101828] dark:text-white">
              {formatCurrency(currentData.annualBudget)}
            </p>
          </div>

          {/* Total Supplemental Budget */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-5 border border-gray-200 dark:border-gray-600">
            <p className="text-[#155dfc] dark:text-blue-400 text-sm mb-2">
              Total Supplemental Budget
            </p>
            <p className="text-2xl text-[#101828] dark:text-white">
              {formatCurrency(currentData.supplementalBudget)}
            </p>
          </div>

          {/* Total Committed */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-5 border border-gray-200 dark:border-gray-600">
            <p className="text-[#155dfc] dark:text-blue-400 text-sm mb-2">
              Total Committed
            </p>
            <p className="text-2xl text-[#101828] dark:text-white">
              {formatCurrency(currentData.committed)}
            </p>
          </div>

          {/* Total Spent */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-5 border border-gray-200 dark:border-gray-600">
            <p className="text-[#155dfc] dark:text-blue-400 text-sm mb-2">
              Total Spent
            </p>
            <p className="text-2xl text-[#101828] dark:text-white">
              {formatCurrency(currentData.spent)}
            </p>
          </div>

          {/* Total Remaining */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-5 border border-gray-200 dark:border-gray-600">
            <p className="text-[#155dfc] dark:text-blue-400 text-sm mb-2">
              Total Remaining
            </p>
            <p className="text-2xl text-[#101828] dark:text-white">
              {formatCurrency(currentData.remaining)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}