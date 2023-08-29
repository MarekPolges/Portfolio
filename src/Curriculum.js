import CurriculumVitae from "/Users/marekpolgesek/Desktop/{coding, dev}/Frontend Projects/Portfolio/portfolio-website/src/Documents/CV-PM.pdf";
import CVillustration from "/Users/marekpolgesek/Desktop/{coding, dev}/Frontend Projects/Portfolio/portfolio-website/src/Images/CVillustration.png";
const Curriculum = () => {
  return (
    <div className="curriculum">
      <a href={CurriculumVitae} download>
        <figure>
          <img src={CVillustration} width="10%"></img>
          <figcaption className="figcaption-download">
            <p className="download-link">&#x2192; download my CV </p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

export default Curriculum;
