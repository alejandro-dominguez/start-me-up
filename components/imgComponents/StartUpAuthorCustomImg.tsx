import Image from 'next/image';

const StartUpAuthorCustomImg = async (
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
            src={url || 'https://placehold.co/60x60.png'}
            alt={alt || 'imagen de avatar del autor'}
            className={twClassName}
            width={60}
            height={60}
            placeholder='blur'
            blurDataURL={'https://placehold.co/60x60.png'}
        />
    )
};

export default StartUpAuthorCustomImg;
