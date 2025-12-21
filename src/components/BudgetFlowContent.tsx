interface BudgetFlowContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
}

export function BudgetFlowContent({ darkMode, viewMode }: BudgetFlowContentProps) {
  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-gray-900 dark:text-white">Budget Flow</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {viewMode === "federation" ? "Federation" : "Barangay"} Budget Flow Analytics
            </p>
          </div>

          {/* Content area - empty for now */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 min-h-[400px] flex items-center justify-center">
            <p className="text-gray-400 dark:text-gray-500">Budget Flow content coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}