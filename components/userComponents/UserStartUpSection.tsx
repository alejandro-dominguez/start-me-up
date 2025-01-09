import { Suspense } from 'react';
import { StartUpSchemaType } from '@/types';
import { auth } from '@/auth';
import UserStartUpCardSkeleton from './UserStartUpCardSkeleton';
import UserStartUpCard from '../cards/UserStartUpCard';

const UserStartUpSection = async (
{
    id,
    posts
}:{
    id: string,
    posts: StartUpSchemaType[]
}) => {
    const session = await auth()
    
    return (
        <div className='flex flex-col'>
            <p className='text-2xl font-bold text-black pl-2 lg:pl-0 tracking-[.01em] 
            text-center md:text-start mt-4 mb-3 md:mt-0'>
                {session?.id === id ? 'Tus' : 'Todas las'} Startups:
            </p>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <Suspense fallback={<UserStartUpCardSkeleton />}>
                    {
                        posts.length ?
                            posts.map((post: StartUpSchemaType) => {
                                return (
                                    <UserStartUpCard
                                        key={post._id}
                                        post={post}
                                    />
                                )
                            })
                        :
                            <p className='text-black-100 text-sm font-normal'>
                                Todavía no hay artículos
                            </p>
                    }
                </Suspense>
            </ul>
        </div>
    )
};

export default UserStartUpSection;
