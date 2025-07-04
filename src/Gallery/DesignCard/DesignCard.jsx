import TagList from "./TagList";
import styles from "./DesignCard.module.css";

function DesignCard({cardName="Empty Name", listOfTags, imageSrc}) {
    const alternativeText = "Card Image";
    return (
        <div className={styles.card}>
            <img className={styles.card-image} src={imageSrc} alt={alternativeText}></img>
            <h2 className={styles.card-title}>{cardName}</h2>
            <TagList tags={listOfTags}></TagList>
        </div>
    );
}

export default DesignCard;