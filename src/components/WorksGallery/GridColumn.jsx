import PropTypes from 'prop-types';
import React, { useRef, useEffect } from "react";
import styles from "./WorksGallery.module.css";
import DesignCard from "../DesignCard/DesignCard";

const GridColumn = React.forwardRef(function GridColumn({ cards, className }, ref) {
    return (
        <div
            ref={ref}
            className={[styles.gridColumn, className].join(' ')}>
            {cards.map((card, idx) => (
                <DesignCard
                    key={card.id ?? `${card.title}-${idx}`}
                    cardName={card.title}
                    listOfTags={card.listOfTags}
                    cover={card.cover}>
                </DesignCard>
            ))}
        </div>
    );
}
)

export default GridColumn;
GridColumn.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            cardName: PropTypes.string.isRequired,
            listOfTags: PropTypes.arrayOf(PropTypes.string).isRequired,
            media: PropTypes.string.isRequired
        })
    ).isRequired
};
