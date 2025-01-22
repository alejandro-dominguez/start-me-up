'use client';
import { useState } from 'react';
import SearchFormReset from './searchFormBtnComponents/SearchFormReset';
import SearchFormBtn from './searchFormBtnComponents/SearchFormBtn';

const SearchFormInput = ({ searchBarQuery }: { searchBarQuery?: string | '' }) => {
    const [ isEmpty, setIsEmpty ] = useState<boolean>(true)

    return (
        <>
        <input
            name='query'
            defaultValue={searchBarQuery}
            className='font-bold placeholder:font-semibold w-full h-auto px-3 mr-3 xs:mr-4
            outline-none flex-1 md:ml-3 placeholder:text-[#6d737b] rounded-xl'
            placeholder='Busca una Startup'
            onInput={() => setIsEmpty(false)}
            required
            maxLength={20}
        />
        <div className='flex gap-2'>
            {
                searchBarQuery ?
                    <SearchFormReset setIsEmpty={setIsEmpty} />
                :
                    null
            }
            <SearchFormBtn isEmpty={isEmpty} />
        </div>
        </>
    )
};

export default SearchFormInput;
