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
        <div className='flex justify-between items-center mt-3 gap-5'>
            <div className='flex-1'>
                <Link
                    href={`/user/${authorId}`}
                    className='font-medium text-lg text-black line-clamp-1 -mt-2'
                >
                    {name}
                </Link>
                <Link
                    href={`/startup/${id}`}
                    className='font-semibold text-[1.65rem] text-black line-clamp-1 mt-[.15rem]'
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
                    className='rounded-full shadow-sm shadow-black/30 mt-[.2rem]'
                />
            </Link>
        </div>
        <Link href={`/startup/${id}`}>
            <p className='font-normal text-base line-clamp-2 mt-[.35rem] mb-4
            text-black-100 break-all leading-[1.35rem]'>
                {desc}
            </p>
        </Link>
        </>
    )
};

export default StartUpCardMainInfo;
