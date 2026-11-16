import { motion } from "framer-motion";

const MimoEyes = () => {
  return (
    <div
      className="
        absolute
        top-[31%]
        left-1/2
        -translate-x-1/2
        flex
        justify-center
        gap-[18%]
        w-[55%]
        z-20
      "
    >
      {/* Left Eye */}
      <motion.div
        animate={{
          scaleY: [1, 1, 0.12, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="
          relative
          w-[18%]
          aspect-[1/2]
          bg-slate-800
          rounded-full
        "
      >
        {/* Eye Shine */}
        <div
          className="
            absolute
            top-[15%]
            left-[22%]
            w-[25%]
            aspect-square
            bg-white
            rounded-full
          "
        />

        <div
          className="
            absolute
            top-[38%]
            left-[36%]
            w-[12%]
            aspect-square
            bg-white
            rounded-full
            opacity-80
          "
        />
      </motion.div>

      {/* Right Eye */}
      <motion.div
        animate={{
          scaleY: [1, 1, 0.12, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="
          relative
          w-[18%]
          aspect-[1/2]
          bg-slate-800
          rounded-full
        "
      >
        {/* Eye Shine */}
        <div
          className="
            absolute
            top-[15%]
            left-[22%]
            w-[25%]
            aspect-square
            bg-white
            rounded-full
          "
        />

        <div
          className="
            absolute
            top-[38%]
            left-[36%]
            w-[12%]
            aspect-square
            bg-white
            rounded-full
            opacity-80
          "
        />
      </motion.div>
    </div>
  );
};

export default MimoEyes;