import { func } from "prop-types";
import { projects } from "../assets/data.json";

const assetsPath = '../assets/works';
const media = import.meta.glob('../assets/works/**/*.{png,jpg,jpeg,webp,avif,gif,svg,mp4,webm}', { eager: true, import: 'default' });

export function getAllProjects() {
    return projects.map(project => {
        return getProjectById(project.id);
    })
}

/**
 * @param {number} id 
 * @returns 
 */
export function getProjectById(id) {
    const mediaFolder = _getMediaFolderPath(id);
    const projectData = _getProjectData(id);

    return {
        'id': projectData.id,
        'title': projectData.title,
        'listOfTags': projectData.listOfTags,
        'cover': _getCover(mediaFolder, projectData),
        'description': projectData.description,
    };
}

/**
 * @param {number} id 
 * @returns
 */
export function _getMediaFolderPath(id) {
    return assetsPath + '/work' + id;
}

/**
 * @param {number} id 
 * @returns - json object for project
 */
function _getProjectData(id) {
    return projects.find(project => project.id === parseInt(id));
}

export function getProjectDetailsPageMedia(id) {
    const projectData = _getProjectData(id);
    return projectData.detailsMedia;
}

export function _isImage(mediaName) {
    return mediaName.endsWith("png" || "jpg" || "jpeg" || "webp" || "avif" || "gif" || "svg");
}

export function _isVideo(mediaName) {
    return mediaName.endsWith("mp4" || "webm");
}

export function _isLink(mediaName) {
    return mediaName.startsWith("http" || "www");
}

function _getCover(mediaFolder, projectData) {
    if (projectData.coverType === 'video') {
        return _getVideoElement(mediaFolder, projectData.coverPoster, projectData.coverVideo);
    }
    if (projectData.coverType === 'image') {
        return _getImageElement(mediaFolder, projectData.coverPoster);
    }
    return null;
}

function _getVideoElement(mediaFolder, posterFileName, videoFileName) {
    return {
        'type': 'video',
        'poster': _getMediaPath(mediaFolder, posterFileName),
        'src': _getMediaPath(mediaFolder, videoFileName),
        'autoPlay': true,
        'muted': true,
        'loop': true,
        'playsInline': true,
        'controls': false,
        'preload': 'metadata',
    }
}

export function _getImageElement(mediaFolder, posterFileName) {
    return {
        'type': 'image',
        'src': _getMediaPath(mediaFolder, posterFileName),
        'alt': null,
        'loading': 'lazy',
    }
}

export function _getMediaPath(mediaFolder, fileName) {
    const path = mediaFolder + '/' + fileName;
    return media[path] || null;
}
