import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

const EditorStartUpCardSkeleton = () => {
    return (
        <>
        {
            [0, 1, 2, 3, 4, 5].map((i: number) => (
                <li
                    key={cn('skeleton', i)}
                    className='list-none'
                >
                    <Skeleton className='w-[256.328px] h-[320.994px]
                    rounded-[22px] bg-zinc-400 animate-pulse' />
                </li>
            ))
        }
        </>
    )
};

export default EditorStartUpCardSkeleton;
