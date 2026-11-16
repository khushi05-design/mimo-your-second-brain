import { motion } from "framer-motion";

import MimoBody from "./MimoBody";
import MimoEyes from "./MimoEyes";
import MimoLeaf from "./MimoLeaf";
import MimoCheeks from "./MimoCheeks";
import MimoSmile from "./MimoSmile";

const Mimo = ({size = 260}) => {
  return (
    <motion.div
      style={{
  width: `${size}px`,
  height: `${size * 1.08}px`,
}}
className="relative flex items-center justify-center"
      
      animate={{
        y: [0, -12, 0],
        rotate: [-1, 1, -1],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <MimoLeaf />
      <MimoBody />
      <MimoEyes />
      <MimoCheeks />
      <MimoSmile />
    </motion.div>
  );
};

export default Mimo;