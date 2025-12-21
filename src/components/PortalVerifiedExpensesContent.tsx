import { useState } from "react";
import { ChevronLeft, Search } from "lucide-react";

interface PortalVerifiedExpensesContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
  onBack: () => void;
}

interface VerifiedExpense {
  lineItem: string;
  id: string;
  area: string;
  budget: string;
  fromDate: string;
  toDate: string;
  status: "Published" | "Draft";
  enabled: boolean;
}

export function PortalVerifiedExpensesContent({ 
  darkMode, 
  viewMode, 
  onBack 
}: PortalVerifiedExpensesContentProps) {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const years = ["2025", "2024", "2023", "2022"];

  // Sample verified expenses data
  const verifiedExpenses: VerifiedExpense[] = [
    {
      lineItem: "HIV/AIDS Awareness Seminar",
      id: "LI-20250910-2ECO",
      area: "Health",
      budget: "₱55,555.56",
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      status: "Published",
      enabled: true
    },
    {
      lineItem: "Anti-Illegal Drugs Seminar",
      id: "LI-20250911-41DE",
      area: "Public Safety",
      budget: "₱55,555.56",
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      status: "Published",
      enabled: true
    },
    {
      lineItem: "Leadership Training Camp",
      id: "LI-20250912-7HMP",
      area: "Education",
      budget: "₱55,555.56",
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      status: "Published",
      enabled: true
    },
    {
      lineItem: "Environmental Cleanup Drive",
      id: "LI-20250913-14UL",
      area: "Environmental",
      budget: "₱55,555.56",
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      status: "Published",
      enabled: true
    },
    {
      lineItem: "Youth Sports Festival",
      id: "LI-20250914-52SD",
      area: "Social Services",
      budget: "₱55,555.56",
      fromDate: "September 1, 2025",
      toDate: "September 1, 2025",
      status: "Published",
      enabled: true
    }
  ];

  const filteredExpenses = verifiedExpenses.filter(expense =>
    expense.lineItem.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Back Button */}
      <div className="bg-white dark:bg-gray-800 px-8 pt-6 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#4a5565] dark:text-gray-400 hover:text-[#174499] dark:hover:text-blue-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back to Portal Management</span>
        </button>
      </div>

      {/* Year Tabs */}
      <div className="bg-white dark:bg-gray-800 px-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`py-4 px-1 relative ${
                selectedYear === year
                  ? "text-[#155dfc] dark:text-blue-400"
                  : "text-[#4a5565] dark:text-gray-400"
              }`}
            >
              <span>{year}</span>
              {selectedYear === year && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#155dfc] dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white dark:bg-gray-800">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-black dark:text-white">Verified Expenses</h2>
            
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
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
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
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((expense, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="px-6 py-6">
                      <p className="text-[#101828] dark:text-gray-200">{expense.lineItem}</p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">ID:</span> {expense.id}
                        </p>
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">Area of Participation:</span> {expense.area}
                        </p>
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">Budget:</span> {expense.budget}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-[#101828] dark:text-gray-200">{expense.budget}</p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">From:</span> {expense.fromDate}
                        </p>
                        <p className="text-sm text-[#4a5565] dark:text-gray-400">
                          <span className="font-semibold">To:</span> {expense.toDate}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        ● {expense.status}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={expense.enabled}
                          className="sr-only peer"
                          readOnly
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredExpenses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No expenses found matching your search.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="px-4 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button className="px-4 py-2 bg-[#3b5998] text-white rounded">
              {currentPage}
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
