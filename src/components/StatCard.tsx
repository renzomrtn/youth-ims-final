interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  darkMode: boolean;
}

export function StatCard({ title, value, change, isPositive, icon, darkMode }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300 group">
      {/* Header with Icon and Change */}
      <div className="flex items-center justify-between mb-4">
        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className={`text-lg font-semibold ${isPositive ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"}`}>
          {change}
        </span>
      </div>

      {/* Title */}
      <div className="text-gray-700 dark:text-gray-200 text-lg mb-2 font-medium">
        {title}
      </div>

      {/* Value */}
      <p className="text-gray-900 dark:text-white text-2xl font-semibold">
        {value}
      </p>
    </div>
  );
}