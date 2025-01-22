const PaginationCurrentPage = (
    {
        currentPage,
        totalPages
    }:
    {
        currentPage: number,
        totalPages: number
    }
) => {
    return (
        <span className='flex gap-1 items-baseline'>
            <span className='font-semibold tracking-normal
            text-[.95rem] xs:text-base'>
                Pág.
            </span>
            <span className='font-bold tracking-wide text-base xs:text-lg'>
                {`${currentPage}/${totalPages}`}
            </span>
        </span>
    )
};

export default PaginationCurrentPage;
