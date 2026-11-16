import { useState } from "react";

import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import TaskSearch from "./TaskSearch";

const TaskCard = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");

  // Add Task
  const addTask = (priority, dueDate) => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
      priority,
      dueDate,
    };

    
    setTasks((prev) => {
  const updatedTasks = [...prev, newTask];

  window.dispatchEvent(
    new Event("tasksUpdated")
  );

  return updatedTasks;
});
setTask("");
  };

  // Toggle Complete
const toggleTask = (id) => {
  setTasks((prev) => {
    const updatedTasks = prev.map((item) =>
      item.id === id
        ? {
            ...item,
            completed: !item.completed,
          }
        : item
    );

    window.dispatchEvent(
      new Event("tasksUpdated")
    );

    return updatedTasks;
  });
};

  // Delete Task
 const deleteTask = (id) => {
  setTasks((prev) => {
    const updatedTasks = prev.filter(
      (item) => item.id !== id
    );

    window.dispatchEvent(
      new Event("tasksUpdated")
    );

    return updatedTasks;
  });
};

  // Search Tasks
  const filteredTasks = tasks.filter((item) =>
    item.text
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5 text-slate-800 dark:text-white">
        📝 Today's Tasks
      </h2>

      <TaskSearch
        search={search}
        setSearch={setSearch}
      />

      <div className="my-5">
        <TaskInput
          task={task}
          setTask={setTask}
          addTask={addTask}
        />
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto pr-2">

        {filteredTasks.length === 0 ? (
          <p className="text-center text-slate-500">
            No tasks found.
          </p>
        ) : (
          filteredTasks.map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))
        )}

      </div>

    </div>
  );
};

export default TaskCard;