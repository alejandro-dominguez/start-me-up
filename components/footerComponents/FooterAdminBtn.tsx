import { UserRoundCog } from 'lucide-react';
import Link from 'next/link';

const FooterAdminBtn = () => {
    return (
        <Link
            href={'/admin'}
            className='relative w-full -mt-[1.4rem] top-1/2 -translate-y-1/2'>
            <UserRoundCog
                size={22}
                strokeWidth={2.45}
                className='absolute right-[4.2rem] lg:right-[5.62rem]'
            />
            <span className='absolute right-4 lg:right-10 font-medium text-[.9rem] top-[.3731rem] lg:top-[.34525rem]'>
                Admin.
            </span>
        </Link>
    )
};

export default FooterAdminBtn;
