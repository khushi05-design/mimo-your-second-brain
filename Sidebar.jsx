import { NavLink } from "react-router-dom";
import {
  House,
  CheckSquare,
  NotebookPen,
  CalendarDays,
  Bot,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6">

      <h1 className="text-3xl font-bold text-pink-500 mb-10">
        🌸 LifeOS
      </h1>

      <nav className="space-y-3">

        <NavLink
  to="/dashboard"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-xl transition
    ${
      isActive
        ? "bg-pink-100 text-pink-600 font-semibold"
        : "hover:bg-pink-100 hover:text-pink-600"
    }`
  }
>
  <House size={22} />
  Dashboard
</NavLink>
        <NavLink
          to="/tasks"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-100 dark:hover:bg-slate-800 transition"
        >
          <CheckSquare size={22} />
          Tasks
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition
            ${
              isActive
                ? "bg-pink-100 text-pink-600 font-semibold"
                : "hover:bg-pink-100 hover:text-pink-600"
            }`
          }
        >
          <NotebookPen size={22} />
          Notes
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition
            ${
              isActive
                ? "bg-pink-100 text-pink-600 font-semibold"
                : "hover:bg-pink-100 hover:text-pink-600"
            }`
          }
        >
          <CalendarDays size={22} />
          Calendar
        </NavLink>

        <NavLink
          to="/ai"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition
            ${
              isActive
                ? "bg-pink-100 text-pink-600 font-semibold"
                : "hover:bg-pink-100 hover:text-pink-600"
            }`
          }
        >
          <Bot size={22} />
          Mimo AI
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-xl transition
    ${
      isActive
        ? "bg-pink-100 text-pink-600 font-semibold"
        : "hover:bg-pink-100 hover:text-pink-600"
    }`
  }

        >
          <Settings size={22} />
          Settings
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;