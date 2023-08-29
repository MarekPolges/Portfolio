import { motion } from "framer-motion";

const NavLinks = () => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className="NavigationItems">
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        // onClick={() => props.isMobile && props.closeMobileMenu()}
        className="NavigationLinks"
      >
        <a href="/">
          <h3>HOME</h3>
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className="NavigationLinks"
      >
        <a href="/about">
          <h3>ABOUT</h3>
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className="NavigationLinks"
      >
        <a href="/projects">
          <h3>PROJECTS</h3>
        </a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
