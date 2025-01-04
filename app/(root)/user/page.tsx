import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

const UserPage = async () => {
    const session = await auth()
    const id = session?.id
    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id })

    if (!user) return notFound()
        
    return (
        <>
            <main className='py-16 mx-auto grid place-items-center'>
                <div className=' pt-[3.4rem] pb-6 flex flex-col justify-center
                items-center bg-primary border-[5px] border-black shadow-100
                rounded-[30px] relative z-0 min-w-[29.5rem]'>
                    <div className='profile-title'>
                        <h3 className='text-24-black uppercase tracking-[.01em]
                        min-w-[21.5rem] text-center'>
                            {user.name}
                        </h3>
                    </div>
                    <Image
                        src={user.image}
                        alt={user.name}
                        width={112}
                        height={112}
                        className='rounded-full object-cover object-center border-[4.5px]
                        border-black shadow shadow-black/20'
                    />
                    <p className='font-bold text-white text-2xl mt-4
                    text-center drop-shadow min-w-fit'>
                        {user.email}
                    </p>
                </div>
                <div className='flex-1 flex flex-col gap-5 mt-4'>
                    <p className='text-30-bold'>
                        {session?.id === id ? 'Your' : 'All'} Startups
                    </p>
                    <ul className='grid sm:grid-cols-2 gap-5'>
                    {/* <Suspense fallback={<StartupCardSkeleton />}>
                        <UserStartups id={id} />
                    </Suspense> */}
                    </ul>
                </div>
            </main>
        </>
    );
};

export default UserPage;
