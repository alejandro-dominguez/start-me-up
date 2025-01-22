import {
    fetchAdmin,
    fetchAdminPosts,
    fethTotalStartUpsQt
} from '@/lib/fetchcalls';
import { redirect } from 'next/navigation';
import { AdminUser } from '@/types';
import { auth } from '@/auth';
import AdminPageHero from '@/components/adminPageComponents/AdminPageHero';
import Pagination from '@/components/paginationComponents/Pagination';
import StartUpCardSkeleton from '@/components/skeletonComponents/StartUpCardSkeleton';
import { Suspense } from 'react';
import StartUpsContainer from '@/containers/StartupsContainer';

const AdminPage = async (
    {
        searchParams
    }:
    {
        searchParams:
            Promise<{
                page?: string
            }>
    }
) => {
    const { adminUser } = await fetchAdmin() as { adminUser: AdminUser }
    const loggedUser = await auth()
    const user = loggedUser ? loggedUser.user : null
    const currentPage = parseInt((await searchParams).page || '1', 10)
    const postsData = await fetchAdminPosts(currentPage, 6)
    const totalStartUpsData = await fethTotalStartUpsQt()
    const posts = Array.isArray(postsData) ? postsData : postsData.data
    const totalPages = Math.ceil((totalStartUpsData) / 6)

    if (user === null || user?.email !== adminUser.email) redirect('/')

    return (
        <div className='min-h-[100svh] bg-[#F9FAFC]'>
            <AdminPageHero />
            <main className='pb-10 px-4 max-w-7xl mx-auto min-h-[107svh] xs:min-h-[100svh]'>
                <p className='font-semibold text-[1.35rem] mt-[.85rem] md:mt-6 mb-3
                md:mb-0 flex flex-col md:flex-row items-center justify-between'>
                    <span>
                        Todas las Startups:
                    </span>
                </p>
                <ul
                    id='admin-startups'
                    className='relative grid grid-cols-1 sm:grid-cols-2
                    lg:grid-cols-3 gap-8 lg:gap-10 mt-2 sm:mt-5'
                >
                    <Suspense fallback={<StartUpCardSkeleton />}>
                        <StartUpsContainer
                            posts={posts}
                            isHome={false}
                        />
                    </Suspense>
                </ul>
                <div className='flex justify-center mt-6'>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        searchBarQuery={''}
                        posts={posts}
                        isHome={false}
                    />
                </div>
            </main>
        </div>
    )
};


export default AdminPage;
