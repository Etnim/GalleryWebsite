import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { getProjectDetailsById } from "../services/projects-data-service.js";
import DetailsGallery from "../components/DetailsGallery/DetailsGallery";
import styles from "../components/DetailsGallery/DetailsGallery.module.css";
import Footer from "../components/DetailsGallery/Footer.jsx";
import NotFound from "./NotFound.jsx";

const ProjectDetails = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const project = getProjectDetailsById(numericId);

   if (!project) {
    return <NotFound />;
  }

    console.log("Project details:", project);


  return (
    <div key={numericId} className={styles.detailsContainer}>
      <div className={styles.textContainer}>
        <p className={styles.title}>{project?.title}</p>
        <ul className={styles.projectInfoList}>
          <li>
            <p>Year: {project?.year}</p>
          </li>
          <li>
            <p>Type: {project?.type}</p>
          </li>
          <li>
            <p>Client: {project?.client}</p>
          </li>
          <li>
            <p>Role: {project?.role.join(", ")}</p>
          </li>
          <li>
            <p>Status: {project?.status}</p>
          </li>
        </ul>
      </div>
      <DetailsGallery id={numericId} />
      <Footer id={numericId} />
      <Outlet />
    </div>
  );
};

export default ProjectDetails;
