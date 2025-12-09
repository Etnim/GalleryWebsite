import PropTypes from 'prop-types'
import styles from "./DetailsGallery.module.css";
import {
    _getMediaFolderPath,
    getDetailsPageProjectDataById,
    getProjectDetailsPageMedia,
    _isImage,
    _isLink,
    _isVideo,
    _getMediaPath,
    _isWistia,
    _getWistiaEmbedUrl
} from '../../services/projects-data-service.js';

function DetailsGallery({ id }) {
    const project = getDetailsPageProjectDataById(id);
    const detailsMedia = getProjectDetailsPageMedia(id);
    const mediaFolder = _getMediaFolderPath(id);
    return (
        <div className={styles.mediaContainer}>
            {detailsMedia && detailsMedia.length > 0
                ? (
                    detailsMedia.map((mediaName, index) => {
                        if (!mediaName) return null;

                        const src = _getMediaPath(mediaFolder, mediaName);

                        if (_isImage(mediaName)) {
                            return (
                                <img
                                    className={styles.media}
                                    key={index}
                                    src={src}
                                    alt={project?.title || ''}
                                />
                            );
                        }

                        if (_isVideo(mediaName)) {
                            return (
                                <video
                                    className={styles.media}
                                    key={index}
                                    src={src}
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    playsInline={true}
                                    controls={false}
                                    preload={'none'}
                                />
                            );
                        }

                        if (_isLink(mediaName)) {
                            const url = _isWistia(mediaName) ? _getWistiaEmbedUrl(mediaName) : mediaName;
                            console.log({ url });

                            return (
                                <div className={styles.wistiaBox} key={index}>
                                    <iframe
                                        className={styles.media}
                                        key={index}
                                        src={url + "?autoPlay=1&mute=1&loop=true&&controlsVisibleOnLoad=0&smallPlayButton=false&bigPlayButton=true&fullscreenButton=false&playbar=false&videoFoam=true"}
                                        allow="autoplay; fullscreen"
                                    ></iframe>
                                </div>
                            );
                        }
                    }))
                : (<p>No media</p>)}
        </div>
    )
}

DetailsGallery.propTypes = {
    detailsMedia: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number
}

export default DetailsGallery;