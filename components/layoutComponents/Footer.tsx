'use client';
import {
    ArrowUpFromLine,
    Copyright
} from 'lucide-react';
import { scrollTop } from '@/lib/utils';

const Footer = () => {
    return (
        <div className='py-10 px-4 lg:px-10 bg-primary-100 w-full flex flex-col
        xs:flex-row items-start xs:items-center justify-between relative
        shadow-[inset_0_1.5px_4px_0_rgb(0_0_0_/0.045),inset_0_1.5px_3px_-1px_rgb(0_0_0_/0.045)]'>
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
                className='text-white bg-primary/95 p-[.35rem] rounded-md absolute top-[2.8rem]
                xs:top-9 right-1/2 translate-x-1/2 shadow-sm shadow-black/20 transition-colors
                ease-out hover:bg-primary-200/95 focus-within:bg-primary-200/95'
            >
                <ArrowUpFromLine
                    className='drop-shadow-sm'
                    size={35}
                    strokeWidth={2.15}
                />
            </button>
        </div>
    )
};

export default Footer;
