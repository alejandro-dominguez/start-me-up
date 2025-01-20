import { Session } from 'next-auth';
import NavLogo from './NavLogo';
import UserUl from './ulComponents/UserUl';

const UserNav = ({ session }: { session: Session }) => {
    return (
        <nav className='px-4 lg:px-10 2xl:px-24 bg-[#F9FAFC] flex py-2 w-full relative
        h-[6.25rem] sm:h-16 shadow-[0_2px_4px_0_rgb(0_0_0_/0.06),0_2px_3px_-1px_rgb(0_0_0_/0.06)]'>
            <div className='absolute top-[.35rem] right-1/2 translate-x-1/2
            sm:right-auto sm:translate-x-0'>
                <NavLogo />
            </div>
            <ul className='mt-10 sm:mt-0 mx-auto sm:ml-auto sm:mr-0 w-full gap-[.85rem]
            md:gap-5 justify-between xs:w-fit flex items-center text-black text-base'>
                <UserUl session={session} />
            </ul>
        </nav>
    )
};

export default UserNav;
