import MelodyGenerator from "./Portfolio-Items/MelodyGenerator";
import NanseaWebsite from "./Portfolio-Items/NanseaWebsite";
import Tbd1 from "./Portfolio-Items/tbd1";
import Tbd2 from "./Portfolio-Items/tbd2";
import "animate.css";

const Projects = () => {
  return (
    <>
      <div>
        <div className="overlay">
          <div className="projects-container">
            <div className="project-item">
              <NanseaWebsite />
            </div>
            <div className="project-item">
              <MelodyGenerator />
            </div>
            <div className="project-item">
              <Tbd1 />
            </div>
            <div className="project-item">
              <Tbd2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
