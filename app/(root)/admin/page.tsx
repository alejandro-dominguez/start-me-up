import {
    fetchAdmin,
    fetchAllPosts,
    fethTotalStartUpsQt
} from '@/lib/fetchcalls';
import { redirect } from 'next/navigation';
import { AdminUser } from '@/types';
import { auth } from '@/auth';
import AdminContainer from '@/containers/AdminContainer';

const AdminPage = async () => {
    const { adminUser } = await fetchAdmin() as unknown as { adminUser: AdminUser }
    const loggedUser = await auth()
    const user = loggedUser ? loggedUser.user : null
    const postsData = await fetchAllPosts()
    const totalStartUpsData = await fethTotalStartUpsQt()

    if (user === null || user?.email !== adminUser.email) redirect('/')

    return (
        <div className='min-h-[100svh] bg-[#F9FAFC]'>
            <AdminContainer />
        </div>
    )
};


export default AdminPage;
