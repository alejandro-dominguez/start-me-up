import Link from 'next/link';

const StartUpCardImg = ({
    img,
    id
} : {
    img?: string,
    id: string
}) => {
    return (
        <Link href={`/startup/${id}`}>
            <img
                src={img || 'https://placehold.co/600x400.png'}
                alt='imagen de portada del artículo'
                className='max-h-44 rounded-[10px] object-cover object-center 
                w-full shadow-sm shadow-black/30'
            />
        </Link>
    )
};

export default StartUpCardImg;
