import { StatCard } from "./StatCard";
import { RecentActivity } from "./RecentActivity";
import { TrendingUp, DollarSign, FileText, TrendingDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import { projectsAPI, budgetAPI, archivesAPI, expensesAPI } from "../utils/database";
import { seedDatabase } from "../utils/seedData";
import { DatabaseInit } from "./DatabaseInit";

interface DashboardContentProps {
  darkMode: boolean;
  viewMode: "federation" | "barangay";
}

const federationStats = [
  {
    title: "Active Projects",
    value: "24",
    change: "+12%",
    isPositive: true,
    icon: <TrendingUp className="w-6 h-6 text-[#155DFC]" />
  },
  {
    title: "Budget Utilization",
    value: "68%",
    change: "-3%",
    isPositive: false,
    icon: <DollarSign className="w-6 h-6 text-[#155DFC]" />
  },
  {
    title: "Budget Utilization",
    value: "68%",
    change: "-3%",
    isPositive: false,
    icon: <DollarSign className="w-6 h-6 text-[#155DFC]" />
  },
  {
    title: "Documents",
    value: "1,247",
    change: "+24%",
    isPositive: true,
    icon: <FileText className="w-6 h-6 text-[#155DFC]" />
  }
];

const barangayStats = [
  {
    title: "Active Projects",
    value: "8",
    change: "+5%",
    isPositive: true,
    icon: <TrendingUp className="w-6 h-6 text-[#155DFC]" />
  },
  {
    title: "Budget Utilization",
    value: "52%",
    change: "+8%",
    isPositive: true,
    icon: <DollarSign className="w-6 h-6 text-[#155DFC]" />
  },
  {
    title: "Budget Utilization",
    value: "52%",
    change: "+8%",
    isPositive: true,
    icon: <DollarSign className="w-6 h-6 text-[#155DFC]" />
  },
  {
    title: "Documents",
    value: "342",
    change: "+18%",
    isPositive: true,
    icon: <FileText className="w-6 h-6 text-[#155DFC]" />
  }
];

const federationActivities = [
  {
    title: "New project created",
    description: "Website Redesign",
    time: "2 hours ago"
  },
  {
    title: "Budget approved",
    description: "Marketing Campaign Q4",
    time: "5 hours ago"
  },
  {
    title: "Document generated",
    description: "Contract Agreement",
    time: "1 day ago"
  },
  {
    title: "Team member added",
    description: "Development Team",
    time: "2 days ago"
  }
];

const barangayActivities = [
  {
    title: "Project initiated",
    description: "Community Center Renovation",
    time: "1 hour ago"
  },
  {
    title: "Budget updated",
    description: "Youth Development Program",
    time: "3 hours ago"
  },
  {
    title: "Document uploaded",
    description: "Barangay Resolution 2024-12",
    time: "6 hours ago"
  },
  {
    title: "Personnel assigned",
    description: "SK Council Meeting",
    time: "1 day ago"
  }
];

const budgetExpendituresData = [
  { name: "Good Governance", value: 8.0, color: "#EF4444" },
  { name: "Adolescent and Youth Health", value: 11.2, color: "#F97316" },
  { name: "Quality Education", value: 14.8, color: "#EAB308" },
  { name: "Active Citizenship", value: 6.9, color: "#22C55E" },
  { name: "Economic Empowerment", value: 9.7, color: "#10B981" },
  { name: "Arts and Culture", value: 6.2, color: "#06B6D4" },
  { name: "Agriculture and Environment", value: 7.7, color: "#3B82F6" },
  { name: "Sports Development", value: 10.4, color: "#6366F1" },
  { name: "Peace Building and Security", value: 5.3, color: "#8B5CF6" },
  { name: "Diversity, Equity, and Inclusion", value: 5.0, color: "#EC4899" },
  { name: "Spiritual Formation", value: 4.1, color: "#DC2626" },
  { name: "General Administrative Expense", value: 10.7, color: "#EA580C" }
];

export function DashboardContent({ darkMode, viewMode }: DashboardContentProps) {
  const stats = viewMode === "federation" ? federationStats : barangayStats;
  const activities = viewMode === "federation" ? federationActivities : barangayActivities;

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      <div className="p-8 space-y-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} darkMode={darkMode} />
          ))}
        </div>

        {/* Bottom Section: Recent Activity and Budget Expenditures */}
        <div className="flex gap-2.5">
          {/* Recent Activity - Left Side */}
          <div className="flex-1">
            <RecentActivity activities={activities} darkMode={darkMode} />
          </div>

          {/* Budget Expenditures Overview - Right Side */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 h-[492px] flex flex-col">
            {/* Header */}
            <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-6 shrink-0">
              <h2 className="text-[#101828] dark:text-white text-xl">Budget Expenditures Overview</h2>
            </div>

            {/* Pie Chart Content */}
            <div className="p-6 flex-1 flex items-center">
              <div className="flex items-center gap-8 w-full">
                {/* Pie Chart */}
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={budgetExpendituresData}
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={120}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {budgetExpendituresData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="white" strokeWidth={2} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-3 flex-1">
                  {budgetExpendituresData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <div
                        className="w-3 h-3 rounded-sm shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-[#333] dark:text-gray-300">
                        {item.name}: {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}