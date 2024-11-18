import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        className="contact-details"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        <p>
          Email:{" "}
          <a href="mailto:imabhishek2002soaknrd@gmail.com">
            imabhishek2002soaknrd@gmail.com
          </a>
        </p>
        <p>Mobile: 6202370680</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-8b1547333"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my LinkedIn
          </a>
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
