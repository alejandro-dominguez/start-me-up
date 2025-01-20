import { Search } from 'lucide-react';

const SearchFormBtn = ({isEmpty}: {isEmpty: boolean}) => {
    return (
        <button
            type='submit'
            className='rounded-full bg-secondary-100 grid place-items-center
            size-9 text-black shadow-sm shadow-black/20 md:mr-3 transition-all
            duration-200 ease-out hover:bg-secondary-200 hover:shadow-black/30'
            disabled={isEmpty}
        >
            <Search className='size-6 drop-shadow'/>
        </button>
    )
};

export default SearchFormBtn;
