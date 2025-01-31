import Link from 'next/link';

const StartUpCardMainInfo = ({
    id,
    title,
    desc
} : {
    authorId?: string,
    id: string,
    title?: string,
    desc?: string
}) => {
    return (
        <>
        <div className='flex justify-between items-center gap-5 mt-[.09rem]'>
            <div className='flex-1'>
                <Link
                    href={`/startup/${id}`}
                    className='font-semibold text-[1.65rem] text-black line-clamp-1'
                >
                    <h3>
                        {title}
                    </h3>
                </Link>
            </div>
        </div>
        <Link href={`/startup/${id}`}>
            <p className='font-normal text-base line-clamp-2 mt-[.25rem] mb-[.85rem]
            text-black-100 break-all leading-[1.35rem]'>
                {desc}
            </p>
        </Link>
        </>
    )
};

export default StartUpCardMainInfo;
