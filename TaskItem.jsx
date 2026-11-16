import { Trash2 } from "lucide-react";

const TaskItem = ({ item, toggleTask, deleteTask }) => {

  const priorityColor = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div className="
bg-white
dark:bg-slate-800
rounded-2xl
border
border-slate-200
dark:border-slate-700
p-4
transition-all
duration-300
hover:shadow-lg
hover:-translate-y-1
">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleTask(item.id)}
          />

          <p
            className={
              item.completed
                ? "line-through text-gray-400"
                : ""
            }
          >
            {item.text}
          </p>

        </div>

        <button
          onClick={() => deleteTask(item.id)}
        >
          <Trash2
            size={18}
            className="text-red-500"
          />
        </button>

      </div>

      <div className="mt-3">

  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${priorityColor[item.priority]}`}
  >
    {item.priority}
  </span>

  {item.dueDate && (
    <p className="text-sm text-slate-500 mt-2">
  📅 Due:{" "}
  {new Date(item.dueDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}
</p>
  )}

</div>

    </div>
  );
};

export default TaskItem;