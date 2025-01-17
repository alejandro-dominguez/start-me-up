import { scrollTop } from '@/lib/utils';
import { ArrowUpFromLine } from 'lucide-react';

const FooterScrollTopBtn = () => {
    return (
        <button
            type='button'
            onClick={() => scrollTop()}
            className='text-white bg-primary/95 p-[.35rem] rounded-lg absolute -mt-[.1rem]
            right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 shadow-sm shadow-black/20
            transition-colors ease-out hover:bg-primary-200/95 focus-within:bg-primary-200/95'
        >
            <ArrowUpFromLine
                className='drop-shadow-sm'
                size={30}
                strokeWidth={2.5}
            />
        </button>
    )
};

export default FooterScrollTopBtn;
