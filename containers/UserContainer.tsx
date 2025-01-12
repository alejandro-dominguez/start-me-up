import {
    AUTHOR_BY_ID_QUERY,
    STARTUPS_BY_AUTHOR_QUERY
} from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import UserCard from '@/components/userComponents/UserCard';
import UserStartUpSection from '@/components/userComponents/UserStartUpSection';
import UserPageSkeleton from '@/components/userComponents/UserPageSkeleton';

const UserContainer = async ({ id }: { id: string }) => {
    const [ user, posts ] = await Promise.all([
        client.fetch(AUTHOR_BY_ID_QUERY, { id }),
        client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })
    ])

    return (
        <Suspense fallback={<UserPageSkeleton />}>
            {
                user ?
                    <main className='flex flex-col md:flex-row px-4 lg:px-10'>
                        <UserCard user={user} />
                        <UserStartUpSection id={id} posts={posts} />
                    </main>
                :
                notFound()
            }
        </Suspense>
    )
};

export default UserContainer;
