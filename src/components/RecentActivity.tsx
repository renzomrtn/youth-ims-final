interface Activity {
  title: string;
  description: string;
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
  darkMode: boolean;
}

export function RecentActivity({ activities, darkMode }: RecentActivityProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden h-[492px] flex flex-col">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700 shrink-0">
        <h2 className="text-xl text-[#101828] dark:text-white">Recent Activity</h2>
      </div>

      {/* Activity List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700 flex-1 overflow-y-auto">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className="px-6 py-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-[#101828] dark:text-white group-hover:text-[#174499] dark:group-hover:text-blue-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-sm text-[#4a5565] dark:text-gray-400">
                  {activity.description}
                </p>
              </div>
              <span className="text-sm text-[#6a7282] dark:text-gray-500 whitespace-nowrap ml-4">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}