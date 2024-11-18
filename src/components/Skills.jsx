import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js','Tailwind CSS','BootStrap','SQL' , 'Git/Github'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <motion.ul className="skill-list">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
