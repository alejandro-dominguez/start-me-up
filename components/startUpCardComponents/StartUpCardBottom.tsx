import { MousePointer2 } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const StartUpCardBottom = ({
    category,
    id,
    isUserCard
} : {
    category?: string,
    id: string,
    isUserCard: boolean,
}) => {
    return (
        <div className=
            {
                !isUserCard ?
                    'flex justify-between items-center mt-[1.2rem] w-full'
                :
                    'flex flex-col mt-4 lg:mt-[.8rem] gap-4 lg:gap-[.8rem]'
            }
        >
            <Link
                href={`/?query=${category?.toLowerCase()}`}
                className='font-medium flex items-center gap-1'
            >
                <span className='line-clamp-1 max-w-min'>
                    {category}
                </span>
                <MousePointer2
                    strokeWidth={1.75}
                    size={20}
                    className='mt-1'
                />
            </Link>
            <Button
                className='rounded-full bg-black-200 text-[.95rem]
                text-white shadow-sm shadow-black/20'
                asChild
            >
                <Link href={`/startup/${id}`}>
                    Detalle
                </Link>
            </Button>
        </div>
    )
};

export default StartUpCardBottom;
