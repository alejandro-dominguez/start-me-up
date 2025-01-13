import { MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import CustomImg from '../imgComponents/CustomImg';

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
                    className='font-medium text-lg text-black line-clamp-1
                    -mt-2 flex items-center gap-1'
                >
                    <span>
                        {name}
                    </span>
                    <MousePointer2
                        strokeWidth={1.75}
                        size={20}
                        className='mt-1'
                    />
                </Link>
                <Link
                    href={`/startup/${id}`}
                    className='font-semibold text-[1.65rem] text-black line-clamp-1 mt-[.15rem]'
                >
                    <h3>
                        {title}
                    </h3>
                </Link>
            </div>
            <Link href={`/user/${authorId}`}>
                <CustomImg
                    url={authorImage || 'https://placehold.co/48x48.png'}
                    alt={`imagen de perfil de ${name}` || 'imagen de perfil del autor'}
                    twClassName='size-12 rounded-full drop-shadow-[0_0_1.5px_rgba(0,0,0,0.2)]
                    mt-[.2rem] brightness-110 contrast-[1.1] saturate-[1.25]'
                    width={48}
                    height={48}
                    placeholderUrl='https://placehold.co/48x48.png'
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
