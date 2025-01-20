import FooterCopyright from '../footerComponents/FooterCopyright';
import FooterScrollTopBtn from '../footerComponents/FooterScrollTopBtn';
import FooterAdminBtn from '../footerComponents/FooterAdminBtn';

const Footer = () => {
    return (
        <div className='px-4 lg:px-10 2xl:px-24 py-[4.5rem] bg-primary-100 w-full relative flex
        items-center shadow-[inset_0_1.5px_4px_0_rgb(0_0_0_/0.045),inset_0_1.5px_3px_-1px_rgb(0_0_0_/0.045)]'>
            <FooterCopyright />
            <FooterScrollTopBtn />
            <FooterAdminBtn />
        </div>
    )
};

export default Footer;
