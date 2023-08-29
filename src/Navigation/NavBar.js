import NavLinks from "./NavLinks.js";
import "./navbar.css";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const animateFrom = { opacity: 0, y: -30 };
  const animateTo = { opacity: 1, y: 0 };

  const openIcon = (
    <TiThMenuOutline
      className="hamburger-icon"
      size="35px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <IoMdClose
      className="hamburger-icon"
      size="40px"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <>
      <motion.nav
        initial={animateFrom}
        animate={animateTo}
        className="MobileNavigation"
        transition={{ delay: 0.2 }}
      >
        {open ? closeIcon : openIcon}
        {open && <NavLinks />}
      </motion.nav>
    </>
  );
};

export default NavBar;
