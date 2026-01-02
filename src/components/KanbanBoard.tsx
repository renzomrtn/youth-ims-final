import { useState } from "react";
import { ArrowLeft, Plus, GripVertical } from "lucide-react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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

const ITEM_TYPE = "TASK";

interface DragItem {
  id: number;
  columnId: string;
  index: number;
}

function TaskCard({ 
  task, 
  columnId, 
  index, 
  moveTask, 
  darkMode 
}: { 
  task: Task; 
  columnId: string; 
  index: number; 
  moveTask: (taskId: number, fromColumn: string, toColumn: string, toIndex: number) => void;
  darkMode: boolean;
}) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: ITEM_TYPE,
    item: { id: task.id, columnId, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (item: DragItem) => {
      if (item.columnId !== columnId || item.index !== index) {
        moveTask(item.id, item.columnId, columnId, index);
        item.columnId = columnId;
        item.index = index;
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

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

  return (
    <div
      ref={(node) => preview(drop(node))}
      className={`bg-white dark:bg-gray-700 rounded-lg p-4 border-2 transition-all ${
        isDragging 
          ? "opacity-50 border-blue-400 dark:border-blue-500" 
          : isOver
          ? "border-blue-300 dark:border-blue-600"
          : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
      } ${isDragging ? "" : "hover:shadow-lg cursor-move"}`}
    >
      <div className="flex items-start gap-2">
        <div ref={drag} className="cursor-grab active:cursor-grabbing pt-1">
          <GripVertical className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        </div>
        <div className="flex-1">
          <h4 className="text-black dark:text-white mb-2 font-medium">
            {task.title}
          </h4>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {task.assignee}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Due: {task.dueDate}
          </div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
              task.priority
            )}`}
          >
            {task.priority}
          </span>
        </div>
      </div>
    </div>
  );
}

function KanbanColumn({ 
  column, 
  moveTask, 
  onAddTask, 
  darkMode 
}: { 
  column: Column; 
  moveTask: (taskId: number, fromColumn: string, toColumn: string, toIndex: number) => void;
  onAddTask?: () => void;
  darkMode: boolean;
}) {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item: DragItem) => {
      if (item.columnId !== column.id) {
        moveTask(item.id, item.columnId, column.id, column.tasks.length);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`flex flex-col w-80 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 transition-all shrink-0 ${
        isOver ? "border-blue-400 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-900/20" : "border-gray-200 dark:border-gray-700"
      }`}
    >
      {/* Column Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-black dark:text-white font-semibold">
          {column.title}
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 font-normal">
            {column.tasks.length} {column.tasks.length === 1 ? 'task' : 'tasks'}
          </span>
        </h3>
      </div>

      {/* Column Content */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto min-h-[200px]">
        {/* Add Task Button - Only in To Do column */}
        {column.id === "todo" && onAddTask && (
          <button
            className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:border-[#174499] hover:text-[#174499] dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
            onClick={onAddTask}
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Add Task</span>
          </button>
        )}

        {/* Tasks */}
        {column.tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            columnId={column.id}
            index={index}
            moveTask={moveTask}
            darkMode={darkMode}
          />
        ))}
        
        {/* Empty State */}
        {column.tasks.length === 0 && column.id !== "todo" && (
          <div className="text-center py-8 text-gray-400 dark:text-gray-500 text-sm">
            Drop tasks here
          </div>
        )}
      </div>
    </div>
  );
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

  const moveTask = (taskId: number, fromColumnId: string, toColumnId: string, toIndex: number) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      
      // Find source and destination columns
      const fromColumn = newColumns.find(col => col.id === fromColumnId);
      const toColumn = newColumns.find(col => col.id === toColumnId);
      
      if (!fromColumn || !toColumn) return prevColumns;
      
      // Find the task in the source column
      const taskIndex = fromColumn.tasks.findIndex(t => t.id === taskId);
      if (taskIndex === -1) return prevColumns;
      
      const [task] = fromColumn.tasks.splice(taskIndex, 1);
      
      // Add to destination column at the specified index
      toColumn.tasks.splice(toIndex, 0, task);
      
      return newColumns;
    });
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
  const reviewTasks = columns.find((col) => col.id === "review")?.tasks.length || 0;
  const todoTasks = columns.find((col) => col.id === "todo")?.tasks.length || 0;
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-gray-900 overflow-hidden">
        {/* Header with Back Button */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0">
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
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0">
          <h3 className="text-black dark:text-white mb-4 font-semibold">TASK PROGRESS</h3>
          <div className="grid grid-cols-4 gap-6 mb-4">
            <div>
              <div className="text-gray-600 dark:text-gray-400 mb-1 text-sm">Tasks To Do:</div>
              <div className="text-black dark:text-white text-3xl font-semibold">{todoTasks}</div>
            </div>
            <div>
              <div className="text-gray-600 dark:text-gray-400 mb-1 text-sm">Tasks In Progress:</div>
              <div className="text-black dark:text-white text-3xl font-semibold">{inProgressTasks}</div>
            </div>
            <div>
              <div className="text-gray-600 dark:text-gray-400 mb-1 text-sm">Tasks In Review:</div>
              <div className="text-black dark:text-white text-3xl font-semibold">{reviewTasks}</div>
            </div>
            <div>
              <div className="text-gray-600 dark:text-gray-400 mb-1 text-sm">Tasks Finished:</div>
              <div className="text-black dark:text-white text-3xl font-semibold">{doneTasks}</div>
            </div>
          </div>
          <div className="mb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm">Progress:</span>
              <span className="text-black dark:text-white font-semibold">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="h-3 rounded-full bg-[#00C950] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            Project's Due: Oct 21, 2025
          </div>
        </div>

        {/* Kanban Board - Now scrolls the entire page */}
        <div className="flex-1 overflow-x-auto overflow-y-auto">
          <div className="p-6">
            <div className="flex gap-6 min-w-max pb-6">
              {columns.map((column) => (
                <KanbanColumn
                  key={column.id}
                  column={column}
                  moveTask={moveTask}
                  onAddTask={column.id === "todo" ? () => setShowAddTaskModal(true) : undefined}
                  darkMode={darkMode}
                />
              ))}
            </div>
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
    </DndProvider>
  );
}
