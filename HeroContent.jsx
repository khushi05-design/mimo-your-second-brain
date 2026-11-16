import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import { useTheme } from "../../context/ThemeContext";

const HeroContent = () => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
    >
      <p className="text-pink-500 font-semibold tracking-wide flex items-center gap-2">
        ✨ Meet Mimo
      </p>

      <h1
        className={`text-6xl lg:text-8xl font-extrabold leading-[0.95] ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        Your Second
        <br />
        Brain,
        <br />

        <span className="text-pink-500">
          Powered
          <br />
          by Mimo.
        </span>
      </h1>

      <p
        className={`mt-8 text-xl max-w-xl leading-9 transition-colors duration-300 ${
          darkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        Organize your notes, tasks, memories and daily life with
        your adorable AI companion that grows with you.
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>
    </motion.div>
  );
};

export default HeroContent;