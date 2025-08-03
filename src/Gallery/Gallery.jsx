import DesignPic from '../assets/TheBest.png'
import GridColumn from "./GridColumn";
import styles from "./GridColumn.module.css";
import React, { useRef, useEffect } from 'react';

export default function Gallery() {
    const listOfCards = [
        { cardName: "Design 1", listOfTags: ["Tag1", "Tag2", "Tag3"], imageSrc: DesignPic },
        { cardName: "Design 2", listOfTags: ["Tag4", "Tag5"], imageSrc: DesignPic },
        { cardName: "Design 3", listOfTags: ["Tag6", "Tag7", "Tag8"], imageSrc: DesignPic },
        { cardName: "Design 4", listOfTags: ["Tag1", "Tag2", "Tag3"], imageSrc: DesignPic },
        { cardName: "Design 5", listOfTags: ["Tag4", "Tag5"], imageSrc: DesignPic },
        { cardName: "Design 6", listOfTags: ["Tag1", "Tag2", "Tag3"], imageSrc: DesignPic },
        { cardName: "Design 7", listOfTags: ["Tag4", "Tag5"], imageSrc: DesignPic },
        { cardName: "Design 8", listOfTags: ["Tag6", "Tag7", "Tag8"], imageSrc: DesignPic },
        { cardName: "Design 9", listOfTags: ["Tag1", "Tag2", "Tag3"], imageSrc: DesignPic },
        { cardName: "Design 10", listOfTags: ["Tag4", "Tag5"], imageSrc: DesignPic },
        { cardName: "Design 11", listOfTags: ["Tag1", "Tag2", "Tag3"], imageSrc: DesignPic },
        { cardName: "Design 12", listOfTags: ["Tag4", "Tag5"], imageSrc: DesignPic },
        { cardName: "Design 13", listOfTags: ["Tag6", "Tag7", "Tag8"], imageSrc: DesignPic },
        { cardName: "Design 14", listOfTags: ["Tag1", "Tag2", "Tag3"], imageSrc: DesignPic },
        { cardName: "Design 15", listOfTags: ["Tag4", "Tag5"], imageSrc: DesignPic },
        { cardName: "Design 16", listOfTags: ["Tag1", "Tag2", "Tag3"], imageSrc: DesignPic },
        { cardName: "Design 17", listOfTags: ["Tag4", "Tag5"], imageSrc: DesignPic },
        { cardName: "Design 18", listOfTags: ["Tag6", "Tag7", "Tag8"], imageSrc: DesignPic },
        { cardName: "Design 19", listOfTags: ["Tag1", "Tag2", "Tag3"], imageSrc: DesignPic },
        { cardName: "Design 20", listOfTags: ["Tag4", "Tag5"], imageSrc: DesignPic }
    ];

    const columnsAmount = 4;

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

    const rows = getRows(listOfCards.length, columnsAmount);
    const cardsMatrix = fillMatrixFromArray(rows, columnsAmount, listOfCards);
    const galleryColumns = convertMatrixToGalleryColumns(cardsMatrix, columnsAmount, rows);

    const columnSpeeds = [0.05, 0.4, 0.6, 0.8]
    const containerRef = useRef(null);
    const velocities = useRef(new Array(galleryColumns.length).fill(0));
    const rafId = useRef(null);
    const lastTime = useRef(0);

    const handleWheelCapture = e => {
        e.preventDefault();
        const deltaY = e.deltaY;
        // Bump each column’s velocity
        galleryColumns.forEach((_, idx) => {
            velocities.current[idx] += deltaY * columnSpeeds[idx];
        });
        // Kick off the animate loop if not already running
        if (!rafId.current) {
            lastTime.current = performance.now();
            rafId.current = requestAnimationFrame(animate);
        }
    };

    // 2) The inertia loop
    function animate(now) {
        const dt = (now - lastTime.current) / 1000; // seconds
        lastTime.current = now;

        const cols = containerRef.current.children;
        let active = false;

        velocities.current.forEach((vel, idx) => {
            if (Math.abs(vel) > 0.1) {
                active = true;
                cols[idx].scrollTop += vel * dt;
                velocities.current[idx] *= 0.90;  // friction (tweak 0.90 → 0.85 for heavier slow-down)
            } else {
                velocities.current[idx] = 0;
            }
        });

        if (active) {
            rafId.current = requestAnimationFrame(animate);
        } else {
            rafId.current = null;
        }
    }

    return (
        <div className="gallery"
            ref={containerRef}
            onWheel={handleWheelCapture}
        >
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