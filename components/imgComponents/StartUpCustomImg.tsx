import Image from 'next/image';

const StartUpCustomImg = async (
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
            src={url || 'https://placehold.co/1232x448.png'}
            alt={alt || 'imagen de portada del artículo'}
            className={twClassName}
            width={1232}
            height={448}
            placeholder='blur'
            blurDataURL={'https://placehold.co/1232x448.png'}
        />
    )
};

export default StartUpCustomImg;
