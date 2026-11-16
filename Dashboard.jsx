import { useState, useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import TaskCard from "../components/dashboard/TaskCard";
import CalendarCard from "../components/dashboard/CalendarCard";
import NotesCard from "../components/dashboard/NotesCard";
import MimoChat from "../components/mimo/MimoChat";
import MimoCard from "../components/dashboard/MimoCard";
import ProgressCard from "../components/dashboard/ProgressCard";

const Dashboard = () => {
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  // TASKS
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(
      `tasks_${userEmail}`
    );

    try {
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks:", error);
      return [];
    }
  });

  // NOTES
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(
      `notes_${userEmail}`
    );

    try {
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error("Error loading notes:", error);
      return [];
    }
  });

  // SAVE TASKS
  useEffect(() => {
    localStorage.setItem(
      `tasks_${userEmail}`,
      JSON.stringify(tasks)
    );
  }, [tasks, userEmail]);

  // SAVE NOTES
  useEffect(() => {
    localStorage.setItem(
      `notes_${userEmail}`,
      JSON.stringify(notes)
    );
  }, [notes, userEmail]);

  return (
    <DashboardLayout>

      <WelcomeCard
        userName={userName}
      />

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        <TaskCard
          tasks={tasks}
          setTasks={setTasks}
        />

        <ProgressCard
          tasks={tasks}
          userName={userName}
        />

        <CalendarCard
          tasks={tasks}
        />

        <NotesCard
          notes={notes}
          setNotes={setNotes}
        />

        <MimoChat
          tasks={tasks}
          notes={notes}
          userName={userName}
        />

        <MimoCard
          tasks={tasks}
          userName={userName}
        />

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;