import {
    BadgePlus,
    LogOut
} from 'lucide-react';
import { signOut } from '@/auth';
import { Session } from 'next-auth';
import Link from 'next/link';
import React from 'react'
import CustomImg from '@/components/imgComponents/CustomImg';

const UserUl = ({ session }: { session: Session }) => {
    return (
        <>
            <li>
                <Link
                    href='/startup/create'
                    className='flex items-center gap-[.3rem]'
                >
                    <BadgePlus className='size-6 text-primary-300' />
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
                        <LogOut className='size-[1.38rem] text-primary-300' />
                        <span className='font-medium tracking-[.01em]'>
                            Logout
                        </span>
                    </button>
                </form>
            </li>
            <Link
                href={`/user/${session?.id}`}
                className='bg-primary-300/75 rounded-full drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]'
            >
                <li className='m-[.19rem] sm:m-1'>
                    <CustomImg
                        twClassName='size-[2.2rem] sm:size-10 rounded-full brightness-110
                        contrast-[1.1] saturate-[1.25]'
                        url={session?.user?.image || 'https://placehold.co/40x40.png'}
                        alt={`imagen de avatar de ${session?.user?.name}` || 'imagen de avatar del usuario'}
                        width={40}
                        height={40}
                        placeholderUrl='https://placehold.co/40x40.png'
                    />
                </li>
            </Link>
        </>
    )
};
export default UserUl;
