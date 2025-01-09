'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import SearchFormReset from './SearchFormReset';

const SearchFormInput = ({ searchBarQuery }: { searchBarQuery?: string | '' }) => {
    const [ isEmpty, setIsEmpty ] = useState<boolean>(true)

    return (
        <>
        <input
            name='query'
            defaultValue={searchBarQuery}
            className='font-bold placeholder:font-semibold w-full h-auto pr-3
            outline-none flex-1 md:ml-3 placeholder:text-[#6d737b]'
            placeholder='Busca Startups'
            onInput={() => setIsEmpty(false)}
            required
            maxLength={20}
        />
        <div className='flex gap-2'>
            {
                searchBarQuery ?
                    <SearchFormReset />
                :
                    null
            }
            <button
                type='submit'
                className='rounded-full bg-secondary-100 grid place-items-center
                size-9 text-black shadow-sm shadow-black/20 md:mr-3 transition-all
                duration-200 ease-out hover:bg-secondary-200 hover:shadow-black/30'
                disabled={isEmpty}
            >
                <Search className='size-6 drop-shadow'/>
            </button>
        </div>
        </>
    )
};

export default SearchFormInput;
