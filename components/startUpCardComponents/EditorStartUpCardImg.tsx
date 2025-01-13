import Link from 'next/link';
import CustomImg from '../imgComponents/CustomImg';

const EditorStartUpCardImg = ({
    img,
    id,
} : {
    img?: string,
    id: string,
}) => {
    return (
        <Link href={`/startup/${id}`}>
            <CustomImg
                url={img || 'https://placehold.co/235x176.png'}
                alt='imagen de portada del artículo'
                twClassName='h-44 rounded-[10px] object-cover object-center
                w-full shadow-sm shadow-black/10'
                width={235.33}
                height={176}
                placeholderUrl={'https://placehold.co/235x176.png'}
            />
        </Link>
    )
};

export default EditorStartUpCardImg;
