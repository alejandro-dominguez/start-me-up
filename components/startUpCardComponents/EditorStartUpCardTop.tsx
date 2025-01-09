import { formatDateNumeric } from '@/lib/utils';
import Link from 'next/link';

const EditorStartUpCardTop = ({
    createdAt,
    id,
    title
} : {
    createdAt: string,
    id: string,
    title?: string
}) => {
    return (
        <div className='flex flex-col items-start mb-2'>
            <div className='w-full flex flex-col'>
                <Link
                    className='flex justify-between items-center'
                    href={`/startup/${id}`}
                >
                    <span className='font-normal text-[.95rem] line-clamp-1'>
                        {formatDateNumeric(createdAt)}
                    </span>
                </Link>
                <Link
                    href={`/startup/${id}`}
                    className='font-semibold text-[1.65rem] text-black
                    line-clamp-1 -mt-[.1rem]'
                >
                    <h3>
                        {title}
                    </h3>
                </Link>
            </div>
        </div>
    )
};

export default EditorStartUpCardTop;
