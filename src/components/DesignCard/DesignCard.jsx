import PropTypes from 'prop-types';
import TagList from '../TagList/TagList';
import styles from '../DesignCard/DesignCard.module.css';

export default function DesignCard({
    cardName = 'Empty Name',
    listOfTags = [],
    cover = { type: 'image', src: '' },
}) {
    return (
        <div className={styles.card}>
                {cover.type === 'video' ? (
                    <video
                        className={styles.media}
                        poster={cover.poster || undefined}
                        autoPlay={!!cover.autoPlay}
                        muted={!!cover.muted}
                        loop={!!cover.loop}
                        playsInline={cover.playsInline !== false}
                        controls={!!cover.controls}
                        preload={cover.preload || 'metadata'}
                    >
                        {cover.src && <source src={cover.src} />}
                        {cover.sources?.map(s => <source key={s.src} src={s.src} type={s.type} />)}
                        Sorry, your browser doesn’t support embedded videos.
                    </video>
                ) :
                    cover?.src && (
                        <img
                            className={styles.media}
                            src={cover.src}
                            alt={cover.alt || `Image of ${cardName}`}
                            loading="lazy"
                        />
                    )
                }
                <h2 className={styles.cardTitle}>{cardName}</h2>
                <TagList tags={listOfTags} />
        </div>
    );
}

DesignCard.propTypes = {
    cardName: PropTypes.string,
    listOfTags: PropTypes.arrayOf(PropTypes.string),
    cover: PropTypes.shape({
        type: PropTypes.oneOf(['image', 'video']).isRequired,
        src: PropTypes.string,
    }),
};