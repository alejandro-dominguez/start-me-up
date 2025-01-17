import { redirect } from 'next/navigation';
import { fetchAdmin } from '@/lib/fetchcalls';
import AdminContainer from '@/containers/AdminContainer';

const AdminPage = async () => {
    const adminUser = await fetchAdmin() 
    
    if (!adminUser) redirect('/')

    return (
        <div className='min-h-[100svh] bg-[#F9FAFC]'>
            <AdminContainer />
        </div>
    )
};


export default AdminPage;
