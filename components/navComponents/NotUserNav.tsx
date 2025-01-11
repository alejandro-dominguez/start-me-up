import NavLogo from './NavLogo';
import NotUserUl from './ulComponents/NotUserUl';

const NotUserNav = () => {
    return (
        <nav className='flex py-2 w-full relative h-[6.25rem] sm:h-16'>
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
