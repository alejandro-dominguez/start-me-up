import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

const StartUpCardSkeleton = () => {
    return (
        <>
        {
            [0, 1, 2, 3, 4, 5].map((i: number) => (
                <li
                    key={cn('skeleton', i)}
                    className='list-none'
                >
                    <Skeleton className='w-[95%] xs:w-[389.33px] h-[503.16px] xs:h-[475.16px] mx-auto
                    rounded-[22px] bg-zinc-400 animate-pulse' />
                </li>
            ))
        }
        </>
    )
};

export default StartUpCardSkeleton;
