import DesignCard from "./DesignCard/DesignCard";
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from "react";
import styles from "./GridColumn.module.css";

const GridColumn = React.forwardRef(function GridColumn({ cards, className, onWheel }, ref) {

    return (
        <div
            ref={ref}
            onWheel={onWheel}
            className={[styles.gridColumn, className].join(' ')}>
            {cards.map(card => (
                <DesignCard
                    cardName={card.cardName}
                    listOfTags={card.listOfTags}
                    imageSrc={card.imageSrc}>
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
            imageSrc: PropTypes.string.isRequired
        })
    ).isRequired
};
