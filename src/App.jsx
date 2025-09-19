import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Project from './pages/Project.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/GalleryWebsite/" element={<Home />} />
        <Route path="/GalleryWebsite/about/" element={<About />} />
        <Route path="/GalleryWebsite/contact/" element={<Contact />} />
        <Route path="/GalleryWebsite/projects/**" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
} 
