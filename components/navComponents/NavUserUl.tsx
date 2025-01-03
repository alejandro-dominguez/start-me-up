import { Session } from 'next-auth';
import { signOut } from '@/auth';
import { shortenUsername } from '@/lib/utils';
import Link from 'next/link';

const NavUserUl = ({ session }: { session: Session }) => {
    return (
    <>
        <li className='max-w-min sm:max-w-max'>
            <Link href='/startup/create'>
                <span>
                    Crear Artículo
                </span>
            </Link>
        </li>
        <li className='max-w-min'>
            <Link href={`/user/${session.user?.id}`}>
                <span>
                    {shortenUsername(session.user?.name)}
                </span>
            </Link>
        </li>
        <li>
            <form action={async () => {
                'use server'
                await signOut({
                    redirectTo: '/'
                })
            }}>
                <button type='submit'>
                    Logout
                </button>
            </form>
        </li>
    </>
    )
};

export default NavUserUl;
