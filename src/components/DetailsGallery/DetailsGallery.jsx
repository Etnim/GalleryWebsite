import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useLenisScroll from "../../hooks/useLenisScroll";
import scrollPageToTop from "../../hooks/scrollPageToTop";
import styles from "./DetailsGallery.module.css";
import { getProjectDetailsById } from "../../services/projects-data-service.js";

const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "gif", "svg"];
const VIDEO_EXTENSIONS = ["mp4", "webm", "mov"];
const TEXT_EXTENSIONS = ["txt", "md"];

function DetailsGallery({ id }) {
  const project = getProjectDetailsById(Number(id));

  useLenisScroll();
  scrollPageToTop();

  if (!project) {
    return <p>No project found</p>;
  }

  return (
    <section>
      <TemplateList template={project.template} projectTitle={project.title} />
    </section>
  );
}

function TemplateList({ template = [], projectTitle }) {
  if (!template.length) {
    return <p>No media</p>;
  }

  return (
    <ul className={styles.templateList}>
      {template.map((item, index) => (
        <li className={styles.templateItem} key={index}>
          <TemplateItem item={item} projectTitle={projectTitle} />
        </li>
      ))}
    </ul>
  );
}

function TemplateItem({ item, projectTitle }) {
  if (!item) return null;

  if (item.file) {
    return <MediaItem src={item.file} alt={projectTitle} />;
  }

  if (item.textSection) {
    return (
      <TextSection
        title={item.textSection.title}
        src={item.textSection.file}
      />
    );
  }

  if (item.array) {
    return <MediaGroup items={item.array} projectTitle={projectTitle} />;
  }

  return null;
}

function MediaGroup({ items, projectTitle }) {
  return (
    <ul className={styles.mediaGroup}>
      {items.map((item, index) => (
        <li className={styles.mediaGroupItem} key={index}>
          <TemplateItem item={item} projectTitle={projectTitle} />
        </li>
      ))}
    </ul>
  );
}

function MediaItem({ src, alt }) {
  if (!src) return null;

  if (isImage(src)) {
    return <img className={styles.mediaItem} src={src} alt={alt || ""} />;
  }

  if (isVideo(src)) {
    return (
      <video
        className={styles.mediaItem}
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
    return <EmbedVideo src={src} />;
  }

  return null;
}

function TextSection({ title, src }) {
  return (
    <section className={styles.textSection}>
      <p className={styles.textSectionTitle}>{title}</p>
      <TextFile src={src} />
    </section>
  );
}

function EmbedVideo({ src }) {
  const embedUrl = isWistia(src) ? getWistiaEmbedUrl(src) : src;

  return (
    <div className={styles.wistiaBox}>
      <iframe
        className={styles.mediaItem}
        src={getVideoEmbedUrl(embedUrl)}
        allow="autoplay; fullscreen"
        title="Project video"
      />
    </div>
  );
}

function TextFile({ src }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadTextFile() {
      try {
        const response = await fetch(src);
        const content = await response.text();

        if (isMounted) {
          setText(content);
        }
      } catch {
        if (isMounted) {
          setText("");
        }
      }
    }

    loadTextFile();

    return () => {
      isMounted = false;
    };
  }, [src]);

  return <div className={styles.textBlock}>{text}</div>;
}

function getVideoEmbedUrl(url) {
  const params = new URLSearchParams({
    autoPlay: "0",
    mute: "1",
    loop: "1",
    controlsVisibleOnLoad: "false",
    smallPlayButton: "false",
    bigPlayButton: "true",
    playbar: "false",
    videoFoam: "true",
  });

  return `${url}?${params.toString()}`;
}

function getWistiaEmbedUrl(src) {
  const wistiaId = src.split("/").pop();
  return `https://fast.wistia.net/embed/iframe/${wistiaId}`;
}

function getFileExtension(src) {
  const cleanSrc = src.split("?")[0].split("#")[0];
  return cleanSrc.split(".").pop().toLowerCase();
}

function isImage(src) {
  return IMAGE_EXTENSIONS.includes(getFileExtension(src));
}

function isVideo(src) {
  return VIDEO_EXTENSIONS.includes(getFileExtension(src));
}

function isText(src) {
  return TEXT_EXTENSIONS.includes(getFileExtension(src));
}

function isLink(src) {
  return src.startsWith("http://") || src.startsWith("https://");
}

function isWistia(src) {
  return src.includes("wistia.com") || src.includes("wistia.net");
}

DetailsGallery.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

TemplateList.propTypes = {
  template: PropTypes.array,
  projectTitle: PropTypes.string,
};

TemplateItem.propTypes = {
  item: PropTypes.shape({
    file: PropTypes.string,
    array: PropTypes.array,
    textSection: PropTypes.shape({
      title: PropTypes.string,
      file: PropTypes.string,
    }),
  }),
  projectTitle: PropTypes.string
};

TextSection.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

MediaGroup.propTypes = {
  items: PropTypes.array.isRequired,
  projectTitle: PropTypes.string,
};

MediaItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

EmbedVideo.propTypes = {
  src: PropTypes.string.isRequired,
};

TextFile.propTypes = {
  src: PropTypes.string.isRequired,
};

export default DetailsGallery;