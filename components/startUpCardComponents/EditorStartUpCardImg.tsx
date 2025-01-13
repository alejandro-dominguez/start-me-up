import Link from 'next/link';
import EditorCustomImg from '../imgComponents//EditorCustomImg';

const EditorStartUpCardImg = ({
    img,
    id,
} : {
    img?: string,
    id: string,
}) => {
    return (
        <Link href={`/startup/${id}`}>
            <EditorCustomImg
                url={img}
                alt='imagen de portada del artículo'
                twClassName='h-44 rounded-[10px] object-cover object-center
                w-full shadow-sm shadow-black/10'
            />
        </Link>
    )
};

export default EditorStartUpCardImg;
