import "./AnimatedText.css";
import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <div className={"AnimatedTextContainer"}>
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity }}
        className={"w-full "}
        style={{ x: "-80%" }}
        initial={{ x: "100%" }}
        offset={-0.1}
      >
        <h1 className={"TextAnimate"}>FOCUS ON YOUR <span>FITNESS</span> NOT YOUR LOSS</h1>
      </motion.div>
    </div>
  );
};
export default AnimatedText;