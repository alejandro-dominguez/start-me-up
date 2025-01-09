import Link from 'next/link';

const StartUpCardImg = ({
    img,
    id,
    editor
} : {
    img?: string,
    id: string,
    editor: boolean
}) => {
    return (
        <Link href={`/startup/${id}`}>
            <img
                src={img || 'https://placehold.co/600x400.png'}
                alt='imagen de portada del artículo'
                className=
                    {
                        !editor ?
                            `max-h-44 rounded-[10px] object-cover object-center w-full
                            shadow-sm shadow-black/30`
                        :
                            `h-52 rounded-[10px] object-cover object-center w-full
                            shadow-sm shadow-black/30`
                    }
            />
        </Link>
    )
};

export default StartUpCardImg;
