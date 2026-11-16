import { motion } from "framer-motion";

const SpeechBubble = ({ message }) => {
  return (
    <motion.div
      key={message}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        mb-5
        inline-block
        rounded-2xl
        bg-pink-100
        dark:bg-slate-800
        px-5
        py-3
        text-slate-700
        dark:text-white
        shadow-lg
        max-w-sm
      "
    >
      {message}
    </motion.div>
  );
};

export default SpeechBubble;