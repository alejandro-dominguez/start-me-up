import {
    fetchAdmin,
    fetchAdminPosts,
    fethTotalStartUpsQt
} from '@/lib/fetchcalls';
import { redirect } from 'next/navigation';
import { AdminUser } from '@/types';
import { auth } from '@/auth';
import AdminPageHero from '@/components/adminPageComponents/AdminPageHero';
import AdminContainer from '@/containers/AdminContainer';

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
        </div>
    )
};


export default AdminPage;
