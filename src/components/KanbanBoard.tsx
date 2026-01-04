import { tasksAPI, projectsAPI } from "../utils/database";
import { useState } from "react";
import { ArrowLeft, Plus, GripVertical, Trash2 } from "lucide-react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AddTaskModal } from "./AddTaskModal";
import { useEffect } from "react";

interface KanbanBoardProps {
  darkMode: boolean;
  projectId: string;
  projectTitle: string;
  committeeName: string;
  committeeId: string;
  chairman: string;
  viceChairman: string;
  onBack: () => void;
  onProgressUpdate?: () => void;
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
  onDelete,
  darkMode
}: {
  task: Task;
  columnId: string;
  index: number;
  moveTask: (taskId: number, fromColumn: string, toColumn: string, toIndex: number) => void;
  onDelete: (taskId: number) => void;
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
    <article
      ref={(node) => preview(drop(node))}
      className={`bg-white dark:bg-gray-700 rounded-lg p-4 border-2 transition-all ${isDragging
        ? "opacity-50 border-blue-400 dark:border-blue-500"
        : isOver
          ? "border-blue-300 dark:border-blue-600"
          : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
        } ${isDragging ? "" : "hover:shadow-lg"}`}
      aria-label={`Task: ${task.title}`}
    >
      <div className="flex items-start gap-2">
        <div ref={drag} className="cursor-grab active:cursor-grabbing pt-1" role="button" aria-label="Drag to move task">
          <GripVertical className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        </div>
        <div className="flex-1">
          <header className="flex items-start justify-between gap-2 mb-2">
            <h4 className="text-black dark:text-white font-medium flex-1">
              {task.title}
            </h4>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (confirm("Are you sure you want to delete this task?")) {
                  onDelete(task.id);
                }
              }}
              className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors group"
              title="Delete task"
              aria-label={`Delete task: ${task.title}`}
            >
              <Trash2 className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-red-600 dark:group-hover:text-red-400" />
            </button>
          </header>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {task.assignee}
          </p>
          <time className="text-sm text-gray-600 dark:text-gray-400 mb-3 block">
            Due: {task.dueDate}
          </time>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
              task.priority
            )}`}
            role="status"
            aria-label={`Priority: ${task.priority}`}
          >
            {task.priority}
          </span>
        </div>
      </div>
    </article>
  );
}

function KanbanColumn({
  column,
  moveTask,
  onDeleteTask,
  onAddTask,
  darkMode
}: {
  column: Column;
  moveTask: (taskId: number, fromColumn: string, toColumn: string, toIndex: number) => void;
  onDeleteTask: (taskId: number) => void;
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
    <section
      ref={drop}
      className={`flex flex-col w-80 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 transition-all shrink-0 ${isOver ? "border-blue-400 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-900/20" : "border-gray-200 dark:border-gray-700"
        }`}
      aria-label={`${column.title} column with ${column.tasks.length} tasks`}
    >
      {/* Column Header */}
      <header className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-black dark:text-white font-semibold">
          {column.title}
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 font-normal">
            {column.tasks.length} {column.tasks.length === 1 ? 'task' : 'tasks'}
          </span>
        </h3>
      </header>

      {/* Column Content */}
      <div className="p-4 space-y-3 min-h-[200px]">
        {/* Add Task Button - Only in To Do column */}
        {column.id === "todo" && onAddTask && (
          <button
            className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:border-[#174499] hover:text-[#174499] dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
            onClick={onAddTask}
            aria-label="Add new task"
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
            onDelete={onDeleteTask}
            darkMode={darkMode}
          />
        ))}

        {/* Empty State */}
        {column.tasks.length === 0 && column.id !== "todo" && (
          <p className="text-center py-8 text-gray-400 dark:text-gray-500 text-sm">
            Drop tasks here
          </p>
        )}
      </div>
    </section>
  );
}

export function KanbanBoard({
  darkMode,
  projectId,
  projectTitle,
  committeeName,
  committeeId,
  chairman,
  viceChairman,
  onBack,
  onProgressUpdate,
}: KanbanBoardProps) {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const [columns, setColumns] = useState<Column[]>([
    { id: "todo", title: "To Do", tasks: [] },
    { id: "inprogress", title: "In Progress", tasks: [] },
    { id: "review", title: "Review", tasks: [] },
    { id: "done", title: "Done", tasks: [] },
  ]);

  // Load tasks from database on mount
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasks = await tasksAPI.getByProject(projectId, committeeId);
        const organized: Column[] = [
          { id: "todo", title: "To Do", tasks: [] },
          { id: "inprogress", title: "In Progress", tasks: [] },
          { id: "review", title: "Review", tasks: [] },
          { id: "done", title: "Done", tasks: [] },
        ];

        tasks.forEach((task: any) => {
          const column = organized.find(col => col.id === task.columnId);
          if (column) {
            column.tasks.push(task);
          }
        });

        setColumns(organized);
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    };

    loadTasks();
  }, [projectId, committeeId]);

  const moveTask = async (taskId: number, fromColumnId: string, toColumnId: string, toIndex: number) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];

      const fromColumn = newColumns.find(col => col.id === fromColumnId);
      const toColumn = newColumns.find(col => col.id === toColumnId);

      if (!fromColumn || !toColumn) return prevColumns;

      const taskIndex = fromColumn.tasks.findIndex(t => t.id === taskId);
      if (taskIndex === -1) return prevColumns;

      const [task] = fromColumn.tasks.splice(taskIndex, 1);
      toColumn.tasks.splice(toIndex, 0, task);

      tasksAPI.update(projectId, committeeId, task.id.toString(), {
        ...task,
        columnId: toColumnId
      })
        .then(() => projectsAPI.updateProgress(projectId))
        .then(() => {
          console.log('Project progress updated!');
          onProgressUpdate?.();
        })
        .catch(err => console.error("Error saving task move:", err));

      return newColumns;
    });
  };

  const handleAddTask = async (taskData: {
    title: string;
    assignees: string[];
    dueDate: string;
    priority: "High" | "Medium" | "Low";
  }) => {
    const newTaskId = Date.now();

    const date = new Date(taskData.dueDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const newTask: Task = {
      id: newTaskId,
      title: taskData.title,
      assignee: taskData.assignees.length > 1
        ? taskData.assignees.join(", ")
        : taskData.assignees[0],
      dueDate: formattedDate,
      priority: taskData.priority,
      columnId: "todo",
    };

    try {
      await tasksAPI.create(projectId, committeeId, newTask);
      await projectsAPI.updateProgress(projectId);

      onProgressUpdate?.();

      setColumns(prevColumns =>
        prevColumns.map(col =>
          col.id === "todo"
            ? { ...col, tasks: [...col.tasks, newTask] }
            : col
        )
      );

      setShowAddTaskModal(false);
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to create task");
      throw error;
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    try {
      const column = columns.find(col => col.tasks.some(t => t.id === taskId));
      if (!column) return;

      const task = column.tasks.find(t => t.id === taskId);
      if (!task) return;

      await tasksAPI.delete(projectId, committeeId, taskId.toString());
      await projectsAPI.updateProgress(projectId);

      onProgressUpdate?.();

      setColumns(prevColumns =>
        prevColumns.map(col =>
          col.id === column.id
            ? { ...col, tasks: col.tasks.filter(t => t.id !== taskId) }
            : col
        )
      );
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task");
    }
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
        <div className="flex flex-col w-full">
          {/* Header with Back Button */}
          <header className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0">
            <nav aria-label="Breadcrumb navigation">
              <button
                onClick={onBack}
                className="flex items-center gap-2 mb-4 text-[#4a5565] dark:text-gray-400 hover:text-[#174499] dark:hover:text-blue-400 transition-colors"
                aria-label="Go back to projects"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Projects</span>
              </button>
            </nav>
            <div>
              <h1 className="text-black dark:text-white mb-1">
                {projectTitle} - {committeeName} Committee
              </h1>
              <p className="text-[#4a5565] dark:text-gray-400">
                Chairman: {chairman} | Vice Chairman: {viceChairman}
              </p>
            </div>
          </header>

          {/* Task Progress Section */}
          <section className="flex gap-5 p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0" aria-labelledby="task-progress-heading">
            <div className="flex-1">
              <h2 id="task-progress-heading" className="text-black dark:text-white mb-4 font-semibold">TASK PROGRESS</h2>
              <div className="grid grid-cols-4 gap-6 mb-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1 text-sm">Tasks To Do:</p>
                  <p className="text-black dark:text-white text-3xl font-semibold" aria-label={`${todoTasks} tasks to do`}>{todoTasks}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1 text-sm">Tasks In Progress:</p>
                  <p className="text-black dark:text-white text-3xl font-semibold" aria-label={`${inProgressTasks} tasks in progress`}>{inProgressTasks}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1 text-sm">Tasks In Review:</p>
                  <p className="text-black dark:text-white text-3xl font-semibold" aria-label={`${reviewTasks} tasks in review`}>{reviewTasks}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1 text-sm">Tasks Finished:</p>
                  <p className="text-black dark:text-white text-3xl font-semibold" aria-label={`${doneTasks} tasks finished`}>{doneTasks}</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-2 mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Progress:</span>
                  <output className="text-black dark:text-white font-semibold" aria-label={`Project progress: ${progress} percent complete`}>{progress}%</output>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Project completion progress">
                  <div
                    className="h-3 rounded-full bg-[#00C950] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Project's Due: <time dateTime="2025-10-21">Oct 21, 2025</time>
              </p>
            </div>
          </section>
        </div>

        {/* Kanban Board */}
        <main className="flex-1 overflow-x-auto overflow-y-auto" aria-label="Kanban board">
          <div className="p-6">
            <div className="flex gap-6 min-w-max pb-6" role="region" aria-label="Task columns">
              {columns.map((column) => (
                <KanbanColumn
                  key={column.id}
                  column={column}
                  moveTask={moveTask}
                  onDeleteTask={handleDeleteTask}
                  onAddTask={column.id === "todo" ? () => setShowAddTaskModal(true) : undefined}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </main>

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