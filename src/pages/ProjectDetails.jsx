import { Outlet, useParams } from "react-router-dom";
import { getProjectById } from '../services/projects-data-service.js';
import DetailsGallery from "../components/DetailsGallery/DetailsGallery";
import styles from "../components/DetailsGallery/DetailsGallery.module.css";
import TagList from "../components/TagList/TagList.jsx";

const ProjectDetails = () => {
    const { id } = useParams();
    const numericId = Number(id);
    const project = getProjectById(numericId);

    return (
        <div className={styles.detailsContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{project?.title}</h1>
                <p className={styles.description}>{project?.description}</p>
                <TagList tags={project.listOfTags}/>
            </div>
            <DetailsGallery id={Number(id)} />
            <Outlet />
        </div>
    );
};

export default ProjectDetails;
