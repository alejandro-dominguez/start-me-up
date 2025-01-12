'use client';
import {
    ArrowUpFromLine,
    Copyright
} from 'lucide-react';
import { scrollTop } from '@/lib/utils';

const Footer = () => {
    return (
        <div className='py-5 px-4 lg:px-10 bg-[#F9FAFC] w-full flex flex-col xs:flex-row
        items-start xs:items-center justify-between relative z-0'>
            <small className='flex flex-col items-start'>
                <span className='flex items-center gap-1'>
                    <Copyright size={15} />
                    2025
                </span>
                <span className='hidden xs:block'>
                    Alejandro Dminguez
                </span>
                <span className='mt-[.05rem] flex flex-col items-center xs:hidden'>
                    Alejandro
                    <span className='-mt-1'>
                        Dminguez
                    </span>
                </span>
            </small>
            <button
                type='button'
                onClick={() => scrollTop()}
            >
                <ArrowUpFromLine
                    className='absolute top-[1.95rem] xs:top-5 right-1/2 translate-x-1/2'
                    size={35}
                    strokeWidth={2.45}
                />
            </button>
        </div>
    )
};

export default Footer;
