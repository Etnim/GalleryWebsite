import PropTypes from 'prop-types';
import TagList from '../TagList/TagList';
import styles from '../DesignCard/DesignCard.module.css';
import {Link} from "react-router-dom";

export default function DesignCard({
    cardName = 'Empty Name',
    listOfTags = [],
    media = { type: 'image', src: '' },
}) {
    return (
        <div className={styles.card}>
            <Link to={"/GalleryWebsite/projects/"}>
            {media.type === 'video' ? (
                <video
                    className={styles.media}
                    poster={media.poster || undefined}
                    autoPlay={!!media.autoPlay}
                    muted={!!media.muted}
                    loop={!!media.loop}
                    playsInline={media.playsInline !== false}
                    controls={!!media.controls}
                    preload={media.preload || 'metadata'}
                >
                    {media.src && <source src={media.src} />}
                    {media.sources?.map(s => <source key={s.src} src={s.src} type={s.type} />)}
                    Sorry, your browser doesn’t support embedded videos.
                </video>
            ) :
                media?.src && (
                    <img
                        className={styles.media}
                        src={media.src}
                        alt={media.alt || `Image of ${cardName}`}
                        loading="lazy"
                    />
                )
            }
            </Link>
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
        poster: PropTypes.string,
        src: PropTypes.string,
    }),
};