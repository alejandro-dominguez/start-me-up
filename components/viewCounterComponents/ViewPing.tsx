const ViewPing = () => {
    return (
        <div className='relative'>
            <div className='absolute right-[.28rem] top-1'>
                <span className='flex size-[13px]'>
                    <span className='absolute inline-flex h-full w-full
                    animate-ping rounded-full bg-primary/40' />
                    <span className='relative inline-flex size-[13px]
                    rounded-full bg-primary/90' />
                </span>
            </div>
        </div>
    )
};

export default ViewPing;
