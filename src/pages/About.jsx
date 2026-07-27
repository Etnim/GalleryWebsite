import React from "react";
import styles from "../styles/AboutPage.module.css";
import drawing from "../assets/Cover.png";
import useLenisScroll from "../hooks/useLenisScroll";

export default function About() {
  useLenisScroll();

  return (
    <div className={styles.pageContainer}>
      <p className={styles.title}>About</p>
      <div className={styles.infoContainer}>
        <div className={styles.textColumn}>
          <div className={styles.textBlock}>
            <p className={styles.subtitle}>Background</p>
            <p>
              Hi, I’m Ignat - designer based in Vilnius.
4 years as a graphic designer, specializing in visual identities. Attained Bachelor and Master of Art degrees in the design field. Additionally, I practice designing mobile and web applications.
            </p>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.subtitle}>Specialization</p>
            <p>
              My current specialty is developing intuitive and clean user interfaces across mobile and web applications. Previous experience of working with graphics makes me a versatile soldier, capable of adapting to any project.
            </p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <img src={drawing} className={styles.aboutPageDrawing} />
        </div>
      </div>
    </div>
  );
}
