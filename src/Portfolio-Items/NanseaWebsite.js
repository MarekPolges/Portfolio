import React, { useState } from "react";
import Synth from "/Users/marekpolgesek/Desktop/{coding, dev}/Frontend Projects/Portfolio/portfolio-website/src/Images/GayestSynth.png";
import "./Portfolio.css";
import "animate.css";
import NanseaScreenshot from "../Images/NanseaWebsite-screenshot.png";
import { motion } from "framer-motion";

const NanseaWebsite = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal), console.log("toggled");
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
      <main>
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
              <h3>Nansea </h3>
              <h4>Webdesign & Webdevelopment</h4>
            </figcaption>
          </figure>
        </div>
      </main>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <div></div>
              <a
                href="https://github.com/MarekPolges/NanseaHomepage"
                target="_blank"
              >
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={NanseaScreenshot}
                  style={{ maxWidth: "100%" }}
                  className="screenshot"
                ></motion.img>
              </a>
              <div className="project-details">
                <div className="description-text">
                  <h1>Nansea</h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    For my first <mark>React JS</mark> project, I’ve decided to
                    build myself an <mark>artist homepage.</mark> Starting from
                    scratch, using websites of some of my favourite artists’ as
                    inspo, I aimed at a clean and minimalist feel. I wanted to
                    wrap my artist portfolio in a calm and appealing design. The
                    biggest
                    <mark>challenge </mark> was the{" "}
                    <mark>responsive hamburger menu </mark>and its dropdown
                    behaviour. Overall, I believe I’ve achieved a smooth design
                    and user experience that's <mark> fully responsive.</mark>
                  </motion.p>{" "}
                  <br></br>
                </div>

                <div className="project-tech-list">
                  <p>
                    <strong>What I used for this project: </strong>
                  </p>
                  <ol>
                    <li>HTML & CSS</li>
                    <li>React JS</li>
                    <li>framer motion</li>
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
    </>
  );
};

export default NanseaWebsite;
