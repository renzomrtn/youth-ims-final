import { useState } from "react";
import { Search, Mail, Phone } from "lucide-react";

interface PersonnelContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
}

interface Personnel {
  id: number;
  name: string;
  initials: string;
  position: string;
  barangay: string;
  email: string;
  phone: string;
  avatarColor: string;
}

export function PersonnelContent({ darkMode, viewMode }: PersonnelContentProps) {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const years = ["2025", "2024", "2023", "2022"];

  // Sample personnel data
  const allPersonnel: Personnel[] = [
    {
      id: 1,
      name: "Maria Santos",
      initials: "MS",
      position: "SK Federation President",
      barangay: "ABELLA",
      email: "maria.santos@sk.gov.ph",
      phone: "+63 912 345 6789",
      avatarColor: "#4169e1"
    },
    {
      id: 2,
      name: "Juan Dela Cruz",
      initials: "JDC",
      position: "SK Federation Vice President",
      barangay: "DAVANGOANG",
      email: "juan.delacruz@sk.gov.ph",
      phone: "+63 923 456 7890",
      avatarColor: "#5a67d8"
    },
    {
      id: 3,
      name: "Anna Reyes",
      initials: "AR",
      position: "SK Federation Secretary",
      barangay: "PEÑAFRANCIA",
      email: "anna.reyes@sk.gov.ph",
      phone: "+63 934 567 8901",
      avatarColor: "#667eea"
    },
    {
      id: 4,
      name: "Pedro Gonzales",
      initials: "PG",
      position: "SK Federation Treasurer",
      barangay: "BAGUMBAYAN NORTE",
      email: "pedro.gonzales@sk.gov.ph",
      phone: "+63 945 678 9012",
      avatarColor: "#764ba2"
    },
    {
      id: 5,
      name: "Rosa Martinez",
      initials: "RM",
      position: "SK Federation Auditor",
      barangay: "DEL ROSARIO",
      email: "rosa.martinez@sk.gov.ph",
      phone: "+63 956 789 0123",
      avatarColor: "#667eea"
    },
    {
      id: 6,
      name: "Carlos Mendez",
      initials: "CM",
      position: "SK Chairperson",
      barangay: "CONCEPCION PEQUEÑA",
      email: "carlos.mendez@sk.gov.ph",
      phone: "+63 967 890 1234",
      avatarColor: "#4169e1"
    },
    {
      id: 7,
      name: "Jennifer Aquino",
      initials: "JA",
      position: "SK Kagawad",
      barangay: "CAROLINA",
      email: "jennifer.aquino@sk.gov.ph",
      phone: "+63 978 901 2345",
      avatarColor: "#5a67d8"
    },
    {
      id: 8,
      name: "Michael Demas",
      initials: "MD",
      position: "SK Kagawad",
      barangay: "SABANG",
      email: "michael.demas@sk.gov.ph",
      phone: "+63 989 012 3456",
      avatarColor: "#764ba2"
    },
    {
      id: 9,
      name: "Sarah Lopez",
      initials: "SL",
      position: "SK Kagawad",
      barangay: "TRIANGULO",
      email: "sarah.lopez@sk.gov.ph",
      phone: "+63 920 123 4567",
      avatarColor: "#667eea"
    },
    {
      id: 10,
      name: "Robert Tan",
      initials: "RT",
      position: "SK Kagawad",
      barangay: "MABOLO",
      email: "robert.tan@sk.gov.ph",
      phone: "+63 931 234 5678",
      avatarColor: "#4169e1"
    }
  ];

  const filteredPersonnel = allPersonnel.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.barangay.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredPersonnel.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPersonnel = filteredPersonnel.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
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
      <div className="flex-1 p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-black dark:text-white">Current Personnel</h2>
            
            {/* Search Bar */}
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search personnel..."
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
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 w-[300px]">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 w-[300px]">
                    Position
                  </th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200 w-[250px]">
                    Barangay
                  </th>
                  <th className="px-6 py-4 text-left text-[#364153] dark:text-gray-200">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPersonnel.map((person) => (
                  <tr
                    key={person.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
                          style={{ backgroundColor: person.avatarColor }}
                        >
                          <span className="text-sm">{person.initials}</span>
                        </div>
                        <p className="text-[#101828] dark:text-gray-200">{person.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-[#101828] dark:text-gray-200">{person.position}</p>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-[#101828] dark:text-gray-200">{person.barangay}</p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#606060] dark:text-gray-400" />
                          <p className="text-sm text-[#4a5565] dark:text-gray-400">{person.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#606060] dark:text-gray-400" />
                          <p className="text-sm text-[#4a5565] dark:text-gray-400">{person.phone}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {currentPersonnel.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No personnel found matching your search.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded transition-colors ${
                  currentPage === page
                    ? "bg-[#3b5998] text-white"
                    : "text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 text-[#3b5998] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}