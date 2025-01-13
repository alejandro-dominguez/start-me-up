import Link from 'next/link';
import HomeCustomImg from '../imgComponents/HomeCustomImg';

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
        <Link href={`/startup/${id}`}>
            <HomeCustomImg
                url={img}
                alt={`imagen de portada del artículo ${title}`}
                twClassName='h-52 rounded-[10px] object-cover object-center
                w-full shadow-sm shadow-black/10'
            />
        </Link>
    )
};

export default StartUpCardImg;
