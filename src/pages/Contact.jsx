import React from "react";
import styles from "../styles/ContactPage.module.css";
import linkedIn from "/LinkedInicon.png";
import gmail from "/GmailIcon.png";

export default function Contact() {
  return (
    <div className={styles.pageContainer}>
      <p className={styles.title}>Contact</p>
      <p id={styles.name}>Ignat Voronovich</p>
      <p>Vilnius, Lithuania</p>
      <ul className={styles.contactIcons}>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hol1.visualcraft@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/holygraphics/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} className={styles.icon}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
