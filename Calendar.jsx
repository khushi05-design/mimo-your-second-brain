import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import CalendarCard from "../components/dashboard/CalendarCard";

const Calendar = () => {
  const userEmail = localStorage.getItem("userEmail");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(
      `tasks_${userEmail}`
    );

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  useEffect(() => {
    const savedTasks = localStorage.getItem(
      `tasks_${userEmail}`
    );

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [userEmail]);

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        📅 My Calendar
      </h1>

      <CalendarCard
        tasks={tasks}
      />

    </DashboardLayout>
  );
};

export default Calendar;