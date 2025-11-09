import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import RootLayout from './layout/RootLayout.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/GalleryWebsite/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/GalleryWebsite/:id' element={<ProjectDetails />} />
        <Route path='/GalleryWebsite/about' element={<About />} />
        <Route path='/GalleryWebsite/contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
} 
