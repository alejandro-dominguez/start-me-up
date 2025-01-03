import { signIn } from '@/auth';

const NavNotUserUl = () => {
    return (
        <li>
            <form action={async () => {
                'use server'
                await signIn('google')
            }}>
                <button type='submit'>
                    Login
                </button>
            </form>
        </li>
    )
};

export default NavNotUserUl;
