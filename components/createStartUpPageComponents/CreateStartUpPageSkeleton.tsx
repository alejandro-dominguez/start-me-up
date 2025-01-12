import CreateStartUpPageHero from './CreateStartUpPageHero';

const CreateStartUpPageSkeleton = () => {
    return (
        <div className='min-h-[100svh] bg-[#F9FAFC]'>
            <CreateStartUpPageHero />
            <div className='mx-auto mt-5 space-y-8 max-w-[90%]
            h-96 bg-slate-400 animate-pulse' />
        </div>
    )
};

export default CreateStartUpPageSkeleton;
