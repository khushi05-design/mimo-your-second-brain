import { useState } from "react";

const CalendarCard = ({ tasks }) => {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
  });

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  const hasTaskOnDate = (day) => {
    return tasks.some((task) => {
      if (!task.dueDate) return false;

      const taskDate = new Date(task.dueDate);

      return (
        taskDate.getDate() === day &&
        taskDate.getMonth() === month &&
        taskDate.getFullYear() === year
      );
    });
  };

  const selectedTasks = tasks.filter((task) => {
    if (!task.dueDate || !selectedDate) return false;

    const taskDate = new Date(task.dueDate);

    return (
      taskDate.getDate() === selectedDate &&
      taskDate.getMonth() === month &&
      taskDate.getFullYear() === year
    );
  });

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <button
          onClick={goToPreviousMonth}
          className="text-pink-400 hover:text-pink-600 text-xl"
        >
          ←
        </button>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          📅 {monthName} {year}
        </h2>

        <button
          onClick={goToNextMonth}
          className="text-pink-400 hover:text-pink-600 text-xl"
        >
          →
        </button>

      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-slate-400 mb-3">

        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>

      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-2">

        {days.map((day, index) => {

          if (!day) {
            return <div key={index} />;
          }

          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const hasTask = hasTaskOnDate(day);

          const isSelected = selectedDate === day;

          return (
            <button
              key={index}
              onClick={() => setSelectedDate(day)}
              className={`
                h-10
                flex
                flex-col
                items-center
                justify-center
                rounded-xl
                text-sm
                transition
                ${
                  isSelected
                    ? "bg-pink-500 text-white font-bold"
                    : isToday
                    ? "bg-pink-400 text-white font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-800"
                }
              `}
            >

              <span>{day}</span>

              {hasTask && (
                <span
                  className={`w-1.5 h-1.5 rounded-full mt-1 ${
                    isToday || isSelected
                      ? "bg-white"
                      : "bg-pink-400"
                  }`}
                />
              )}

            </button>
          );
        })}

      </div>

      {/* Selected Date Tasks */}
      {selectedDate && (
        <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-4">

          <h3 className="font-semibold text-slate-800 dark:text-white mb-3">
            📌 Tasks for {monthName} {selectedDate}
          </h3>

          {selectedTasks.length === 0 ? (
            <p className="text-sm text-slate-500">
              No tasks for this day 🌸
            </p>
          ) : (
            <div className="space-y-2">

              {selectedTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 rounded-xl bg-pink-50 dark:bg-slate-800"
                >
                  <p className="font-medium text-slate-700 dark:text-white">
                    {task.completed ? "✅" : "📝"} {task.text}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Priority: {task.priority}
                  </p>
                </div>
              ))}

            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default CalendarCard;