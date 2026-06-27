import React from "react";
import PropTypes from "prop-types";
import styles from "../DesignCard/DesignCard.module.css";

export default function DesignCard({
  title = "Title",
  subTitle = "SubTitle",
  cover = { type: "image", src: "" },
}) {
  return (
    <div className={styles.card}>
      {cover.type === "video" ? (
        <video
          className={styles.media}
          autoPlay={!!cover.autoPlay}
          muted={!!cover.muted}
          loop={!!cover.loop}
          playsInline={cover.playsInline !== false}
          controls={!!cover.controls}
          preload={cover.preload || "none"}
        >
          {cover.src && <source src={cover.src} />}
          Sorry, your browser doesn’t support embedded videos.
        </video>
      ) : (
        cover?.src && (
          <img
            className={styles.media}
            src={cover.src}
            alt={`Image of ${title}`}
            loading="lazy"
          />
        )
      )}
      <div className={styles.projectInfo}>
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}

DesignCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  cover: PropTypes.shape({
    type: PropTypes.oneOf(["image", "video"]).isRequired,
    src: PropTypes.string,
  }),
};
