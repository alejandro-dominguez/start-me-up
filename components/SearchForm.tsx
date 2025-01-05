'use client';
import Form from 'next/form';
import SearchFormInput from './searchFormComponents/SearchFormInput';

const SearchForm = ({ query }: { query?: string | '' }) => {
    return (
        <Form
            action='/'
            scroll={false}
            id='search-form'
            className='max-w-2xl w-full bg-white border-[5px] border-black gap-5
            rounded-[80px] text-xl mt-4 py-2 px-4 flex flex-row items-center'
        >
            <SearchFormInput query={query} />
        </Form>
    )
};

export default SearchForm;
