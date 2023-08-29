import { Link } from "react-router-dom";
import GmailIcon from "/Users/marekpolgesek/Desktop/{coding, dev}/Frontend Projects/Portfolio/portfolio-website/src/Images/Gmail.webp";
import LinkedIn from "/Users/marekpolgesek/Desktop/{coding, dev}/Frontend Projects/Portfolio/portfolio-website/src/Images/LinkedIn.png";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className="socials-icons">
      <a href="mailto:marekpolgo@gmail.com">
        <motion.div whileHover={{ scale: 1.25 }} className="GmailIcon">
          <img src={GmailIcon} width="30vh"></img>
        </motion.div>
      </a>

      <a href="https://www.linkedin.com/in/marek-polgesek/">
        <motion.div whileHover={{ scale: 1.25 }} className="LinkedInIcon">
          <img src={LinkedIn} width="30vh"></img>
        </motion.div>
      </a>
    </div>
  );
};

export default Socials;
