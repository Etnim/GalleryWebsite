import PropTypes from 'prop-types';
import TagList from './TagList';
import styles from './DesignCard.module.css';
import videoAttributes from '../../content/default-attributes/video.json';
import imageAttributes from '../../content/default-attributes/image.json';

export default function DesignCard({
    cardName = 'Empty Name',
    listOfTags = [],
    media = { type: 'image'},
}) {
    return (
        <div className={styles.card}>
            {media.type === 'video' ? (
                <video
                    className={styles.media}
                    poster={videoAttributes.poster || media.poster}
                    autoPlay={videoAttributes.autoPlay || media.autoPlay}
                    muted={videoAttributes.muted || media.muted}
                    loop={videoAttributes.loop || media.loop}
                    playsInline={videoAttributes.playsInline || media.playsInline}
                    controls={videoAttributes.controls || media.controls}
                    preload={videoAttributes.preload || media.preload}
                >
                    {media.src && <source src={videoAttributes.src || media.src} />}
                    {media.sources?.map(s => <source key={s.src} src={s.src} type={s.type} />)}
                    Sorry, your browser doesn’t support embedded videos.
                </video>
            ) :
                media?.src && (
                    <img
                        className={styles.media}
                        src={imageAttributes.src || media.src}
                        alt={imageAttributes.src || media.alt}
                        loading={imageAttributes.loading || media.loading || 'lazy'}
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
    media: PropTypes.shape({
        type: PropTypes.oneOf(['image', 'video']).isRequired,
        src: PropTypes.string,
    }),
};