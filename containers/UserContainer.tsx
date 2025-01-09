import {
    AUTHOR_BY_ID_QUERY,
    STARTUPS_BY_AUTHOR_QUERY
} from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import UserCard from '@/components/userComponents/UserCard';
import UserStartUpSection from '@/components/userComponents/UserStartUpSection';

const UserContainer = async ({ id }: { id: string }) => {
    const [ user, posts ] = await Promise.all([
        client.fetch(AUTHOR_BY_ID_QUERY, { id }),
        client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })
    ])

    return (
        <>
        {
            user ?
                <main className='flex flex-col md:flex-row px-4 lg:px-10'>
                    <UserCard user={user} />
                    <UserStartUpSection id={id} posts={posts} />
                </main>
            :
                notFound()
        }
        </>
    )
};

export default UserContainer;
