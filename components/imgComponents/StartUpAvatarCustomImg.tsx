import Image from 'next/image';

const StartUpAvatarCustomImg = async (
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
            src={url || 'https://placehold.co/48x48.png'}
            alt={alt || 'imagen de avatar del autor'}
            className={twClassName}
            width={48}
            height={48}
            placeholder='blur'
            blurDataURL={'https://placehold.co/48x48.png'}
        />
    )
};

export default StartUpAvatarCustomImg;
