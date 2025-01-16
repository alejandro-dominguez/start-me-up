import { fetchUserAndPostsData } from '@/lib/fetchcalls';
import UserContainer from '@/containers/UserContainer';

export const experimental_ppr = true;

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const {
        user,
        posts
    } = await fetchUserAndPostsData(id)

    return (
        <div className='min-h-[100svh] bg-[#F9FAFC]'>
            <UserContainer
                id={id}
                user={user}
                posts={posts}
            />
        </div>
    )
};

export default UserPage;
