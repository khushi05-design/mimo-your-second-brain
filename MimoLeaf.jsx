import { motion } from "framer-motion";

const MimoLeaf = () => {
  return (
    <motion.div
      className="
        absolute
        top-[-8%]
        left-1/2
        -translate-x-1/2
        z-20
      "
      animate={{
        rotate: [-8, 8, -8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Stem */}
      <div
        className="
          w-[2%]
          h-[12%]
          min-h-[12px]
          bg-green-500
          mx-auto
          rounded-full
        "
      />

      {/* Leaf */}
      <div
        className="
          w-[18%]
          aspect-[7/12]
          min-w-[18px]
          bg-gradient-to-br
          from-green-300
          to-green-500
          rounded-[60%_40%_60%_40%]
          -rotate-12
          shadow-md
        "
      />
    </motion.div>
  );
};

export default MimoLeaf;