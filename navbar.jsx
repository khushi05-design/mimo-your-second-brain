import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <Link
          to="/"
          className="text-2xl font-bold text-slate-900 dark:text-white"
        >
          🌸 LifeOS
        </Link>

        <div className="hidden md:flex gap-8">
          <a
            href="#features"
            className="text-slate-700 dark:text-slate-300 hover:text-pink-500 transition"
          >
            Features
          </a>

          <a
            href="#dashboard"
            className="text-slate-700 dark:text-slate-300 hover:text-pink-500 transition"
          >
            Dashboard
          </a>

          <a
            href="#testimonials"
            className="text-slate-700 dark:text-slate-300 hover:text-pink-500 transition"
          >
            Reviews
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full bg-pink-500 dark:bg-yellow-400 text-white dark:text-slate-900 hover:scale-110 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Link
            to="/login"
            className="text-slate-700 dark:text-slate-300 hover:text-pink-500 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2.5 rounded-full bg-pink-400 hover:bg-pink-500 text-white transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;