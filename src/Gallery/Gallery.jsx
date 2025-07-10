import DesignPic from '../assets/TheBest.png'
import GridColumn from "./GridColumn";
import styles from "./GridColumn.module.css";


function Gallery() {
    const listOfCards = [{
        cardName: "Design 1",
        listOfTags: ["Tag1", "Tag2", "Tag3"],
        imageSrc: DesignPic
    },
    {
        cardName: "Design 2",
        listOfTags: ["Tag4", "Tag5"],
        imageSrc: DesignPic
    },
    {
        cardName: "Design 3",
        listOfTags: ["Tag6", "Tag7", "Tag8"],
        imageSrc: DesignPic
    }]

    const columnsAmount = 4;

    const gallery = listOfCards.map(card =>
        Array(columnsAmount).fill(card)
    );

    const galleryColumns = Array.from({ length: columnsAmount }, (_, j) => (
        <GridColumn
            key={j}
            className={styles[`col${j}`]}
            cards={gallery.map(row => row[j])}
        />
    ));

    return (
        <div className="gallery"> {galleryColumns} </div>
    );
}

export default Gallery;