import { generateSingleBlurDataURL } from '@/lib/generateBlurData';
import Image from 'next/image';

const CustomImg = async (
    {
        url,
        alt,
        twClassName,
        width,
        height,
        placeholderUrl
    }:
    {
        url?: string,
        alt: string,
        twClassName: string,
        width: number,
        height: number,
        placeholderUrl: string
    }
) => {
    const blurDataURL = await generateSingleBlurDataURL(url || placeholderUrl)
    
    return (
        <Image
            src={url || placeholderUrl}
            alt={alt}
            className={twClassName}
            width={width}
            height={height}
            placeholder='blur'
            blurDataURL={blurDataURL}
        />
    )
};

export default CustomImg;
