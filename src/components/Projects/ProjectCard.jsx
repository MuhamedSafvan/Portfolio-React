import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({ project, onClick }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <div className={styles["card-container"]} onClick={onClick}>
      <div className={styles["image-container"]}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <div className={styles["card-content"]}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              {skill}
            </div>
          ))}
        </div>
        <div className={styles["card-buttons"]}>
          {demo && (
            <a href={demo} className={styles.button}>
              Demo
            </a>
          )}
          {source && (
            <a href={source} className={styles.button}>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;