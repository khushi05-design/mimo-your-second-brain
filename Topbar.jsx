import { Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Topbar = () => {
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [tasks, setTasks] = useState([]);

  const userName =
    localStorage.getItem("userName") || "there";

  const userEmail =
    localStorage.getItem("userEmail");

  const loadTasks = () => {
    const savedTasks = localStorage.getItem(
      `tasks_${userEmail}`
    );

    try {
      const parsedTasks = savedTasks
        ? JSON.parse(savedTasks)
        : [];

      setTasks(
        Array.isArray(parsedTasks)
          ? parsedTasks
          : []
      );
    } catch (error) {
      console.error("Invalid tasks data:", error);
      setTasks([]);
    }
  };

  useEffect(() => {
    loadTasks();

    const handleTasksUpdated = () => {
      loadTasks();
    };

    window.addEventListener(
      "tasksUpdated",
      handleTasksUpdated
    );

    return () => {
      window.removeEventListener(
        "tasksUpdated",
        handleTasksUpdated
      );
    };
  }, [userEmail]);

  // 🧠 SMART NOTIFICATIONS
  const getNotifications = () => {
    const notifications = [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const pendingTasks = tasks.filter(
      (task) => !task.completed
    );

    // 🎉 ALL TASKS COMPLETE
    if (
      tasks.length > 0 &&
      pendingTasks.length === 0
    ) {
      notifications.push({
        id: "complete",
        icon: "🎉",
        text: `Amazing ${userName}! You completed all your tasks!`,
      });
    }

    pendingTasks.forEach((task) => {
      // 🔴 HIGH PRIORITY
      if (task.priority === "High") {
        notifications.push({
          id: `high-${task.id}`,
          icon: "🔴",
          text: `High priority: ${task.text}`,
        });
      }

      if (task.dueDate) {
        const dueDate = new Date(task.dueDate);
        dueDate.setHours(0, 0, 0, 0);

        const difference =
          dueDate - today;

        const daysLeft =
          difference /
          (1000 * 60 * 60 * 24);

        // ⚠️ OVERDUE
        if (daysLeft < 0) {
          notifications.push({
            id: `overdue-${task.id}`,
            icon: "⚠️",
            text: `Overdue task: ${task.text}`,
          });
        }

        // ⏰ DUE TODAY
        else if (daysLeft === 0) {
          notifications.push({
            id: `today-${task.id}`,
            icon: "⏰",
            text: `Due today: ${task.text}`,
          });
        }

        // 📅 DUE TOMORROW
        else if (daysLeft === 1) {
          notifications.push({
            id: `tomorrow-${task.id}`,
            icon: "📅",
            text: `Due tomorrow: ${task.text}`,
          });
        }
      }
    });

    // 📋 NORMAL TASK
    if (
      notifications.length === 0 &&
      pendingTasks.length > 0
    ) {
      notifications.push({
        id: "pending",
        icon: "📋",
        text: `You have ${pendingTasks.length} pending task${
          pendingTasks.length !== 1
            ? "s"
            : ""
        }`,
      });
    }

    return notifications;
  };

  const notifications = getNotifications();

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    navigate("/login");
  };

  return (
    <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 transition-colors duration-300">

      {/* SEARCH */}
      <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2 transition-colors">

        <Search
          size={18}
          className="text-slate-500 dark:text-slate-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
        />

      </div>

      <div className="flex items-center gap-6">

        {/* 🔔 SMART BELL */}
        <div className="relative">

          <button
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
            className="relative p-2 rounded-full hover:bg-pink-100 dark:hover:bg-slate-800 transition"
          >

            <Bell
              size={22}
              className="text-slate-700 dark:text-slate-200"
            />

            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications.length}
              </span>
            )}

          </button>

          {/* NOTIFICATION PANEL */}
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-96 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl dark:shadow-black/30 p-4 z-50">

              <div className="flex items-center justify-between mb-4">

                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  🔔 Smart Notifications
                </h3>

                <button
                  onClick={() =>
                    setShowNotifications(false)
                  }
                  className="text-slate-400 hover:text-pink-500 transition"
                >
                  ✕
                </button>

              </div>

              {notifications.length === 0 ? (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  You're all caught up 🌸
                </p>
              ) : (
                <div className="space-y-2">

                  {notifications
                    .slice(0, 8)
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className="p-3 rounded-xl bg-pink-50 dark:bg-slate-700 transition"
                      >

                        <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                          {notification.icon}{" "}
                          {notification.text}
                        </p>

                      </div>
                    ))}

                </div>
              )}

              <button
                onClick={() => {
                  setShowNotifications(false);
                  navigate("/tasks");
                }}
                className="w-full mt-4 py-2 rounded-xl bg-pink-400 hover:bg-pink-500 text-white font-semibold transition"
              >
                View Tasks
              </button>

            </div>
          )}

        </div>

        {/* PROFILE */}
        <div className="relative group">

          <button
            className="w-11 h-11 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold"
          >
            {userName.charAt(0).toUpperCase()}
          </button>

          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg dark:shadow-black/30 p-2 hidden group-hover:block">

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-pink-50 dark:hover:bg-slate-700 transition"
            >
              🚪 Logout
            </button>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;