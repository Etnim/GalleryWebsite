import { Outlet, useParams } from "react-router-dom";
import { getDetailsPageProjectDataById } from '../services/projects-data-service.js';
import DetailsGallery from "../components/DetailsGallery/DetailsGallery";
import styles from "../components/DetailsGallery/DetailsGallery.module.css";
import TagList from "../components/TagList/TagList.jsx";
import Footer from "../components/DetailsGallery/Footer.jsx";

const ProjectDetails = () => {
    const { id } = useParams();
    const numericId = Number(id);
    const project = getDetailsPageProjectDataById(numericId);

    return (
        <div className={styles.detailsContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{project?.title}</h1>
                <p className={styles.description}>{project?.description}</p>
                <ul>
                    <li><b className={styles.descriptionDetails} > Year: </b> <b id={styles.descriptionYear}>{project?.year}</b> </li>
                    <li><b className={styles.descriptionDetails} > Client: </b> <b id={styles.descriptionClient}>{project?.client}</b> </li>
                </ul>
                <TagList tags={project.listOfTags}/>
            </div>
            <DetailsGallery id={numericId} />
            <Footer id={numericId}/>
            <Outlet />
        </div>
    );
};

export default ProjectDetails;
