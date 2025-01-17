import { auth } from '@/auth';
import UserNav from '../navComponents/UserNav';
import NotUserNav from '../navComponents/NotUserNav';

const Navbar = async () => {
    const session = await auth()

    return (
        <header className='flex items-center'>
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
