import Link from 'next/link';
import CustomImg from '../imgComponents/CustomImg';

const StartUpCardImg = ({
    img,
    title,
    id
} : {
    img?: string,
    title?: string,
    id: string
}) => {
    return (
        <Link
            href={`/startup/${id}`}
            className='self-end mt-auto mb-0 justify-self-end'
        >
            <CustomImg
                url={img || 'https://placehold.co/339x208.png'}
                alt={`imagen de portada del artículo ${title}` || 'imagen de portada del artículo'}
                twClassName='h-52 rounded-[10px] object-cover object-center
                w-full shadow-sm shadow-black/10'
                width={339.33}
                height={208}
                placeholderUrl='https://placehold.co/339x208.png'
            />
        </Link>
    )
};

export default StartUpCardImg;
