import { useState } from "react";

const TaskInput = ({ task, setTask, addTask }) => {
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    if (!task.trim()) return;

    addTask(priority, dueDate);

    setPriority("Medium");
    setDueDate("");
    setTask("");
  };

  return (
    <div className="space-y-3">

      {/* Task Input */}
      <input
        type="text"
        placeholder="✏️ Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
        className="
          w-full
          px-4
          py-3
          rounded-3xl
          border
          border-slate-200
          dark:border-slate-700
          bg-white
          dark:bg-slate-800
          focus:ring-2
          focus:ring-pink-400
          outline-none
          transition
        "
      />

      {/* Bottom Row */}
      <div className="flex items-center gap-3">

        {/* Date */}
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="
            w-40
            px-4
            py-3
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
          "
        />

        {/* Priority */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="
            flex-1
            px-4
            py-3
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
          "
        >
          <option>🔴 High</option>
          <option>🟡 Medium</option>
          <option>🟢 Low</option>
        </select>

        {/* Add Button */}
        <button
          onClick={handleAdd}
          className="
            w-12
            h-12
            rounded-xl
            bg-pink-400
            hover:bg-pink-300
            text-white
            text-2xl
            font-bold
            transition-all
            duration-300
            hover:scale-105
          "
        >
          +
        </button>

      </div>

    </div>
  );
};

export default TaskInput;