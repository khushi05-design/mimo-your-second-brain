import { useState, useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import TaskCard from "../components/dashboard/TaskCard";

const Tasks = () => {
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
    localStorage.setItem(
      `tasks_${userEmail}`,
      JSON.stringify(tasks)
    );
  }, [tasks, userEmail]);

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        ✅ My Tasks
      </h1>

      <div className="max-w-4xl">
        <TaskCard
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>

    </DashboardLayout>
  );
};

export default Tasks;