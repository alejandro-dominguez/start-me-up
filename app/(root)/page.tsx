import {
    fetchPosts,
    fethTotalStartUpsQt
 } from '@/lib/fetchcalls';
import { SanityLive } from '@/sanity/lib/live';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { auth } from '@/auth';
import HeroSection from '@/components/homeComponents/HeroSection';
import Pagination from '@/components/homeComponents/Pagination';
import HomeStartUpsContainer from '@/containers/HomeStartupsContainer';
import StartUpCardSkeleton from '@/components/skeletonComponents/StartUpCardSkeleton';

const HomePage = async (
    {
        searchParams
    }:
    {
        searchParams:
            Promise<{
                query: string,
                page?: string
            }>
    }
) => {
    const searchBarQuery = (await searchParams).query
    const currentPage = parseInt((await searchParams).page || '1', 10)
    const session = await auth()
    const totalStartUpsQt = await fethTotalStartUpsQt()
    const totalPages = Math.ceil(totalStartUpsQt / 6)
    const postsData = await fetchPosts(searchBarQuery || undefined, currentPage, 6)
    const posts = Array.isArray(postsData) ? postsData : postsData.data

    return (
        <div className='min-h-[100svh] bg-[#F9FAFC]'>
            <HeroSection searchBarQuery={searchBarQuery} />
            <main className='pb-10 px-4 max-w-7xl mx-auto'>
                <Suspense fallback={<Skeleton className='bg-slate-400 animate-pulse'/>}>
                    {   
                        searchBarQuery ?
                            <p className='font-semibold text-[1.35rem] mt-4 md:mt-[1.65rem]
                            mb-3 md:mb-[1.32rem] flex flex-col md:flex-row items-center
                            justify-between break-all'>
                                <span className='flex flex-col md:flex-row xs:gap-1 
                                mx-auto md:ml-0 xs:items-baseline self-start
                                leading-7 text-center'>
                                    <span className='mx-auto'>
                                        Resultados para:
                                    </span>
                                    <span className='text-lg tracking-wide text-primary-200
                                    mx-auto text-center xs:-mt-1'>
                                        {` "${searchBarQuery}"`}
                                    </span>
                                </span>
                            </p>
                        :   
                            <p className='font-semibold text-[1.35rem] mt-[.85rem] md:mt-6 mb-3
                            md:mb-0 flex flex-col md:flex-row items-center justify-between'>
                                <span>
                                    Todas las Startups:
                                </span>
                                {
                                    session && session?.user ?
                                        null
                                    :
                                        <span className='text-[1.07rem] md:text-lg
                                        text-primary-200 drop-shadow-sm text-center
                                        px-8 xs:px-16 md:pl-0 md:pr-1 leading-[1.4rem]'>
                                            ¡Loguea fácilmente para sumar tus startups!
                                        </span>
                                }
                            </p>
                    }
                </Suspense>
                <ul
                    id='home-startups'
                    className='relative grid grid-cols-1 sm:grid-cols-2
                    lg:grid-cols-3 gap-8 lg:gap-10 mt-2 sm:mt-5'
                >
                    <Suspense fallback={<StartUpCardSkeleton />}>
                        <HomeStartUpsContainer posts={posts} />
                    </Suspense>
                </ul>
                <div className='flex justify-center mt-6'>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        searchBarQuery={searchBarQuery}
                    />
                </div>
            </main>
            <SanityLive />
        </div>
    )
};

export default HomePage;
