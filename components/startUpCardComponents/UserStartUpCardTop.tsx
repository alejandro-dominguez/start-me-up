import { formatDateNumeric } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';

const UserStartUpCardTop = ({
    createdAt,
    views
} : {
    createdAt: string,
    views?: number
}) => {
    return (
        <div className='flex justify-between items-center'>
            <span className='font-normal text-base line-clamp-1'>
                {formatDateNumeric(createdAt)}
            </span>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-secondary-300 drop-shadow-[0_0_0.5px_rgba(0,0,0,0.25)]' />
                <span className='font-medium text-base text-black'>
                    {views}
                </span>
            </div>
        </div>
    )
};

export default UserStartUpCardTop;
