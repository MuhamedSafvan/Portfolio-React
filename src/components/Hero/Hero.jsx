import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Safvan</h1>
        <p className={styles.description}>
        Full Stack Software Developer with around 4 years 
        of experience. Specializing in Flutter for front-end and Node.js 
        for backend. Proven problem-solving skills and a track record of 
        ownership in startup environments. Seeking new challenges in a 
        growth-oriented professional setting !!
        </p>
        <a href="mailto:safumanoor66@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profileImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
