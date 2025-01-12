import StartUpCardSkeleton from '../cards/StartUpCardSkeleton';

const UserPageSkeleton = () => {
    return (
        <div className='flex flex-col md:flex-row px-4 lg:px-10'>
            <div className='flex flex-col justify-center mt-[3.75rem] xs:mt-[4.2rem] md:mt-[4.5rem]
            md:ml-0 md:mr-7 lg:mr-9 min-w-72 sm:min-w-[28rem] items-center bg-zinc-400 animate-pulse
            mx-auto border-[5px] border-black shadow-100 h-[15rem] rounded-[30px] relative z-0' />
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-7 pb-10'>
                <StartUpCardSkeleton />
            </ul>
        </div>
    )
};

export default UserPageSkeleton;
