import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import projects from "../../data/projects.json";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleDismiss = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      {selectedProject && (
        <div className={styles.dismissibleContainer}>
          <div className={styles.dismissibleContent}>
            <button className={styles.dismissButton} onClick={handleDismiss}>
              &times;
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={() => handleCardClick(project)} />
        ))}
      </div>
    </div>
  );
};

