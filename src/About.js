import { useState } from "react";
import Photo from "./Photo.js";
import Socials from "./Socials.js";
import { motion } from "framer-motion";

const About = () => {
  const [hello, setHello] = useState("Hello");

  const handleGreeting = () => {
    setHello("That's me:");
  };

  const handleMouseLeave = () => {
    setHello("Hello");
  };

  return (
    <>
      <div className="about-container">
        <motion.div
          className="photo-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.1 }}
          exit={{ opacity: 0 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          style={{ verflow: "hidden" }}
        >
          <Photo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="profile-text-container"
        >
          <h1
            className="animate__animated animate__bounce animate__pulse"
            onMouseOver={handleGreeting}
            onMouseLeave={handleMouseLeave}
          >
            {hello}
          </h1>

          <h3>
            As a budding frontend web developer and musician, I'm drawn to
            minimalist and playful designs. I'm enthusiastic about finding
            imaginative solutions and creating unique websites and apps. While I
            acquired a foundational understanding, I'm also humbly aware of my
            beginner status and excited to continue learning and integrating the
            latest tech and design trends into my projects.
          </h3>
          <div />
        </motion.div>
        <div className="socials-container">
          <Socials />
        </div>
      </div>
    </>
  );
};

export default About;
