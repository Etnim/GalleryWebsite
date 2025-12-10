import WorksGallery from '../components/WorksGallery/WorksGallery.jsx';
import {getAllProjects} from '../services/projects-data-service.js';
import FooterGallery from '../components/WorksGallery/FooterGallery.jsx';

export default function Home() {
  return (
    <>
      <WorksGallery listOfCards={getAllProjects()} />
      <FooterGallery />
    </>
  );
} 