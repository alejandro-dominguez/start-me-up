const SearchbarQueryText = ({ searchBarQuery }: { searchBarQuery?: string | '' }) => {
    return (
        <p className='font-semibold text-[1.35rem] mt-4 md:mt-[1.65rem] mb-3 md:mb-[1.32rem]
        flex flex-col md:flex-row items-center justify-between break-all'>
            <span className='flex flex-col md:flex-row xs:gap-1 mx-auto md:ml-0
            xs:items-baseline self-start leading-7 text-center'>
                <span className='mx-auto'>
                    Resultados para:
                </span>
                <span className='text-lg tracking-wide text-primary-200 mx-auto
                text-center xs:-mt-1'>
                    {` "${searchBarQuery}"`}
                </span>
            </span>
        </p>
    )
};

export default SearchbarQueryText;
