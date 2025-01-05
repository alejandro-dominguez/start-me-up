import {
    BadgePlus,
    LogOut
} from 'lucide-react';
import { Session } from 'next-auth';
import { signOut } from '@/auth';
import Link from 'next/link';

const NavUserUl = ({ session }: { session: Session }) => {
    return (
    <>
        <li>
            <Link
                href='/startup/create'
                className='flex items-center gap-[.3rem]'
            >
                <BadgePlus className='size-6' />
                <span className='font-medium tracking-[.01em] min-w-fit'>
                    Crear Artículo
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
                <button
                    type='submit'
                    className='flex items-center gap-1'
                >
                    <LogOut className='size-[1.38rem] text-red-600' />
                    <span className='font-medium tracking-[.01em]'>
                        Logout
                    </span>
                </button>
            </form>
        </li>
        <li className='bg-black rounded-full p-[.15rem]'>
            <Link href={`/user/${session?.id}`}>
                <img
                    className='size-10 rounded-full'
                    src={session?.user?.image || 'https://placehold.co/200x200.png'}
                    alt={session?.user?.name || 'imagen de usuario'}
                />
            </Link>
        </li>
    </>
    )
};

export default NavUserUl;
