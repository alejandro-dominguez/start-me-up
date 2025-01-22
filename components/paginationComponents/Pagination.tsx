'use client';
import { scrollToElement } from '@/lib/utils';
import { StartUpSchemaType } from '@/types';
import { useRouter } from 'next/navigation';
import PaginationPrevBtn from './paginationBtnComponents/PaginationPrevBtn';
import PaginationCurrentPage from './paginationBtnComponents/PaginationCurrentPage';
import PaginationNextBtn from './paginationBtnComponents/PaginationNextBtn';
import PaginationFirstPageBtn from './paginationBtnComponents/PaginationFirstPageBtn';
import PaginationLastPageBtn from './paginationBtnComponents/PaginationLastPageBtn';

const Pagination = ({
    currentPage,
    totalPages,
    searchBarQuery,
    posts,
    isHome
}: {
    currentPage: number,
    totalPages: number,
    searchBarQuery?: string,
    posts: StartUpSchemaType[],
    isHome: boolean
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

    let switchPages: (buttonAction: string) => void = () => {};
    
    isHome ?
        switchPages = (buttonAction: string) => {
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
        }
    :
        switchPages = (buttonAction: string) => {
            switch (buttonAction) {
                case 'firstPage':
                    router.push(`/admin/?page=${firstPage}`, { scroll: false })
                    break
                case 'prevPage':
                    router.push(`/admin/?page=${prevPage}`, { scroll: false })
                    break
                case 'nextPage':
                    router.push(`/admin/?page=${nextPage}`, { scroll: false })
                    break
                case 'lastPage':
                    router.push(`/admin/?page=${lastPage}`, { scroll: false })
                    break
                default:
                    break
            }
            scrollToElement('admin-startups')
        }
    
    return (
        <>
        {
            posts.length ?
                <div className='grid place-items-center gap-[.85rem]'>
                    <div className='flex items-center gap-4'>
                        <PaginationPrevBtn
                            switchPages={switchPages}
                            prevPageCondition={prevPageCondition}
                        />
                        <PaginationCurrentPage
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                        <PaginationNextBtn
                            switchPages={switchPages}
                            nextPageCondition={nextPageCondition}
                        />
                    </div>
                    <div className='flex w-full items-start justify-between'>
                        <PaginationFirstPageBtn
                            switchPages={switchPages}
                            firstPageCondition={firstPageCondition}
                        />                
                        <PaginationLastPageBtn
                            switchPages={switchPages}
                            lastPageCondition={lastPageCondition}
                        />
                    </div>
                </div>
            :
                null
        }
        </>
    )
};

export default Pagination;
