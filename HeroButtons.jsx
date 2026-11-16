import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DemoModal from "./DemoModal";

const HeroButtons = () => {
  const navigate = useNavigate();
  const [openDemo, setOpenDemo] = useState(false);

  const handleStart = () => {
    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  return (
    <>
      <div className="flex items-center gap-4 flex-wrap mt-2">
        {/* Start Your Journey button */}
        <motion.button
          type="button"
          onClick={handleStart}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg shadow-pink-200/60 dark:shadow-pink-950/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
        >
          Start Your Journey ✨
        </motion.button>

        {/* Watch Demo button */}
        <motion.button
          type="button"
          onClick={() => setOpenDemo(true)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-pink-500 dark:text-pink-400 font-semibold shadow-lg shadow-slate-200/70 dark:shadow-black/20 border border-pink-100 dark:border-slate-700 hover:bg-pink-50 dark:hover:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
        >
          ▶ Watch Demo
        </motion.button>
      </div>

      <DemoModal
        open={openDemo}
        onClose={() => setOpenDemo(false)}
      />
    </>
  );
};

export default HeroButtons;