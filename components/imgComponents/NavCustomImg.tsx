import Image from 'next/image';

const NavCustomImg = async (
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
            src={url || 'https://placehold.co/40x40.png'}
            alt={alt || 'imagen de avatar del usuario'}
            className={twClassName}
            width={40}
            height={40}
            placeholder='blur'
            blurDataURL={'https://placehold.co/40x40.png'}
        />
    )
};

export default NavCustomImg;
