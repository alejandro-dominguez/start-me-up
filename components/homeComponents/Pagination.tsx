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
        <div className='grid place-items-center gap-5'>
            <div className='flex gap-6 items-start justify-between'>
                <button
                    type='button'
                    onClick={() => switchPages('prevPage')}
                    className='disabled:bg-red-500 px-4 py-2 bg-gray-200 rounded
                    shadow hover:bg-gray-300'
                    disabled={prevPageCondition}
                >
                    Anterior
                </button>
                <span className='px-4 py-2 bg-gray-300 rounded shadow'>
                    {`${currentPage}/${totalPages}`}
                </span>
                <button
                    type='button'
                    onClick={() => switchPages('nextPage')}
                    className='disabled:bg-red-500 px-4 py-2 bg-gray-200 rounded
                    shadow hover:bg-gray-300'
                    disabled={nextPageCondition}
                >
                    Siguiente
                </button>
            </div>
            <div className='flex gap-6 items-start justify-between'>
                <button
                    type='button'
                    onClick={() => switchPages('firstPage')}
                    className='disabled:bg-red-500 px-4 py-2 bg-gray-200 rounded
                    shadow hover:bg-gray-300'
                    disabled={firstPageCondition}
                >
                    Primer página
                </button>                
                <button
                    type='button'
                    onClick={() => switchPages('lastPage')}
                    className='disabled:bg-red-500 px-4 py-2 bg-gray-200 rounded
                    shadow hover:bg-gray-300'
                    disabled={lastPageCondition}
                >
                    Última página
                </button>
            </div>
        </div>
    )
};

export default Pagination;
