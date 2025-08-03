import DesignPic from '../assets/TheBest.png'
import GridColumn from "./GridColumn";
import styles from "./GridColumn.module.css";

function Gallery() {
    //9 Cards
    const listOfCards = [
        {
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
        },
        {
            cardName: "Design 4",
            listOfTags: ["Tag1", "Tag2", "Tag3"],
            imageSrc: DesignPic
        },
        {
            cardName: "Design 5",
            listOfTags: ["Tag4", "Tag5"],
            imageSrc: DesignPic
        }, {
            cardName: "Design 6",
            listOfTags: ["Tag1", "Tag2", "Tag3"],
            imageSrc: DesignPic
        },
        {
            cardName: "Design 7",
            listOfTags: ["Tag4", "Tag5"],
            imageSrc: DesignPic
        }, {
            cardName: "Design 8",
            listOfTags: ["Tag1", "Tag2", "Tag3"],
            imageSrc: DesignPic
        },
        {
            cardName: "Design 9",
            listOfTags: ["Tag4", "Tag5"],
            imageSrc: DesignPic
        },
         {
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
        },
        {
            cardName: "Design 4",
            listOfTags: ["Tag1", "Tag2", "Tag3"],
            imageSrc: DesignPic
        },
        {
            cardName: "Design 5",
            listOfTags: ["Tag4", "Tag5"],
            imageSrc: DesignPic
        }, {
            cardName: "Design 6",
            listOfTags: ["Tag1", "Tag2", "Tag3"],
            imageSrc: DesignPic
        },
        {
            cardName: "Design 7",
            listOfTags: ["Tag4", "Tag5"],
            imageSrc: DesignPic
        }, {
            cardName: "Design 8",
            listOfTags: ["Tag1", "Tag2", "Tag3"],
            imageSrc: DesignPic
        },
        {
            cardName: "Design 9",
            listOfTags: ["Tag4", "Tag5"],
            imageSrc: DesignPic
        }
    ]

    function getRows(arraySize, columnsAmount) {
        const columnsAmountInitial = columnsAmount;
        let rows = 0;

        while (arraySize > 0) {
            arraySize -= columnsAmount;
            rows++;
            columnsAmount--;
            if (columnsAmount === 0) {
                columnsAmount = columnsAmountInitial;
            }
        }

        return rows;
    }

    // 2) fill a “triangular‐shifted” matrix row-by-row
    function fillMatrixFromArray(rows, columns, cards) {
        const matrix = Array.from({ length: rows }, () => Array(columns).fill(null));
        let cardIndex = 0;
        let columnStart = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = columnStart; j < columns; j++) {
                if (cardIndex < cards.length) {
                    matrix[i][j] = cards[cardIndex++];
                }
            }
            columnStart++;
            if (columnStart === columns) columnStart = 0;
        }

        return matrix;
    }

    function convertMatrixToGalleryColumns(matrix, columns, rows) {
        const galleryColumns = [];

        for (let col = 0; col < columns; col++) {
            const columnCards = [];
            for (let row = 0; row < rows; row++) {
                const card = matrix[row][col];
                if (card !== null) {
                    columnCards.push(card);
                }
            }
            galleryColumns.push(columnCards);
        }

        return galleryColumns;
    }

    const columnsAmount = 4;
    const rows = getRows(listOfCards.length, columnsAmount);
    const cardsMatrix = fillMatrixFromArray(rows, columnsAmount, listOfCards);
    const galleryColumns = convertMatrixToGalleryColumns(cardsMatrix, columnsAmount, rows);

    return (
        <div className="gallery">
            {galleryColumns.map((cards, idx) => (
                <GridColumn
                    key={idx}
                    className={styles[`col${idx}`]}
                    cards={cards}
                />
            ))}
        </div>
    );
}

export default Gallery;