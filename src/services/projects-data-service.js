const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "gif", "svg"];
const VIDEO_EXTENSIONS = ["mp4", "webm", "mov"];
const TEXT_EXTENSIONS = ["txt", "md"];

// This imports all files inside src/assets/projects as URLs
const projectAssetsFilePaths = import.meta.glob("../assets/projects/**/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const projectDataModules = import.meta.glob(
  "../assets/projects/project-*/projectData.js",
  { eager: true },
);

export function getWorksAmount() {
  return Object.values(projectDataModules).length;
}

export function getProjectDetailsById(id) {
  const projectDataModule = Object.values(projectDataModules).find(
    (module) => module.projectDetails.id === id,
  );

  if (!projectDataModule) {
    return null;
  }

  return _mapToProjectDetails(projectDataModule.projectDetails);
}

export function getAllProjects() {
  return Object.values(projectDataModules)
    .map((module) => _mapToProject(module.projectDetails))
    .sort((a, b) => a.id - b.id);
}

export function _mapToProjectDetails(projectData) {
  return {
    id: projectData.id,
    title: projectData.title,
    year: projectData.year,
    type: projectData.type,
    client: projectData.client,
    role: projectData.role,
    status: projectData.status,
    template: projectData.template.map((item) =>
      _mapTemplateItem(projectData.id, item),
    ),
  };
}

export function _mapToProject(projectData) {
  return {
    id: projectData.id,
    title: projectData.title,
    subTitle: projectData.subTitle,
    cover: {
      type: _getCoverType(projectData.coverFileName),
      src: _getFilePath(projectData.id, projectData.coverFileName),
    },
  };
}

function _getFilePath(projectId, fileName) {
  const folder = _getFolderByFileExtension(fileName);

  const assetPath = `../assets/projects/project-${projectId}/${folder}/${fileName}`;

  const fileUrl = projectAssetsFilePaths[assetPath];

  if (!fileUrl) {
    throw new Error(`Asset not found: ${assetPath}`);
  }

  return fileUrl;
}

function _getFolderByFileExtension(fileName) {
  const extension = _getFileExtension(fileName);

  if (IMAGE_EXTENSIONS.includes(extension)) {
    return "images";
  }

  if (VIDEO_EXTENSIONS.includes(extension)) {
    return "videos";
  }

  if (TEXT_EXTENSIONS.includes(extension)) {
    return "texts";
  }

  throw new Error(`Unsupported file extension: ${extension}`);
}

function _getCoverType(coverFileName) {
  const extension = _getFileExtension(coverFileName);

  if (IMAGE_EXTENSIONS.includes(extension)) {
    return "image";
  }

  if (VIDEO_EXTENSIONS.includes(extension)) {
    return "video";
  }

  throw new Error(`Unsupported cover extension: ${extension}`);
}

function _getFileExtension(fileName) {
  return fileName.split(".").pop().toLowerCase();
}

function _mapTemplateItem(projectId, item) {
  if (item.file) {
    return {
      file: _getFilePath(projectId, item.file),
    };
  }

  if (item.textSection) {
    return {
      textSection: {
        title: item.textSection.title,
        file: _getFilePath(projectId, item.textSection.file),
      },
    };
  }

  if (item.array) {
    return {
      array: item.array.map((nestedItem) =>
        _mapTemplateItem(projectId, nestedItem),
      ),
    };
  }

  return item;
}
