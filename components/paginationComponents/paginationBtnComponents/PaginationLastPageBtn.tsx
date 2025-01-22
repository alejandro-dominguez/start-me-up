const PaginationLastPageBtn = (
    {
        switchPages,
        lastPageCondition
    }:
    {
        switchPages: (buttonAction: string) => void,
        lastPageCondition: boolean
    }
) => {
    return (
        <button
            type='button'
            onClick={() => switchPages('lastPage')}
            className='px-4 xs:px-5 py-[.4rem] bg-slate-300/80 rounded-full
            text-black/90 shadow-sm shadow-black/15 transition-colors
            ease-out hover:bg-slate-400 focus-within:bg-slate-400
            disabled:bg-slate-300/45 disabled:shadow-black/10
            disabled:text-black/60'
            disabled={lastPageCondition}
        >
            <span className='font-semibold text-[.925rem] tracking-[0.015em]'>
                Última pág.
            </span>
        </button>
    )
};

export default PaginationLastPageBtn;
