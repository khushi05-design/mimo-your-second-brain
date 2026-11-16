import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        p-8
        shadow-xl
        border
        border-pink-100
        dark:border-slate-800
        
      "
    >
      <div className="text-5xl mb-5">
        {testimonial.avatar}
      </div>

      <p
        className="
          text-slate-600
          dark:text-slate-300
          italic
          leading-7
        "
      >
        "{testimonial.review}"
      </p>

      <h3
        className="
          font-bold
          text-xl
          mt-6
          text-slate-800
          dark:text-white
        "
      >
        {testimonial.name}
      </h3>

      <p
        className="
          text-slate-500
          dark:text-slate-400
        "
      >
        {testimonial.role}
      </p>
    </motion.div>
  );
};

export default TestimonialCard;