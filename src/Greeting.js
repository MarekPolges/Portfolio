import Curriculum from "./Curriculum.js";
import { useState } from "react";
import { motion } from "framer-motion";

const Greeting = () => {
  const [hello, setHello] = useState("Hey!");

  const handleGreeting = () => {
    setHello("Welcome!");
  };

  const handleMouseLeave = () => {
    setHello("Check out my projects!");
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="greeting-container"
      >
        <h1
          className="animate__animated animate__bounceInDown"
          onMouseOver={handleGreeting}
          onMouseLeave={handleMouseLeave}
        >
          {hello}
        </h1>
        <h2>
          My name is Marek<br></br> I'm a frontend web developer <br></br>and
          musician based in Berlin.
        </h2>
      </motion.div>
      <br></br>
      <motion.div whileHover={{ scale: 1.3 }} className="curriculum-download">
        <Curriculum />
      </motion.div>
    </>
  );
};

export default Greeting;
