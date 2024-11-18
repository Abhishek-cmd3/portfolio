import React from "react";
import { motion } from "framer-motion";
import "../styles/Header.css";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
    >
      <motion.h1
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Abhishek's Portfolio
      </motion.h1>
      <nav>
        <motion.ul
          className="nav-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.2,
                color: "#ffdd57",
                transition: { type: "spring", stiffness: 150 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;
