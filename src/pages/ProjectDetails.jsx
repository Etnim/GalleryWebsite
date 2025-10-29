import { Outlet, useParams } from "react-router-dom";

const ProjectDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Project details page</h1>
            <Outlet />
        </div>
    )
}
export default ProjectDetails;