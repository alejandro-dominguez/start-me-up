import Image from 'next/image';

const HomeCustomImg = async (
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
            src={url || 'https://placehold.co/339x208.png'}
            alt={alt || 'imagen de portada del artículo'}
            className={twClassName}
            width={339.33}
            height={208}
            placeholder='blur'
            blurDataURL={'https://placehold.co/339x208.png'}
        />
    )
};

export default HomeCustomImg;
