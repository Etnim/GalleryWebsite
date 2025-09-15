import PropTypes from 'prop-types';
import React, { useRef, useEffect } from "react";
import styles from "./Gallery.module.css";
import DesignCard from "../DesignCard/DesignCard";

const GridColumn = React.forwardRef(function GridColumn({ cards, className}, ref) {

    return (
        <div
            ref={ref}
            className={[styles.gridColumn, className].join(' ')}>
            {cards.map((card, idx) => (
                <DesignCard
                    key={card.id ?? `${card.cardName}-${idx}`}
                    cardName={card.cardName}
                    listOfTags={card.listOfTags}
                    media={card.media}>
                </DesignCard>
            ))}
        </div>
    )
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
