import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import UserCard from '@/components/userComponents/UserCard';
import UserStartUpsContainer from '@/containers/UserStartUpsContainer';
import UserStartUpCardSkeleton from '@/components/userComponents/UserStartUpCardSkeleton';

export const experimental_ppr = true;

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const session = await auth()
    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id })

    if (!user) return notFound()

    return (
        <div className='min-h-[100svh] bg-slate-100/30'>
            <main className=' pt-16 xs:pt-[4.5rem] mx-auto grid grid-cols-1 lg:grid-cols-2
            px-3 md:px-6 lg:px-10 lg:gap-5'>
                <UserCard user={user} />
                <div className='flex flex-col gap-5 mt-3 lg:mt-0'>
                    <p className='text-2xl font-bold text-black pl-2 lg:pl-0 tracking-[.01em]'>
                        {session?.id === id ? 'Your' : 'All'} Startups:
                    </p>
                    <ul className='grid sm:grid-cols-2 gap-5'>
                        <Suspense fallback={<UserStartUpCardSkeleton />}>
                            <UserStartUpsContainer id={id} />
                        </Suspense>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default UserPage;
