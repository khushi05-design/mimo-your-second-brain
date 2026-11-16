import { motion } from "framer-motion";

const particles = [
  { top: "8%", left: "12%", size: 10, delay: 0 },
  { top: "18%", right: "10%", size: 8, delay: 0.6 },
  { bottom: "18%", left: "8%", size: 12, delay: 1.2 },
  { bottom: "10%", right: "18%", size: 9, delay: 1.8 },
  { top: "45%", left: "-2%", size: 7, delay: 2.2 },
  { top: "50%", right: "-2%", size: 7, delay: 2.8 },
];
<div className="absolute inset-0 pointer-events-none">

  <div className="absolute top-4 left-8 animate-pulse text-pink-400">
    ✨
  </div>

  <div className="absolute bottom-8 right-8 animate-bounce text-yellow-300">
    ⭐
  </div>

  <div className="absolute top-20 right-4 animate-pulse text-pink-300">
    💖
  </div>

</div>
const FloatingParticles = () => {
  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-pink-300/50"
          style={{
            width: particle.size,
            height: particle.size,
            ...particle,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;