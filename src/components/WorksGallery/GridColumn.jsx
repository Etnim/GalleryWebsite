import PropTypes from "prop-types";
import React from "react";
import styles from "./WorksGallery.module.css";
import DesignCard from "../DesignCard/DesignCard";
import { Link } from "react-router-dom";

const GridColumn = React.forwardRef(function GridColumn(
  { cards, idName },
  ref,
) {
  return (
    <div ref={ref} className={styles.gridColumn} id={idName}>
      {cards.map((card, idx) => (
        <Link key={card.id} to={card.id.toString()} className={styles.link}>
          <DesignCard
            key={card.id ?? `${card.title}-${idx}`}
            title={card.title}
            subTitle={card.subTitle}
            cover={card.cover}
          />
        </Link>
      ))}
    </div>
  );
});

export default GridColumn;

GridColumn.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      cover: PropTypes.shape({
        type: PropTypes.oneOf(["image", "video"]).isRequired,
        src: PropTypes.string,
      }).isRequired,
    }),
  ).isRequired,
  idName: PropTypes.string,
};
