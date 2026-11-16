import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Tasks from "./pages/Tasks";
import Notes from "./pages/Notes";
import Calendar from "./pages/Calendar";
import MimoAI from "./pages/MimoAI";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-[#FFFCFD] text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <Calendar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai"
          element={
            <ProtectedRoute>
              <MimoAI />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

      </Routes>

    </div>
  );
}

export default App;