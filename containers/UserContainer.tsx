import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { StartUpSchemaType } from '@/types';
import UserCard from '@/components/userComponents/UserCard';
import UserStartUpSection from '@/components/userComponents/UserStartUpSection';
import UserPageSkeleton from '@/components/skeletonComponents/UserPageSkeleton';

const UserContainer = (
    {
        id,
        user,
        posts
    }:
    {
        id: string,
        user: 
        {
            name: string,
            email: string,
            image: string,
            emailShown: boolean
        },
        posts: StartUpSchemaType[]
    }
) => {
    return (
        <Suspense fallback={<UserPageSkeleton />}>
            {
                user ?
                    <main className='flex flex-col md:flex-row px-4 lg:px-10'>
                        <UserCard
                            user={user}
                            id={id}
                        />
                        <UserStartUpSection
                            id={id}
                            posts={posts}
                        />
                    </main>
                :
                notFound()
            }
        </Suspense>
    )
};

export default UserContainer;
