import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout: React.FC = () => {
    const noNavbarFooterRoutes = ['/login', '/register'];
    const pathname = window.location.pathname;
    const shouldDisplayNavbarFooter = !noNavbarFooterRoutes.includes(pathname);

    return (
        <>
            {shouldDisplayNavbarFooter && <Navbar />}
            <Outlet />
            {shouldDisplayNavbarFooter && <Footer />}
        </>
    );
};

export default MainLayout;