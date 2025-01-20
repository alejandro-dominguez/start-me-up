import { StartUpSchemaType } from '@/types';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import StartUpPageInfo from './StartUpPageInfo';
import ViewCounter from '@/components/startUpPageComponents/ViewCounter';
import CustomImg from '../imgComponents/CustomImg';

const StartUpPageMain = ({
    post,
    id
}: {
    post: StartUpSchemaType,
    id: string
}) => {
    return (
        <main className='px-4 md:px-6 pt-5 md:pt-7 max-w-7xl mx-auto'>
            <Suspense fallback=
                {
                    <Skeleton className='w-[90%] lg:w-[1232px] h-[210.8px] xs:h-[241.53px]
                    sm:h-[373.66px] md:h-[442.5px] lg:h-[448px] bg-zinc-400 animate-pulse' />
                }
            >
                <CustomImg
                    url={post.image || 'https://placehold.co/1232x448.png'}
                    alt={`imagen de portada del artículo ${post.title}` || 'imagen de portada del artículo'}
                    twClassName='w-full max-h-[28rem] rounded-lg object-cover
                    object-center shadow-sm shadow-black/10'
                    width={1232}
                    height={448}
                    placeholderUrl='https://placehold.co/1232x448.png'
                />
            </Suspense>
            <StartUpPageInfo post={post} />
            <hr className='border-dotted bg-zinc-400 max-w-4xl my-6 mx-auto' />
            <Suspense
                fallback=
                    {
                        <Skeleton className='w-[101.92px] h-[37.77px] bg-zinc-400 flex
                        justify-end items-center mt-5 fixed bottom-3 right-3 animate-pulse' />
                    }
            >
                <ViewCounter
                    totalViews={post.views || 1}
                    id={id}
                />
            </Suspense>
        </main>
    )
};

export default StartUpPageMain;
