import { z } from 'zod';

export const createStartupSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(20).max(1000),
    category: z.string().min(4).max(20),
    image: z.string().url().refine(async url => {
        try {
            const res = await fetch(url, { method: 'HEAD' })
            const contentType = res.headers.get('content-type')
            
            return contentType?.startsWith('image/')
        } catch (error) {
            return false
        }
    }),
    pitch: z.string().min(20)
});
