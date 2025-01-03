'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import SearchFormReset from './SearchFormReset';

const SearchFormInput = ({ query }: { query?: string }) => {
    const [ isEmpty, setIsEmpty ] = useState<boolean>(true)

    return (
        <>
        <input
            name='query'
            defaultValue={query}
            className='flex-1 font-bold placeholder:font-semibold placeholder:text-black-100
            w-full h-auto outline-none'
            placeholder='Search Startups'
            onInput={() => setIsEmpty(false)}
            required
        />
        <div className='flex gap-2'>
            {
                query ?
                    <SearchFormReset />
                :
                    null
            }
            <button
                type='submit'
                className='rounded-full bg-secondary-100 grid place-items-center
                size-9 text-black shadow-sm shadow-black/30'
                disabled={isEmpty}
            >
                <Search className='size-6 drop-shadow'/>
            </button>
        </div>
        </>
    )
};

export default SearchFormInput;
