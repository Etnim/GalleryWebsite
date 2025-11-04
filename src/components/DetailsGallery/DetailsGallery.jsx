import PropTypes from 'prop-types'
import styles from "./DetailsGallery.module.css";
import {
    _getMediaFolderPath,
    getProjectById,
    getProjectDetailsPageMedia,
    _isImage,
    _isLink,
    _isVideo,
    _getMediaPath,
} from '../../services/projects-data-service.js';

function DetailsGallery({ id }) {
    const project = getProjectById(id);
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
                                />
                            );
                        }

                        if (_isLink(mediaName)) {
                            return (
                                <video
                                    className={styles.media}
                                    key={index}
                                    src={mediaName}
                                />
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