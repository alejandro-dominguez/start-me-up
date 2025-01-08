import { Suspense } from 'react';
import { StartUpSchemaType } from '@/types';
import UserStartUpCardSkeleton from './UserStartUpCardSkeleton';
import UserStartUpCard from '../cards/UserStartUpCard';
import { auth } from '@/auth';

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
        <div className='flex flex-col gap-5 mt-4 lg:mt-0'>
            <p className='text-2xl font-bold text-black pl-2 lg:pl-0 tracking-[.01em]
            text-center lg:text-start'>
                {session?.id === id ? 'Tus' : 'Todas las'} Startups:
            </p>
            <ul className='grid sm:grid-cols-2 gap-5 mx-auto lg:mr-auto lg:ml-0'>
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
