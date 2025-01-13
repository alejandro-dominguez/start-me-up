import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

const UserPageSkeleton = () => {
    return (
        <div className='flex flex-col md:flex-row px-4 lg:px-10'>
            <div className='flex flex-col justify-center mt-[3.75rem] xs:mt-[4.2rem] md:mt-[4.5rem]
            md:ml-0 md:mr-7 lg:mr-9 min-w-72 sm:min-w-[28rem] items-center bg-zinc-400 animate-pulse
            mx-auto border-[5px] border-black shadow-100 h-[15rem] rounded-[30px] relative z-0' />
            <p className='text-2xl font-bold text-black pl-2 lg:pl-0 tracking-[.01em] 
            text-center md:text-start mt-5 mb-4 md:mb-2 md:mt-0'>
                Tus Startups:
            </p>
            <ul className='flex flex-col lg:flex-row gap-7 pb-10'>
                {
                    [0, 1].map((i: number) => (
                        <li className='list-none'
                            key={cn('skeleton', i)}
                        >
                            <Skeleton className='w-[367px] h-[468.61px]
                            rounded-[22px] bg-zinc-400 animate-pulse' />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default UserPageSkeleton;
