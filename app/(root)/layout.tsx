import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
};

export default Layout;
