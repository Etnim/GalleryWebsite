import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";
import catGif from "../assets/cat.gif";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>404 - Page Not Found</p>
      <div className={styles.gifContainer}>
        <img src={catGif} alt="Cat GIF" />
      </div>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.notFoundLink}>
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
