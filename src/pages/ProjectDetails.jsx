import { Outlet, useParams } from "react-router-dom";
import {getProjectById } from "../services/projects-data-servcie";

const ProjectDetails = () => {
    const {id} = useParams();
    const project = getProjectById(id);

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <Outlet />
        </div>
    )
}
export default ProjectDetails;