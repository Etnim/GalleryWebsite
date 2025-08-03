import PropTypes from 'prop-types';
import TagList from './TagList';
import styles from './DesignCard.module.css';

export default function DesignCard({
    cardName = 'Empty Name',
    listOfTags = [],
    media = { type: 'image', src: '' },
}) {
    const {
        type = 'image',
        src,
        alt,
        poster,
        sources = [],
        ...videoProps
    } = media || {};

    const defaultVideoProps = { controls: true, playsInline: true, preload: 'metadata' };


    return (
        <div className={styles.card}>
            {type === 'video' ? (
                <video
                    className={styles.media}
                    poster={poster}
                    {...defaultVideoProps}
                    {...videoProps}
                >
                    {sources.length > 0
                        ? sources.map(s => (
                            <source key={s.src} src={s.src} type={s.type} />
                        ))
                        : src
                            ? <source src={src} />
                            : null}
                    Sorry, your browser doesn’t support embedded videos.
                </video>
            ) : (
                src && (
                    <img
                        className={styles.media}
                        src={src}
                        alt={alt || `Image of ${cardName}`}
                        loading="lazy"
                    />
                )
            )}

            <h2 className={styles.cardTitle}>{cardName}</h2>
            <TagList tags={listOfTags} />
        </div>
    );
}

DesignCard.propTypes = {
    cardName: PropTypes.string,
    listOfTags: PropTypes.arrayOf(PropTypes.string),
    media: PropTypes.shape({
        type: PropTypes.oneOf(['image', 'video']).isRequired,
        src: PropTypes.string,
        alt: PropTypes.string,
        poster: PropTypes.string,
        sources: PropTypes.arrayOf(
            PropTypes.shape({ src: PropTypes.string.isRequired, type: PropTypes.string })
        ),
    }),
};