import DesignCard from "../DesignCard/DesignCard";
import PropTypes from 'prop-types';

function GridColumn({ cards }) {
    return (
        <div className="grid-column">
            {cards.map(card => (
                <DesignCard
                    key={card.cardName}
                    cardName={card.cardName}
                    listOfTags={card.listOfTags}
                    imageSrc={card.imageSrc}>
                </DesignCard>
            ))}
        </div>
    )
}

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
