import sharp from 'sharp';
import axios from 'axios';

const blurDataURLCache: { [url: string]: string } = {}

export async function generateSingleBlurDataURL(imageUrl: string): Promise<string> {
    if (blurDataURLCache[imageUrl]) {
        return blurDataURLCache[imageUrl]
    }

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, 'binary')
        const resizedImage = await sharp(buffer).resize(10).toBuffer()
        const blurDataURL = `data:image/jpeg;base64,${resizedImage.toString('base64')}`

        blurDataURLCache[imageUrl] = blurDataURL;

        return blurDataURL
    } catch (error) {
        console.error(`Error generando blurDataURL para ${imageUrl}:`, error)

        return ''
    }
};

async function generateBlurDataURLs(imageUrls: string[]): Promise<string[]> {
    const blurPromises = imageUrls.map((url) => generateSingleBlurDataURL(url))
 
    return Promise.all(blurPromises)
};
