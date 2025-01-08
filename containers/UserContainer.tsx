import {
    AUTHOR_BY_ID_QUERY,
    STARTUPS_BY_AUTHOR_QUERY
} from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import { auth } from '@/auth';
import UserCard from '@/components/userComponents/UserCard';
import UserStartUpSection from '@/components/userComponents/UserStartUpSection';

const UserContainer = async ({ id }: { id: string }) => {
    const session = await auth()
    const [ user, posts ] = await Promise.all([
        client.fetch(AUTHOR_BY_ID_QUERY, { id }),
        client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })
    ])

    return (
        <>
        {
            user && session ?
                <main className='pt-16 xs:pt-[4.5rem] mx-auto grid grid-cols-1 lg:grid-cols-2
                px-3 md:px-6 lg:px-10 lg:gap-5'>
                    <UserCard user={user} />
                    <UserStartUpSection session={session} id={id} posts={posts} />
                </main>
            :
                notFound()
        }
        </>
    )
};

export default UserContainer;
