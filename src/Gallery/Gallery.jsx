import DesignPic from '../assets/TheBest.png'
import GridColumn from "./GridColumn";


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

    return (
        <>
            <GridColumn cards={listOfCards}></GridColumn>
            <GridColumn cards={listOfCards}></GridColumn>
            <GridColumn cards={listOfCards}></GridColumn>
        </>
    );
}

export default Gallery;