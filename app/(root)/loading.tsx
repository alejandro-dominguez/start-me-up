import { Loader } from 'lucide-react';

const Loading = () => {
    return (
        <div className='grid place-items-center w-full min-h-[100svh] bg-[#F9FAFC] '>
            <Loader className='-mt-20 animate-spinPulse size-16 text-primary-200' />
        </div>
    )
};

export default Loading;
