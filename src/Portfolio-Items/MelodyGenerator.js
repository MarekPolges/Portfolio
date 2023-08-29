import React, { useState } from "react";
import Synth from "/Users/marekpolgesek/Desktop/{coding, dev}/Frontend Projects/Portfolio/portfolio-website/src/Images/GayestSynth.png";
import "./Portfolio.css";
import "animate.css";
import { motion } from "framer-motion";
import MelodyGeneratorScr from "../Images/MelodyGenerator.png";

const MelodyGenerator = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [className, setClassName] = useState(false);

  const handleHover = () => {
    setClassName((className) => !className);
  };

  let toggleClassCheck = className
    ? " animate__animated animate__wobble"
    : null;

  return (
    <>
      <div className="overlay">
        <main className="project-container">
          <div className="image-container">
            <figure>
              <img
                src={Synth}
                onClick={toggleModal}
                className={`img${toggleClassCheck}`}
                onMouseOver={handleHover}
                style={{ maxWidth: "100%" }}
              ></img>
              <figcaption>
                <h3>Melody Generator</h3>
                <h4>Webdesign & Webdevelopment</h4>
              </figcaption>
            </figure>
          </div>
        </main>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay">
              <div className="modal-content">
                <a
                  href="https://github.com/MarekPolges/Melody-Generator"
                  target="_blank"
                >
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={MelodyGeneratorScr}
                    className="screenshot"
                  ></motion.img>
                </a>
                <div className="project-description">
                  <h1>Melody Generator</h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    Music is one of my biggest passions, so I naturally
                    gravitate towards apps and sites for and about music. This
                    web app lets you<mark> generate a random melody</mark> based
                    on a scale of your choice. The future goal is to implement
                    music theory to generate more musical and appealing results.
                    The <mark>biggest challenge</mark> here was to learn about
                    <mark>
                      {" "}
                      APIs and how to implement them in vanilla Javascript
                    </mark>{" "}
                    I also used some{" "}
                    <mark>jQuery to handle some of the animations</mark>. It was
                    challenging to keep an overview of all the elements and
                    their nesting.{" "}
                    <mark>
                      {" "}
                      Now I know how crucial clean and transparent code is!
                    </mark>{" "}
                    Next time I would use React to build a similar project. I’ve
                    used <mark>Bootstrap</mark> to streamline and facilitate
                    styling.
                  </motion.p>
                  <br></br>
                  <div className="used-tech">
                    <p>
                      <strong>What I used for this project:</strong>
                    </p>

                    <ol>
                      <li>HTML, CSS, Javascript</li>
                      <li>CSS Bootstrap</li>
                      <li>Web Audio API</li>
                      <li>jQuery</li>
                    </ol>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 1.5 }}
                  className="close-modal"
                  onClick={toggleModal}
                >
                  X
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MelodyGenerator;
