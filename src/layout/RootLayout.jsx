import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop.jsx';

const RootLayout = () => {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Outlet />
        </div>
    );
}

export default RootLayout;