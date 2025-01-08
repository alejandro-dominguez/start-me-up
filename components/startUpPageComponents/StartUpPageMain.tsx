import { StartUpSchemaType } from '@/types';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import StartUpPageInfo from './StartUpPageInfo';
import ViewCounter from '@/components/startUpPageComponents/ViewCounter';

const StartUpPageMain = ({
    post,
    id
}: {
    post: StartUpSchemaType,
    id: string
}) => {
    return (
        <main className='px-3 md:px-6 pt-5 md:pt-7 max-w-7xl mx-auto'>
            <img
                src={post.image}
                alt='imagen de portada del artículo'
                className='w-full max-h-[28rem] rounded-lg object-cover object-center
                shadow-sm shadow-black/50'
            />
            <StartUpPageInfo post={post} />
            <hr className='border-dotted bg-zinc-400 max-w-4xl my-6 mx-auto' />
            <Suspense
                fallback={
                    <Skeleton className='w-[101.92px] h-[37.77px] bg-zinc-400 flex
                    justify-end items-center mt-5 fixed bottom-3 right-3' />
                }
            >
                <ViewCounter id={id} />
            </Suspense>
        </main>
    )
};

export default StartUpPageMain;
