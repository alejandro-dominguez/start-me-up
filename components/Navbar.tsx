import { auth } from '@/auth';
import NavLogo from './navComponents/NavLogo';
import NavUserUl from './navComponents/NavUserUl';
import NavNotUserUl from './navComponents/NavNotUserUl';

const Navbar = async () => {
    const session = await auth()
    
    return (
        <header className='px-3 md:px-4 lg:px-10 bg-white shadow-sm min-h-[4.5rem]
        md:min-h-16 flex items-center'>
            <nav className='flex justify-between items-center py-3 w-full gap-7'>
                <NavLogo />
                <ul className='flex items-center text-black text-[.95rem] md:text-base gap-4 md:gap-5'>
                    {
                        session && session?.user ? 
                            <NavUserUl session={session} />
                        :
                            <NavNotUserUl />
                    }
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;
