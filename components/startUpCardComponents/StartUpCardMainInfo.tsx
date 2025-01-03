import Image from 'next/image';
import Link from 'next/link';

const StartUpCardMainInfo = ({
    authorId,
    authorImage,
    name,
    id,
    title,
    desc
} : {
    authorId?: string,
    authorImage?: string,
    name?: string,
    id: string,
    title?: string
    desc?: string
}) => {
    return (
        <>
        <div className='flex-between mt-3 gap-5'>
            <div className='flex-1'>
                <Link
                    href={`/user/${authorId}`}
                    className='text-16-medium line-clamp-1 -mt-1'
                >
                    {name}
                </Link>
                <Link
                    href={`/startup/${id}`}
                    className='text-26-semibold line-clamp-1 mt-1'
                >
                    {title}
                </Link>
            </div>
            <Link href={`/user/${authorId}`}>
                <Image
                    src={authorImage || 'https://placehold.co/48x48.png'}
                    alt='perfil del autor'
                    width={48}
                    height={48}
                    className='rounded-full -mt-2 shadow-sm shadow-black'
                />
            </Link>
        </div>
        <Link href={`/startup/${id}`}>
            <p className='font-normal text-base line-clamp-2 mb-3 text-black-100 break-all'>
                {desc}
            </p>
        </Link>
        </>
    )
};

export default StartUpCardMainInfo;
