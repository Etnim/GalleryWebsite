import React, { useRef, useMemo, useEffect } from "react";
import GridColumn from './GridColumn';
import styles from './WorksGallery.module.css';

const DRAG_PER_SEC = 0.95;
const normalizeWheel = e => (e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY);
const buildColumns = (cards, columns) => {
    const out = Array.from({ length: columns }, () => []);
    let start = 0, i = 0;
    while (i < cards.length) {
        for (let j = start; j < columns && i < cards.length; j++) out[j].push(cards[i++]);
        start = (start + 1) % columns;
    }
    return out;
};

export default function Gallery({listOfCards, columns = 4, columnSpeeds = [1, 3.5, 4, 5] }) {
    const galleryColumns = useMemo(() => buildColumns(listOfCards, columns), [listOfCards, columns]);
    const containerRef = useRef(null);
    const velocities = useRef(new Array(galleryColumns.length).fill(0));
    const rafId = useRef(null);
    const lastTime = useRef(0);

    useEffect(() => {
        velocities.current = new Array(galleryColumns.length).fill(0);
    }, [galleryColumns.length]);

    useEffect(() => () => cancelAnimationFrame(rafId.current), []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onWheel = (e) => {
            const delta = normalizeWheel(e);
            galleryColumns.forEach((_, i) => {
                velocities.current[i] += delta * (columnSpeeds[i] ?? 1);
            });
            if (!rafId.current) {
                lastTime.current = performance.now();
                rafId.current = requestAnimationFrame(animate);
            }
        };

        el.addEventListener('wheel', onWheel, { capture: true, passive: false });

        return () => {
            el.removeEventListener('wheel', onWheel, { capture: true });
        };
    }, [galleryColumns.length, columnSpeeds]);


    function animate(now) {
        const dt = Math.min((now - lastTime.current) / 1000, 0.05);
        lastTime.current = now;

        const cols = containerRef.current?.children ?? [];
        const decay = Math.pow(DRAG_PER_SEC, 60 * dt);
        let active = false;

        velocities.current = velocities.current.map((v, i) => {
            if (Math.abs(v) > 0.02) {
                active = true;
                cols[i].scrollTop += v * dt;
                return v * decay;
            }
            return 0;
        });

        rafId.current = active ? requestAnimationFrame(animate) : null;
    }

    return (
        <div className={styles.gallery} ref={containerRef}>
            {galleryColumns.map((cards, i) => (
                <GridColumn key={i} cards={cards} className={styles[`col${i}`]} />
            ))}
        </div>
    );
}