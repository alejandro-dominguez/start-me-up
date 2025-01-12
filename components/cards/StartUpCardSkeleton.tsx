import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

const StartUpCardSkeleton = () => {
    return (
        <>
        {
            [0, 1, 2, 3, 4, 5].map((i: number) => (
                <li key={cn('skeleton', i)}>
                    <Skeleton className='w-full h-96 rounded-[22px] bg-zinc-400 animate-pulse' />
                </li>
            ))
        }
        </>
    )
};

export default StartUpCardSkeleton;
