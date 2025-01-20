import { UserRoundCog } from 'lucide-react';
import { fetchAdmin } from '@/lib/fetchcalls';
import { auth } from '@/auth';
import { AdminUser } from '@/types';
import Link from 'next/link';

const FooterAdminBtn = async () => {
    const { adminUser } = await fetchAdmin() as unknown as { adminUser: AdminUser }
    const loggedUser = await auth()
    const user = loggedUser ? loggedUser.user : null

    return (
        <>
        {
            user === null || user?.email !== adminUser.email ?
                null
            :
                <Link
                    href={adminUser ? '/admin' : '/'}
                    className='relative w-full -mt-[1.4rem] top-1/2 -translate-y-1/2'
                >
                    <UserRoundCog
                        size={22}
                        strokeWidth={2.45}
                        className='absolute right-[4.2rem] lg:right-[5.62rem]'
                    />
                    <span className='absolute right-4 lg:right-10 font-medium
                    text-[.9rem] top-[.3731rem] lg:top-[.34525rem]'>
                        Admin.
                    </span>
                </Link>
        }
        </>
    )
};

export default FooterAdminBtn;
