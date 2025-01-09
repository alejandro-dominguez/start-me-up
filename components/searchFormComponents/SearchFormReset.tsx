'use client';
import { X } from 'lucide-react';
import Link from 'next/link';

const SearchFormReset = () => {
    const resetForm = () => {
        const form = document.getElementById('search-form') as HTMLFormElement
        if (form) form.reset()
    }

    return (
        <button
            type='reset'
            onClick={resetForm}
        >
            <Link
                href='/'
                className='rounded-full bg-secondary-100 grid place-items-center
                size-9 text-black shadow-sm shadow-black/30 mr-[.1rem] transition-all
                duration-200 ease-out hover:bg-secondary-200 hover:shadow-black/35'
            >
                <X className='size-6 drop-shadow' />
            </Link>
        </button>
    )
};

export default SearchFormReset;
