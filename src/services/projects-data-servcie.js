import { projects } from "../assets/data.json";

const assetsPath = '../assets/works';
const media = import.meta.glob('../assets/works/**/*.{png,jpg,jpeg,webp,avif,gif,svg,mp4,webm}', { eager: true, import: 'default'});

export function getAllProjects() {
    return projects.map(project => {
       return getProjectById(project.id);
    })
}

export function getProjectById(id) {
    const mediaFolder = _getMediaFolderPath(id);
    const projectData = _getProjectData(id);

    return {
        'title': projectData.title,
        'listOfTags': projectData.listOfTags,
        'cover': _getCover(mediaFolder, projectData),
        'description': projectData.description,
        'detailsMediaPath': _getDetailsMediaPath(mediaFolder, projectData),
    };
}

function _getDetailsMediaPath(mediaFolder, projectData) {
    return projectData.detailsMediaPath.map(mediaFileName => {
        const mediaPath = mediaFolder + '/' + mediaFileName;
        return media[mediaPath] || null;
    });
}

function _getCover(mediaFolder, projectData) {
    if (projectData.coverType === 'video') {
        return _getMediaVideo(mediaFolder, projectData);
    }
    if (projectData.coverType === 'image') {
        return _getMediaImage(mediaFolder, projectData);
    }
    return null;
}

function _getMediaVideo(mediaFolder, projectData) {
    return {
        'type': projectData.coverType,
        'poster': _getCoverImage(mediaFolder, projectData),
        'src': _getCoverVideo(mediaFolder, projectData),
        'autoPlay': true,
        'muted': true,
        'loop': true,
        'playsInline': true,
        'controls': false,
        'preload': 'metadata',
    }
}       

function _getMediaImage(mediaFolder, projectData){
    return {
        'type': projectData.coverType,
        'src': _getCoverImage(mediaFolder, projectData),
        'alt': projectData.altText || null,
        'loading': 'lazy',
    }
}


function _getMediaFolderPath(id) {
    return assetsPath +'/work' + id;
}

function _getProjectData(id) {
    return projects.find(project => project.id === id);
}

function _getCoverImage(mediaFolder, projectData) {
    const coverPath = mediaFolder + '/' + projectData.coverPoster;
    return media[coverPath] || null; 
}

function _getCoverVideo(mediaFolder, projectData) {
    const coverVideoPath =  mediaFolder + '/' + projectData.coverVideo;
    return media[coverVideoPath] || null;
}
