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
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className={`text-lg ${isPositive ? "text-[#00a63e]" : "text-[#e7000b]"}`}>
          {change}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[#4a5565] dark:text-gray-300 text-lg mb-2">
        {title}
      </h3>

      {/* Value */}
      <p className="text-[#606060] dark:text-gray-400 text-2xl">
        {value}
      </p>
    </div>
  );
}