import { motion } from "framer-motion";

const DashboardCard = ({ title, value, color }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        bg-white
        dark:bg-slate-800
        rounded-3xl
        shadow-xl
        p-6
        border
        border-pink-100
        dark:border-slate-700
        transition-colors
        duration-300
      "
    >
      <div
        className="w-4 h-4 rounded-full mb-4"
        style={{ backgroundColor: color }}
      />

      <h3
        className="
          text-slate-500
          dark:text-slate-400
          text-sm
        "
      >
        {title}
      </h3>

      <p
        className="
          text-3xl
          font-bold
          text-slate-800
          dark:text-white
          mt-2
        "
      >
        {value}
      </p>
    </motion.div>
  );
};

export default DashboardCard;