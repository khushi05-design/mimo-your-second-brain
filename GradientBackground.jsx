import { motion } from "framer-motion";

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Left Gradient */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-96
          h-96
          bg-pink-300
          dark:bg-pink-600
          rounded-full
          blur-[120px]
          opacity-30
          dark:opacity-15
          top-10
          left-10
        "
      />

      {/* Right Gradient */}
      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-pink-300
          dark:bg-purple-600
          rounded-full
          blur-[150px]
          opacity-30
          dark:opacity-15
          right-0
          top-40
        "
      />

    </div>
  );
};

export default GradientBackground;