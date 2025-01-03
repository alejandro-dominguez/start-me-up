import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';

const StartUpCardTop = ({
    createdAt,
    views,
    id
} : {
    createdAt: string,
    views?: number,
    id: string
}) => {
    return (
        <Link
            className='flex-between'
            href={`/startup/${id}`}
        >
            <span className='font-normal text-base line-clamp-1'>
                {formatDate(createdAt)}
            </span>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary' />
                <span className='text-16-medium'>
                    {views}
                </span>
            </div>
        </Link>
    )
};

export default StartUpCardTop;
