import { Button } from '../ui/button';
import Link from 'next/link';

const StartUpCardBottom = ({
    category,
    id
} : {
    category?: string,
    id: string
}) => {
    return (
        <div className='flex justify-between items-center mt-[1.2rem]'>
            <Link 
                href={`/?query=${category?.toLowerCase()}`}
                className='font-medium'
            >
                {category}
            </Link>
            <Button
                className='rounded-full bg-black-200 text-[.95rem]
                text-white shadow-sm shadow-black/30'
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
