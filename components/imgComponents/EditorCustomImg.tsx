import Image from 'next/image';

const EditorCustomImg = async (
    {
        url,
        alt,
        twClassName
    }:
    {
        url?: string,
        alt: string,
        twClassName: string
    }
) => {
    return (
        <Image
            src={url || 'https://placehold.co/235x176.png'}
            alt={alt || 'imagen de portada del artículo'}
            className={twClassName}
            width={235.33}
            height={176}
            placeholder='blur'
            blurDataURL={'https://placehold.co/235x176.png'}
        />
    )
};

export default EditorCustomImg;
