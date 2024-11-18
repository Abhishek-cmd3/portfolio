import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    { title: 'Portfolio Website', description: 'React-based portfolio.', link: '#' },
    { title: 'Employee Management', description: 'React-based system', link: '#' },
    { title: 'Myntra Clone', description: 'Using Html ,Css & Js', link: '#' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
