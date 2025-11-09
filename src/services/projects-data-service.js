import { projects } from "../assets/data.json";

const assetsPath = '../assets/works';
const media = import.meta.glob('../assets/works/**/*.{png,jpg,jpeg,webp,avif,gif,svg,mp4,webm}', { eager: true, import: 'default' });

const projectsById = new Map(
  projects.map((project) => [
    Number(project.id),
    project])
);

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
    const projectData = projectsById.get(Number(id));

    if (!projectData) return null;

    return {
        'id': projectData.id,
        'title': projectData.title,
        'listOfTags': projectData.listOfTags,
        'cover': _getCover(mediaFolder, projectData),
    };
}

/**
 * @param {number} id 
 * @returns
 */
export function _getMediaFolderPath(id) {
    const base = import.meta.env.BASE_URL;
    //TODO add src when locally
   return assetsPath + '/work' + id;

}

/**
 * @param {number} id 
 * @returns - json object for project
 */
function _getProjectData(id) {
    return projectsById.get(Number(id)) || null;
}

export function getProjectDetailsPageMedia(id) {
  const projectData = _getProjectData(id);
  return (projectData.detailsMedia || []).filter(Boolean);
}

export function _isImage(name = '') {
  return /\.(png|jpe?g|webp|avif|gif|svg)$/i.test(name);
}

export function _isVideo(name = '') {
  return /\.(mp4|webm)$/i.test(name);
}

export function _isLink(name = '') {
  return /^https?:\/\//i.test(name) || /^www\./i.test(name);
}

function _getCover(mediaFolder, projectData) {
    if (projectData.coverType === 'video') {
        return _getVideoElement(mediaFolder, projectData.coverVideo);
    }
    if (projectData.coverType === 'image') {
        return _getImageElement(mediaFolder, projectData.coverPoster);
    }
    return null;
}

function _getVideoElement(mediaFolder, videoFileName) {
    return {
        'type': 'video',
        'src': _getMediaPath(mediaFolder, videoFileName),
        'autoPlay': true,
        'muted': true,
        'loop': true,
        'playsInline': true,
        'controls': false,
        'preload': 'none',
    }
}

export function _getImageElement(mediaFolder, posterFileName) {
    return {
        'type': 'image',
        'src': _getMediaPath(mediaFolder, posterFileName),
    }
}

export function _getMediaPath(mediaFolder, fileName) {
   const path = mediaFolder + '/' + fileName;
   return media[path] || null;
}
