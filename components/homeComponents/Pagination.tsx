'use client';
import { scrollToElement } from '@/lib/utils';
import Link from 'next/link';

const Pagination = (
    {
        currentPage,
        totalPages,
        searchBarQuery
    }: {
        currentPage: number,
        totalPages: number,
        searchBarQuery?: string,
    }
) => {
    const nextPage = currentPage < totalPages ? currentPage + 1 : null
    const prevPage = currentPage > 2 ? currentPage - 1 : null

    return (
        <div className='flex gap-4'>
            {
                currentPage > 1 &&
                    <Link
                        href={`/?query=${searchBarQuery || ''}&page=1`}
                        onClick={() => scrollToElement('home-startups')}
                        scroll={false}
                        className='px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300'
                    >
                        Primer página
                    </Link>
            }
            {
                prevPage &&
                    <Link
                        href={`/?query=${searchBarQuery || ''}&page=${prevPage}`}
                        onClick={() => scrollToElement('home-startups')}
                        scroll={false}
                        className='px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300'
                    >
                        Anterior
                    </Link>
            }
            <span className='px-4 py-2 bg-gray-300 rounded shadow'>
                {`Página ${currentPage}`}
            </span>
            {
                nextPage &&
                    <Link
                        href={`/?query=${searchBarQuery || ''}&page=${nextPage}`}
                        onClick={() => scrollToElement('home-startups')}
                        scroll={false}
                        className='px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300'
                    >
                        Siguiente
                    </Link>
            }
            {
                currentPage < totalPages &&
                    <Link
                        href={`/?query=${searchBarQuery || ''}&page=${totalPages}`}
                        onClick={() => scrollToElement('home-startups')}
                        className='px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300'
                    >
                        Última página
                    </Link>
            }
        </div>
    )
};

export default Pagination;
