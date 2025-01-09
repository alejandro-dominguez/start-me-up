import NavLogo from './NavLogo';
import NotUserUl from './ulComponents/NotUserUl';

const NotUserNav = () => {
    return (
        <nav className='grid grid-rows-2 xs:flex xs:justify-between
        xs:items-center pt-3 xs:pt-[.8rem] pb-[.85rem] xs:pb-[.55rem] w-full xs:gap-7'>
            <NavLogo />
            <ul className='w-full justify-between xs:w-fit flex items-center text-black
            text-base gap-[.85rem] md:gap-5'>
                <NotUserUl />
            </ul>
        </nav>
    )
};

export default NotUserNav;
