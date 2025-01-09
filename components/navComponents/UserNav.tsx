import { Session } from 'next-auth';
import NavLogo from './NavLogo';
import UserUl from './ulComponents/UserUl';

const UserNav = ({ session }: { session: Session }) => {
    return (
        <nav className='grid grid-rows-2 xs:flex xs:justify-between
        xs:items-center pt-3 pb-2 w-full xs:gap-7'>
            <NavLogo />
            <ul className='w-full justify-between xs:w-fit flex items-center text-black
            text-base gap-[.85rem] md:gap-5 -mt-[.1rem] xs:-mt-0'>
                <UserUl session={session} />
            </ul>
        </nav>
    )
};

export default UserNav;
