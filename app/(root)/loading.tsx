import { Loader } from 'lucide-react';

const loading = () => {
    return (
        <div className='grid place-items-center w-full min-h-[100svh]'>
            <Loader className='-mt-20 animate-spinPulse size-16 text-primary-200' />
        </div>
    )
};

export default loading;
