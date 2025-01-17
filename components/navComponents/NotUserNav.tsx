import NavLogo from './NavLogo';
import NotUserUl from './ulComponents/NotUserUl';

const NotUserNav = () => {
    return (
        <nav className='px-4 lg:px-10 bg-[#F9FAFC] flex py-2 w-full relative
        h-[6.25rem] sm:h-16 shadow-[0_1.5px_4px_0_rgb(0_0_0_/0.06),0_1.5px_3px_-1px_rgb(0_0_0_/0.06)]'>
            <div className='absolute top-[.35rem] right-1/2 translate-x-1/2
            sm:right-auto sm:translate-x-0'>
                <NavLogo />
            </div>
            <ul className='mb-0 mt-12 mx-auto sm:ml-auto sm:mr-0 sm:mb-auto
            sm:mt-auto w-fit text-black text-base'>
                <NotUserUl />
            </ul>
        </nav>
    )
};

export default NotUserNav;
