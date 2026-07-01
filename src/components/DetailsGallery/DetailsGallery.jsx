import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useLenisScroll from "../../hooks/useLenisScroll";
import scrollPageToTop from "../../hooks/scrollPageToTop";
import styles from "./DetailsGallery.module.css";
import { getProjectDetailsById } from "../../services/projects-data-service.js";

function DetailsGallery({ id }) {
  const project = getProjectDetailsById(Number(id));

  useLenisScroll();
  scrollPageToTop();

  if (!project) {
    return <p>No project found</p>;
  }

  const template = project.template || [];

  return (
    <div className={styles.mediaContainer}>
      {template.length > 0 ? (
        template.map((templateItem, index) => (
          <TemplateItem
            key={index}
            item={templateItem}
            projectTitle={project.title}
          />
        ))
      ) : (
        <p>No media</p>
      )}
    </div>
  );
}

function TemplateItem({ item, projectTitle }) {
  if (!item) return null;

  if (item.file) {
    return <MediaItem src={item.file} alt={projectTitle} />;
  }

  if (item.array) {
    return (
      <div className={styles.mediaGroup}>
        {item.array.map((nestedItem, index) => (
          <TemplateItem
            key={index}
            item={nestedItem}
            projectTitle={projectTitle}
          />
        ))}
      </div>
    );
  }

  return null;
}

function MediaItem({ src, alt }) {
  if (!src) return null;

  if (isImage(src)) {
    return <img className={styles.media} src={src} alt={alt || ""} />;
  }

  if (isVideo(src)) {
    return (
      <video
        className={styles.media}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="none"
      />
    );
  }

  if (isText(src)) {
    return <TextFile src={src} />;
  }

  if (isLink(src)) {
    const url = isWistia(src) ? getWistiaEmbedUrl(src) : src;

    return (
      <div className={styles.wistiaBox}>
        <iframe
          className={styles.media}
          src={
            url +
            "?autoPlay=0" +
            "&mute=1" +
            "&loop=1" +
            "&controlsVisibleOnLoad=false" +
            "&smallPlayButton=false" +
            "&bigPlayButton=true" +
            "&playbar=false" +
            "&videoFoam=true"
          }
          allow="autoplay; fullscreen"
          title="Project video"
        />
      </div>
    );
  }

  return null;
}

function TextFile({ src }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;

    fetch(src)
      .then((response) => response.text())
      .then((content) => {
        if (isMounted) {
          setText(content);
        }
      })
      .catch(() => {
        if (isMounted) {
          setText("");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [src]);

  return <div className={styles.textBlock}>{text}</div>;
}

function getFileExtension(src) {
  const cleanSrc = src.split("?")[0].split("#")[0];
  return cleanSrc.split(".").pop().toLowerCase();
}

function isImage(src) {
  return ["png", "jpg", "jpeg", "webp", "gif", "svg"].includes(
    getFileExtension(src),
  );
}

function isVideo(src) {
  return ["mp4", "webm", "mov"].includes(getFileExtension(src));
}

function isText(src) {
  return ["txt", "md"].includes(getFileExtension(src));
}

function isLink(src) {
  return src.startsWith("http://") || src.startsWith("https://");
}

function isWistia(src) {
  return src.includes("wistia.com") || src.includes("wistia.net");
}

function getWistiaEmbedUrl(src) {
  const wistiaId = src.split("/").pop();
  return `https://fast.wistia.net/embed/iframe/${wistiaId}`;
}

DetailsGallery.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

TemplateItem.propTypes = {
  item: PropTypes.shape({
    file: PropTypes.string,
    array: PropTypes.array,
  }),
  projectTitle: PropTypes.string,
};

MediaItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

TextFile.propTypes = {
  src: PropTypes.string.isRequired,
};

export default DetailsGallery;
