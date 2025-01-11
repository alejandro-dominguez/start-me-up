import { signIn } from '@/auth';
import { LogIn } from 'lucide-react';

const NotUserUl = () => {
    return (
        <>
            <li className='mx-auto'>
                <form action={async () => {
                    'use server'
                    await signIn('google')
                }}>
                    <button
                        type='submit'
                        className='flex items-center gap-1'
                    >
                        <LogIn className='size-[1.38rem] text-primary-300' />
                        <span className='font-medium tracking-[.01em]'>
                            Login
                        </span>
                    </button>
                </form>
            </li>
        </>
    )
};

export default NotUserUl;
