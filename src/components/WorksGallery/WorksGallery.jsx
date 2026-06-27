import React, { useRef, useMemo, useEffect } from "react";
import GridColumn from './GridColumn';
import Lenis from 'lenis';
import styles from './WorksGallery.module.css';

const buildColumns = (cards, columns) => {
    const out = Array.from({ length: columns }, () => []);
    let start = 0, i = 0;

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

export default function Gallery({
    listOfCards,
    columns = 2,
}) {
    const galleryColumns = useMemo(() => buildColumns(listOfCards, columns), [listOfCards, columns]);
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.55,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.90,
            touchMultiplier: 1.4,
            smoothTouch: false,
            infinite: false,
        });

        let animationFrameId;

        function raf(time) {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        }

        animationFrameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, []);

    return (
        <> 
        {/* <p className={styles.title}>Featured projects</p> */}
        <div className={styles.gallery}>
            {galleryColumns.map((cards, i) => (
                <GridColumn key={i} cards={cards} idName={styles[`col${i}`]} />
            ))}
        </div>
        </>
    
    );
}