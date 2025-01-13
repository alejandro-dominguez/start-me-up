import Navbar from '@/components/layoutComponents/Navbar';
import Footer from '@/components/layoutComponents/Footer';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
};

export default MainLayout;
