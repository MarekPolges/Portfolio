import React, { useState } from "react";
import Synth from "/Users/marekpolgesek/Desktop/{coding, dev}/Frontend Projects/Portfolio/portfolio-website/src/Images/GayestSynth.png";
import "./Portfolio.css";
import "animate.css";
import NanseaScreenshot from "../Images/NanseaWebsite-screenshot.png";

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
      <main className="project-container">
        <div className="image-container">
          <figure>
            <img
              src={Synth}
              // onClick={toggleModal}
              className={`img${toggleClassCheck}`}
              onMouseOver={handleHover}
              style={{ maxWidth: "100%", opacity: ".5" }}
            ></img>
            <figcaption style={{ maxWidth: "100%", opacity: ".5" }}>
              <h3>coming up ...</h3>
              <h4>...</h4>
            </figcaption>
          </figure>
        </div>
      </main>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <div></div>
              <img src={NanseaScreenshot} className="screenshot"></img>
              <div className="project-description">
                <h1>Nansea</h1>
                <p>
                  For my first{" "}
                  <mark>
                    <b>React</b>
                  </mark>{" "}
                  project, I’ve decided to build myself an artist homepage. I’ve
                  started from scratch using websites of some of my favourite
                  artists’ as inspo. My aim was to stay as clean and minimalist
                  as possible, and wrap my artist portfolio in a calm and
                  appealing design that represents me. The biggest
                  <mark>challenge and priority</mark> was the{" "}
                  <mark>responsive hamburger menu and its dropdown</mark>.
                  Another feature I like is the slide-in of elements when
                  scrolling. In order to host this project, I had to dive into
                  the backend of developing. So I’ve acquired{" "}
                  <mark>basic knowledge of PHP and SQL</mark>. I think I’ve
                  achieved a smooth design and user experience that’s fully
                  responsive.
                </p>
                <p>Tech used: React, framer motion, PHP, SQL</p>
              </div>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NanseaWebsite;
