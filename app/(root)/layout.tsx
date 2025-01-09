import Navbar from '@/components/layoutComponents/Navbar';
import Footer from '@/components/layoutComponents/Footer';

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
