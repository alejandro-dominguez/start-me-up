import { auth } from '@/auth';
import UserNav from '../navComponents/UserNav';
import NotUserNav from '../navComponents/NotUserNav';

const Navbar = async () => {
    const session = await auth()
    
    return (
        <header className='px-4 lg:px-10 flex bg-slate-200/20
        items-center shadow-[0_1px_5px_0_rgb(0,0,0,0.2)] z-20'>
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
