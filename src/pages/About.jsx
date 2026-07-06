import React from "react";
import styles from "../styles/AboutPage.module.css";
import drawing from "../assets/about-page-drawing.jpg";
import useLenisScroll from "../hooks/useLenisScroll";

export default function About() {
  useLenisScroll();

  return (
    <div className={styles.pageContainer}>
      <p className={styles.title}>About</p>
      <div className={styles.infoContainer}>
        <div className={styles.textColumn}>
          <div className={styles.textBlock}>
            <p className={styles.subtitle}>Who I am</p>
            <p>
              My name is Ignat, and I am a passionate web developer with a love
              for creating beautiful and functional websites. I have been
              working in the field for several years, and I have experience with
              a wide range of technologies and frameworks.
            </p>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.subtitle}>What I do</p>
            <p>
              I am always looking for new challenges and opportunities to learn
              and grow as a developer. If you are interested in working with me,
              please feel free to reach out to me through the contact page.
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
