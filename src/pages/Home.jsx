import WorksGallery from '../components/WorksGallery/WorksGallery.jsx';
import {getAllProjects} from '../services/projects-data-service.js';

export default function Home() {
  return (
    <>
      <WorksGallery listOfCards={getAllProjects()} />
    </>
  );
} 