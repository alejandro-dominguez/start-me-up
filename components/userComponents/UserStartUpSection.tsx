import { Suspense } from 'react';
import { StartUpSchemaType } from '@/types';
import { auth } from '@/auth';
import UserStartUpCard from '../cards/UserStartUpCard';
import StartUpCardSkeleton from '../skeletonComponents/StartUpCardSkeleton';

const UserStartUpSection = async (
    {
        id,
        posts
    }:{
        id: string,
        posts: StartUpSchemaType[]
    }
) => {
    const session = await auth()
    
    return (
        <div className='flex flex-col md:mt-9 min-h-[107svh] xs:min-h-[100svh]'>
            <p className='text-2xl font-bold text-black pl-2 lg:pl-0 tracking-[.01em] 
            text-center md:text-start mt-5 mb-4 md:mb-2 md:mt-0 mr-1'>
                {session?.id === id ? 'Tus Startups:' : 'Todas las Startups:'}
            </p>
            <Suspense fallback={<StartUpCardSkeleton />}>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-7 pb-10'>
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
                            <p className='md:ml-1 text-center text-black-100 text-sm font-normal'>
                                Aún no hay artículos
                            </p>
                    }
                </ul>
            </Suspense>
        </div>
    )
};

export default UserStartUpSection;
