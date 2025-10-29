import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default RootLayout;