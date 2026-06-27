import React from "react";
import PropTypes from "prop-types";
import GridColumn from "./GridColumn";
import styles from "./WorksGallery.module.css";
import useLenisScroll from "../../hooks/useLenisScroll";

const buildColumns = (cards, columns) => {
  const out = Array.from({ length: columns }, () => []);
  let start = 0,
    i = 0;

  while (i < cards.length) {
    for (let j = start; j < columns && i < cards.length; j++) {
      out[j].push(cards[i++]);
    }

    start = (start + 1) % columns;

    if (i % 4 === 0) {
      start++;
    }
  }

  return out;
};

function Gallery({ listOfCards, columns = 2 }) {
  const cards = listOfCards ?? [];
  console.log("[WorksGallery] render", {
    cardsCount: cards.length,
    columns,
  });

  const galleryColumns = buildColumns(cards, columns);

  useLenisScroll();

  return (
    <div className={styles.gallery}>
      {galleryColumns.map((cards, i) => (
        <GridColumn key={i} cards={cards} idName={styles[`col${i}`]} />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  listOfCards: PropTypes.array.isRequired,
  columns: PropTypes.number,
};

export default Gallery;
