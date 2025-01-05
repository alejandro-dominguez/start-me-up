import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

const UserStartUpCardSkeleton = () => {
    return (
        <>
        {
            [0, 1, 2, 3].map((i: number) => (
                <li key={cn('skeleton', i)}>
                    <Skeleton className='w-full h-96 rounded-[22px] bg-zinc-400' />
                </li>
            ))
        }
        </>
    )
};

export default UserStartUpCardSkeleton;
