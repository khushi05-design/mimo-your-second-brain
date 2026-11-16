import { motion } from "framer-motion";
<div className="flex items-center gap-3 border-b border-pink-100 pb-4 mb-4">

  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to--300 flex items-center justify-center text-xl">
    🌱
  </div>

  <div>
    <h3 className="font-bold text-slate-800">
      Mimo
    </h3>

    <p className="text-sm text-green-500">
      ● Online
    </p>
  </div>

</div>
const ChatBubble = ({ text, mimo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex ${mimo ? "justify-start" : "justify-end"}`}
    >
     
      <div
  className={`
    max-w-[80%]
    px-5
    py-4
    rounded-[24px]
    shadow-md
    backdrop-blur-xl
    transition-all
    ${
      mimo
        ? "bg-pink-100 border border-pink-200 text-slate-800"
        : "bg--500 text-white"
    }
  `}
>
  {text}
</div>
<div className="flex gap-2 pt-2">

  <div className="w-2 h-2 rounded-full bg--400 animate-bounce"></div>

  <div className="w-2 h-2 rounded-full bg--400 animate-bounce delay-150"></div>

  <div className="w-2 h-2 rounded-full bg--400 animate-bounce delay-300"></div>

</div>
    </motion.div>
  );
};

export default ChatBubble;