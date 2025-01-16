'use client';
import { scrollToElement } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const Pagination = ({
    currentPage,
    totalPages,
    searchBarQuery
}: {
    currentPage: number,
    totalPages: number,
    searchBarQuery?: string
}) => {
    const router = useRouter()
    const firstPage = 1
    const nextPage = currentPage + 1
    const prevPage = currentPage - 1
    const lastPage = totalPages

    const firstPageCondition = currentPage === firstPage
    const prevPageCondition = currentPage === firstPage
    const nextPageCondition = currentPage === totalPages
    const lastPageCondition = currentPage === totalPages

    const switchPages = (buttonAction: string) => {
        switch (buttonAction) {
            case 'firstPage':
                router.push(`/?query=${searchBarQuery || ''}&page=${firstPage}`, { scroll: false })
                break
            case 'prevPage':
                router.push(`/?query=${searchBarQuery || ''}&page=${prevPage}`, { scroll: false })
                break
            case 'nextPage':
                router.push(`/?query=${searchBarQuery || ''}&page=${nextPage}`, { scroll: false })
                break
            case 'lastPage':
                router.push(`/?query=${searchBarQuery || ''}&page=${lastPage}`, { scroll: false })
                break
            default:
                break
        }
        scrollToElement('home-startups')
    };

    return (
        <div className='grid place-items-center gap-[.85rem]'>
            <div className='flex items-center gap-4'>
                <button
                    type='button'
                    onClick={() => switchPages('prevPage')}
                    className='px-4 xs:px-5 py-[.4rem] bg-slate-300/80 rounded-full text-black/90
                    shadow-sm shadow-black/15 transition-colors ease-out hover:bg-slate-400
                    focus-within:bg-slate-400 disabled:bg-slate-300/45
                    disabled:shadow-black/10 disabled:text-black/60'
                    disabled={prevPageCondition}
                >
                    <span className='font-semibold text-[.925rem] tracking-[0.015em]'>
                        Anterior
                    </span>
                </button>
                <span className='flex gap-1 items-baseline'>
                    <span className='font-semibold tracking-normal text-[.95rem] xs:text-base'>
                        Pág.
                    </span>
                    <span className='font-bold tracking-wide text-base xs:text-lg'>
                        {`${currentPage}/${totalPages}`}
                    </span>
                </span>
                <button
                    type='button'
                    onClick={() => switchPages('nextPage')}
                    className='px-4 xs:px-5 py-[.4rem] bg-slate-300/80 rounded-full text-black/90
                    shadow-sm shadow-black/15 transition-colors hover:bg-slate-300
                    ease-out focus-within:bg-slate-300 disabled:bg-slate-300/45
                    disabled:shadow-black/10 disabled:text-black/60'
                    disabled={nextPageCondition}
                >
                    <span className='font-semibold text-[.925rem] tracking-[0.015em]'>
                        Siguiente
                    </span>
                </button>
            </div>
            <div className='flex w-full items-start justify-between'>
                <button
                    type='button'
                    onClick={() => switchPages('firstPage')}
                    className='px-4 xs:px-5 py-[.4rem] bg-slate-300/80 rounded-full text-black/90
                    shadow-sm shadow-black/15 transition-colors hover:bg-slate-300
                    ease-out focus-within:bg-slate-300 disabled:bg-slate-300/45
                    disabled:shadow-black/10 disabled:text-black/60'
                    disabled={firstPageCondition}
                >
                    <span className='font-semibold text-[.925rem] tracking-[0.015em]'>
                        Primer pág.
                    </span>
                </button>                
                <button
                    type='button'
                    onClick={() => switchPages('lastPage')}
                    className='px-4 xs:px-5 py-[.4rem] bg-slate-300/80 rounded-full text-black/90
                    shadow-sm shadow-black/15 transition-colors hover:bg-slate-300
                    ease-out focus-within:bg-slate-300 disabled:bg-slate-300/45
                    disabled:shadow-black/10 disabled:text-black/60'
                    disabled={lastPageCondition}
                >
                    <span className='font-semibold text-[.925rem] tracking-[0.015em]'>
                        Última pág.
                    </span>
                </button>
            </div>
        </div>
    )
};

export default Pagination;
