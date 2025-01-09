import { auth } from '@/auth';
import UserNav from './navComponents/UserNav';
import NotUserNav from './navComponents/NotUserNav';

const Navbar = async () => {
    const session = await auth()
    
    return (
        <header className='px-3 md:px-4 lg:px-10 bg-slate-200/20 shadow-sm
        shadow-black/[17.5%] flex items-center'>
            {
                session && session?.user ?
                    <UserNav session={session} />
                :
                    <NotUserNav />
            }
        </header>
    )
};

export default Navbar;
