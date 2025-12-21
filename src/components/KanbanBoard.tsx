import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import svgPaths from "../imports/svg-u8mtnpgcn3";
import { AddTaskModal } from "./AddTaskModal";

interface KanbanBoardProps {
  darkMode: boolean;
  projectTitle: string;
  committeeName: string;
  chairman: string;
  viceChairman: string;
  onBack: () => void;
}

interface Task {
  id: number;
  title: string;
  assignee: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export function KanbanBoard({
  darkMode,
  projectTitle,
  committeeName,
  chairman,
  viceChairman,
  onBack,
}: KanbanBoardProps) {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "todo",
      title: "To Do",
      tasks: [],
    },
    {
      id: "inprogress",
      title: "In Progress",
      tasks: [
        {
          id: 1,
          title: "Design promotional materials",
          assignee: "Alice Brown",
          dueDate: "Dec 16, 2024",
          priority: "High",
        },
        {
          id: 2,
          title: "Contact speakers",
          assignee: "Bob Wilson",
          dueDate: "Dec 16, 2024",
          priority: "Low",
        },
      ],
    },
    {
      id: "review",
      title: "Review",
      tasks: [
        {
          id: 3,
          title: "Review event timeline",
          assignee: "Charlie Davis",
          dueDate: "Dec 5, 2024",
          priority: "Medium",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          id: 4,
          title: "Finalize committee structure",
          assignee: "John Smith",
          dueDate: "Nov 28, 2024",
          priority: "High",
        },
        {
          id: 5,
          title: "Create attendance sheet",
          assignee: "Jane Doe",
          dueDate: "Nov 30, 2024",
          priority: "Low",
        },
        {
          id: 6,
          title: "Book conference room",
          assignee: "Alice Brown",
          dueDate: "Nov 22, 2024",
          priority: "Medium",
        },
        {
          id: 7,
          title: "Send invitations",
          assignee: "Bob Wilson",
          dueDate: "Nov 30, 2024",
          priority: "High",
        },
        {
          id: 8,
          title: "Order catering",
          assignee: "Charlie Davis",
          dueDate: "Nov 22, 2024",
          priority: "Medium",
        },
      ],
    },
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400";
      case "Medium":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400";
      case "Low":
        return "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400";
    }
  };

  const handleAddTask = (taskData: {
    title: string;
    assignees: string[];
    dueDate: string;
    priority: "High" | "Medium" | "Low";
  }) => {
    // Find the highest task ID
    const allTasks = columns.flatMap(col => col.tasks);
    const maxId = allTasks.length > 0 ? Math.max(...allTasks.map(t => t.id)) : 0;

    // Format the date
    const date = new Date(taskData.dueDate);
    const formattedDate = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });

    // Create new task with the first assignee (or join multiple assignees)
    const newTask: Task = {
      id: maxId + 1,
      title: taskData.title,
      assignee: taskData.assignees.length > 1 
        ? taskData.assignees.join(", ")
        : taskData.assignees[0],
      dueDate: formattedDate,
      priority: taskData.priority
    };

    // Add to To Do column
    setColumns(prevColumns =>
      prevColumns.map(col =>
        col.id === "todo"
          ? { ...col, tasks: [...col.tasks, newTask] }
          : col
      )
    );

    setShowAddTaskModal(false);
  };

  // Task progress calculation
  const totalTasks = columns.reduce((sum, col) => sum + col.tasks.length, 0);
  const doneTasks = columns.find((col) => col.id === "done")?.tasks.length || 0;
  const inProgressTasks = columns.find((col) => col.id === "inprogress")?.tasks.length || 0;
  const todoTasks = columns.find((col) => col.id === "todo")?.tasks.length || 0;
  const finishedTasks = doneTasks;
  const lateTasks = 1;
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900">
      {/* Header with Back Button */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-4 text-[#4a5565] dark:text-gray-400 hover:text-[#174499] dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </button>
        <div>
          <h2 className="text-black dark:text-white mb-1">
            {projectTitle} - {committeeName} Committee
          </h2>
          <p className="text-[#4a5565] dark:text-gray-400">
            Chairman: {chairman} | Vice Chairman: {viceChairman}
          </p>
        </div>
      </div>

      {/* Task Progress Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h3 className="text-black dark:text-white mb-4">TASK PROGRESS</h3>
        <div className="grid grid-cols-4 gap-6 mb-4">
          <div>
            <div className="text-gray-600 dark:text-gray-400 mb-1">Tasks To Do:</div>
            <div className="text-black dark:text-white text-2xl">{todoTasks}</div>
          </div>
          <div>
            <div className="text-gray-600 dark:text-gray-400 mb-1">Tasks In Progress:</div>
            <div className="text-black dark:text-white text-2xl">{inProgressTasks}</div>
          </div>
          <div>
            <div className="text-gray-600 dark:text-gray-400 mb-1">Tasks Finished:</div>
            <div className="text-black dark:text-white text-2xl">{finishedTasks}</div>
          </div>
          <div>
            <div className="text-gray-600 dark:text-gray-400 mb-1">Late Tasks:</div>
            <div className="text-black dark:text-white text-2xl">{lateTasks}</div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-400">Progress:</span>
            <span className="text-black dark:text-white">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="h-3 rounded-full bg-[#00C950]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          Project's Due: Oct 21, 2025
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto p-6">
        <div className="flex gap-6 h-full min-w-max">
          {columns.map((column) => (
            <div
              key={column.id}
              className="flex flex-col w-80 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shrink-0"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-black dark:text-white">
                  {column.title}
                  <span className="ml-2 text-gray-500 dark:text-gray-400">
                    {column.tasks.length} tasks
                  </span>
                </h3>
              </div>

              {/* Add Task Button */}
              {column.id === "todo" && (
                <button
                  className="w-full flex items-center justify-center gap-2 p-3 mb-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:border-[#174499] hover:text-[#174499] dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setShowAddTaskModal(true)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              )}

              {/* Tasks */}
              <div className="flex flex-col gap-3">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <h4 className="text-black dark:text-white mb-2">
                      {task.title}
                    </h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {task.assignee}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Due: {task.dueDate}
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs ${getPriorityColor(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Task Modal */}
      {showAddTaskModal && (
        <AddTaskModal
          darkMode={darkMode}
          onClose={() => setShowAddTaskModal(false)}
          onConfirm={handleAddTask}
        />
      )}
    </div>
  );
}