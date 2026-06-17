import "./App.scss";
import { motion } from "motion/react";
const App = () => {
  const boxVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="outer">
      <div className="page"></div>
      <div className="page page2">
        <motion.div
          initial={boxVariant.hidden}
          transition={{ duration: 6, ease: "easeOut", mass: 5 }}
          viewport={{ once: false, amount: 0.25 }}
          whileHover={boxVariant.visible}
          whileInView={{ opacity: 1 }}
          whileFocus={{ backgroundColor: "red" }}
          className="box"></motion.div>
      </div>
    </div>
  );
};

export default App;
