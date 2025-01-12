import Link from 'next/link';

const StartUpCardImg = ({
    img,
    id,
    isEditor
} : {
    img?: string,
    id: string,
    isEditor: boolean
}) => {
    return (
        <Link href={`/startup/${id}`}>
            <img
                src={img || 'https://placehold.co/600x400.png'}
                alt='imagen de portada del artículo'
                className=
                    {
                        !isEditor ?
                            `max-h-44 rounded-[10px] object-cover object-center w-full
                            shadow-sm shadow-black/10`
                        :
                            `h-52 rounded-[10px] object-cover object-center w-full
                            shadow-sm shadow-black/10`
                    }
            />
        </Link>
    )
};

export default StartUpCardImg;
