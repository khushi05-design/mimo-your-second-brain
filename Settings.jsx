import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const { darkMode, toggleTheme } = useTheme();

  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  const [saved, setSaved] = useState(false);

  const saveProfile = () => {
    if (!userName.trim()) return;

    localStorage.setItem("userName", userName);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        ⚙️ Settings
      </h1>

      <div className="space-y-6">

        {/* Profile Settings */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">
            👤 Profile
          </h2>

          <label className="block text-slate-600 dark:text-slate-300 mb-2">
            Your Name
          </label>

          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-pink-300
              dark:border-slate-700
              dark:bg-slate-800
              outline-none
              focus:ring-2
              focus:ring-pink-300
            "
          />

          <button
            onClick={saveProfile}
            className="
              mt-4
              px-5
              py-3
              rounded-xl
              bg-pink-400
              hover:bg-pink-500
              text-white
              font-semibold
              transition
            "
          >
            Save Profile
          </button>

          {saved && (
            <p className="text-green-500 mt-3">
              Profile saved successfully ✅
            </p>
          )}

        </div>

        {/* Theme Settings */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">
            🎨 Appearance
          </h2>

          <div className="flex items-center justify-between">

            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white">
                Dark Mode
              </h3>

              <p className="text-slate-500">
                Change your LifeOS appearance
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className="
                px-5
                py-3
                rounded-xl
                bg-pink-400
                hover:bg-pink-500
                text-white
                font-semibold
                transition
              "
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Settings;