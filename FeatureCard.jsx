import { motion } from "framer-motion";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        p-8
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        border
        border-pink-100
        dark:border-slate-800
      "
    >
      <div
        className="
          w-14
          h-14
          rounded-2xl
          bg-pink-100
          dark:bg-pink-950/40
          flex
          items-center
          justify-center
          mb-6
        "
      >
        <Icon
          size={28}
          className="text-pink-400 dark:text-pink-300"
        />
      </div>

      <h3
        className="
          text-2xl
          font-bold
          text-slate-800
          dark:text-white
          mb-3
        "
      >
        {feature.title}
      </h3>

      <p
        className="
          text-slate-600
          dark:text-slate-300
          leading-7
        "
      >
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;