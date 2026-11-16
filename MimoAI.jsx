import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import MimoChat from "../components/mimo/MimoChat";

const MimoAI = () => {
  const userEmail = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(
      `tasks_${userEmail}`
    );

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(
      `notes_${userEmail}`
    );

    return savedNotes
      ? JSON.parse(savedNotes)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      `tasks_${userEmail}`,
      JSON.stringify(tasks)
    );
  }, [tasks, userEmail]);

  useEffect(() => {
    localStorage.setItem(
      `notes_${userEmail}`,
      JSON.stringify(notes)
    );
  }, [notes, userEmail]);

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        🤖 Mimo AI
      </h1>

      <MimoChat
        tasks={tasks}
        notes={notes}
        userName={userName}
      />

    </DashboardLayout>
  );
};

export default MimoAI;