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
  const [selectedYear, setSelectedYear] = useState("2026");
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
    "2026": {
      "All": {
        annualBudget: 1200000,
        supplementalBudget: 150000,
        committed: 850000,
        spent: 420000,
        remaining: 500000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 52500, color: "#EE82EE" },
          { name: "Quality Education", value: 84000, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 37800, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 21000, color: "#F39C12" },
          { name: "Active Citizenship", value: 42000, color: "#BB8FCE" },
          { name: "Good Governance", value: 31500, color: "#E74C3C" },
          { name: "Arts and Culture", value: 25200, color: "#3498DB" },
          { name: "Peace Building and Security", value: 21000, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 42000, color: "#16A085" },
          { name: "General Administrative Expense", value: 63000, color: "#F1C40F" }
        ]
      },
      "Barangay 1": {
        annualBudget: 400000,
        supplementalBudget: 50000,
        committed: 280000,
        spent: 135000,
        remaining: 170000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 16875, color: "#EE82EE" },
          { name: "Quality Education", value: 27000, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 12150, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 6750, color: "#F39C12" },
          { name: "Active Citizenship", value: 13500, color: "#BB8FCE" },
          { name: "Good Governance", value: 10125, color: "#E74C3C" },
          { name: "Arts and Culture", value: 8100, color: "#3498DB" },
          { name: "Peace Building and Security", value: 6750, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 13500, color: "#16A085" },
          { name: "General Administrative Expense", value: 20250, color: "#F1C40F" }
        ]
      },
      "Barangay 2": {
        annualBudget: 450000,
        supplementalBudget: 60000,
        committed: 320000,
        spent: 158000,
        remaining: 190000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 19740, color: "#EE82EE" },
          { name: "Quality Education", value: 31600, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 14220, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 7900, color: "#F39C12" },
          { name: "Active Citizenship", value: 15800, color: "#BB8FCE" },
          { name: "Good Governance", value: 11850, color: "#E74C3C" },
          { name: "Arts and Culture", value: 9480, color: "#3498DB" },
          { name: "Peace Building and Security", value: 7900, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 15800, color: "#16A085" },
          { name: "General Administrative Expense", value: 23710, color: "#F1C40F" }
        ]
      },
      "Barangay 3": {
        annualBudget: 350000,
        supplementalBudget: 40000,
        committed: 250000,
        spent: 127000,
        remaining: 140000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 15875, color: "#EE82EE" },
          { name: "Quality Education", value: 25400, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 11430, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 6350, color: "#F39C12" },
          { name: "Active Citizenship", value: 12700, color: "#BB8FCE" },
          { name: "Good Governance", value: 9525, color: "#E74C3C" },
          { name: "Arts and Culture", value: 7620, color: "#3498DB" },
          { name: "Peace Building and Security", value: 6350, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 12700, color: "#16A085" },
          { name: "General Administrative Expense", value: 19050, color: "#F1C40F" }
        ]
      }
    },
    "2025": {
      "All": {
        annualBudget: 1000000,
        supplementalBudget: 120000,
        committed: 720000,
        spent: 350000,
        remaining: 400000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 43750, color: "#EE82EE" },
          { name: "Quality Education", value: 70000, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 31500, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 17500, color: "#F39C12" },
          { name: "Active Citizenship", value: 35000, color: "#BB8FCE" },
          { name: "Good Governance", value: 26250, color: "#E74C3C" },
          { name: "Arts and Culture", value: 21000, color: "#3498DB" },
          { name: "Peace Building and Security", value: 17500, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 35000, color: "#16A085" },
          { name: "General Administrative Expense", value: 52500, color: "#F1C40F" }
        ]
      },
      "Barangay 1": {
        annualBudget: 350000,
        supplementalBudget: 40000,
        committed: 250000,
        spent: 120000,
        remaining: 140000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 15000, color: "#EE82EE" },
          { name: "Quality Education", value: 24000, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 10800, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 6000, color: "#F39C12" },
          { name: "Active Citizenship", value: 12000, color: "#BB8FCE" },
          { name: "Good Governance", value: 9000, color: "#E74C3C" },
          { name: "Arts and Culture", value: 7200, color: "#3498DB" },
          { name: "Peace Building and Security", value: 6000, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 12000, color: "#16A085" },
          { name: "General Administrative Expense", value: 18000, color: "#F1C40F" }
        ]
      },
      "Barangay 2": {
        annualBudget: 380000,
        supplementalBudget: 48000,
        committed: 280000,
        spent: 138000,
        remaining: 148000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 17250, color: "#EE82EE" },
          { name: "Quality Education", value: 27600, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 12420, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 6900, color: "#F39C12" },
          { name: "Active Citizenship", value: 13800, color: "#BB8FCE" },
          { name: "Good Governance", value: 10350, color: "#E74C3C" },
          { name: "Arts and Culture", value: 8280, color: "#3498DB" },
          { name: "Peace Building and Security", value: 6900, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 13800, color: "#16A085" },
          { name: "General Administrative Expense", value: 20700, color: "#F1C40F" }
        ]
      },
      "Barangay 3": {
        annualBudget: 270000,
        supplementalBudget: 32000,
        committed: 190000,
        spent: 92000,
        remaining: 112000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 11500, color: "#EE82EE" },
          { name: "Quality Education", value: 18400, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 8280, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 4600, color: "#F39C12" },
          { name: "Active Citizenship", value: 9200, color: "#BB8FCE" },
          { name: "Good Governance", value: 6900, color: "#E74C3C" },
          { name: "Arts and Culture", value: 5520, color: "#3498DB" },
          { name: "Peace Building and Security", value: 4600, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 9200, color: "#16A085" },
          { name: "General Administrative Expense", value: 13800, color: "#F1C40F" }
        ]
      }
    },
    "2024": {
      "All": {
        annualBudget: 750000,
        supplementalBudget: 100000,
        committed: 600000,
        spent: 480000,
        remaining: 250000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 60000, color: "#EE82EE" },
          { name: "Quality Education", value: 96000, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 43200, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 24000, color: "#F39C12" },
          { name: "Active Citizenship", value: 48000, color: "#BB8FCE" },
          { name: "Good Governance", value: 36000, color: "#E74C3C" },
          { name: "Arts and Culture", value: 28800, color: "#3498DB" },
          { name: "Peace Building and Security", value: 24000, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 48000, color: "#16A085" },
          { name: "General Administrative Expense", value: 72000, color: "#F1C40F" }
        ]
      },
      "Barangay 1": {
        annualBudget: 250000,
        supplementalBudget: 35000,
        committed: 200000,
        spent: 165000,
        remaining: 85000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 20625, color: "#EE82EE" },
          { name: "Quality Education", value: 33000, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 14850, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 8250, color: "#F39C12" },
          { name: "Active Citizenship", value: 16500, color: "#BB8FCE" },
          { name: "Good Governance", value: 12375, color: "#E74C3C" },
          { name: "Arts and Culture", value: 9900, color: "#3498DB" },
          { name: "Peace Building and Security", value: 8250, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 16500, color: "#16A085" },
          { name: "General Administrative Expense", value: 24750, color: "#F1C40F" }
        ]
      },
      "Barangay 2": {
        annualBudget: 280000,
        supplementalBudget: 38000,
        committed: 225000,
        spent: 185000,
        remaining: 93000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 23125, color: "#EE82EE" },
          { name: "Quality Education", value: 37000, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 16650, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 9250, color: "#F39C12" },
          { name: "Active Citizenship", value: 18500, color: "#BB8FCE" },
          { name: "Good Governance", value: 13875, color: "#E74C3C" },
          { name: "Arts and Culture", value: 11100, color: "#3498DB" },
          { name: "Peace Building and Security", value: 9250, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 18500, color: "#16A085" },
          { name: "General Administrative Expense", value: 27750, color: "#F1C40F" }
        ]
      },
      "Barangay 3": {
        annualBudget: 220000,
        supplementalBudget: 27000,
        committed: 175000,
        spent: 130000,
        remaining: 72000,
        pieData: [
          { name: "Adolescent and Youth Health", value: 16250, color: "#EE82EE" },
          { name: "Quality Education", value: 26000, color: "#5DADE2" },
          { name: "Agriculture and Environment", value: 11700, color: "#2ECC71" },
          { name: "Diversity, Equity, and Inclusion", value: 6500, color: "#F39C12" },
          { name: "Active Citizenship", value: 13000, color: "#BB8FCE" },
          { name: "Good Governance", value: 9750, color: "#E74C3C" },
          { name: "Arts and Culture", value: 7800, color: "#3498DB" },
          { name: "Peace Building and Security", value: 6500, color: "#95A5A6" },
          { name: "Economic Empowerment", value: 13000, color: "#16A085" },
          { name: "General Administrative Expense", value: 19500, color: "#F1C40F" }
        ]
      }
    }
  };

  const currentData = budgetDataByYearAndBarangay[selectedYear]?.[selectedBarangay] || budgetDataByYearAndBarangay["2026"]["All"];

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
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
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
                    label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
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