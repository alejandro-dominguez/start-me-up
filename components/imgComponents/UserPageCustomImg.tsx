import Image from 'next/image';

const UserPageCustomImg = async (
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
            src={url || 'https://placehold.co/110x110.png'}
            alt={alt || 'imagen de avatar del usuario'}
            className={twClassName}
            width={110}
            height={110}
            placeholder='blur'
            blurDataURL={'https://placehold.co/110x110.png'}
        />
    )
};

export default UserPageCustomImg;
