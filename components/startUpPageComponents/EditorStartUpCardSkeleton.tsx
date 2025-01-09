import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

const EditorStartUpCardSkeleton = () => {
    return (
        <>
        {
            [0, 1, 2, 3].map((i: number) => (
                <li>
                    <Skeleton
                        key={cn('skeleton', i)}
                        className='w-full h-96 rounded-[22px] bg-zinc-400'
                    />
                </li>
            ))
        }
        </>
    );
};

export default EditorStartUpCardSkeleton;