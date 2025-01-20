'use client';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SearchFormReset = (
    {
        setIsEmpty
    }:
    {
        setIsEmpty: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const router = useRouter()

    const resetForm = () => {
        const form = document.getElementById('search-form') as HTMLFormElement
        if (form) form.reset()
        setIsEmpty(true)
        router.push('/')
    }

    return (
        <button
            type='reset'
            onClick={resetForm}
            className='rounded-full bg-secondary-100 grid place-items-center
            size-9 text-black shadow-sm shadow-black/20 mr-[.1rem] transition-all
            duration-200 ease-out hover:bg-secondary-200 hover:shadow-black/30'
        >
            <X className='size-6 drop-shadow' />
        </button>
    )
};

export default SearchFormReset;
