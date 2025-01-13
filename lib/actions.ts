'use server';
import { auth } from '@/auth';
import { parseServerActionResponse } from './utils';
import { writeClient } from '@/sanity/lib/writeClient';
import slugify from 'slugify';

export const createStartup = async (
    state: any,
    form: FormData,
    pitch: string
) => {
    const session = await auth()
    if (!session) {
        return parseServerActionResponse({
            error: 'User not signed in',
            status: 'ERROR'
        })
    }
    const { title, description, category, image } = Object.fromEntries(
        Array.from(form).filter(([ key ]) => key !== 'pitch')    
    )
    const slug = slugify(title as string, { lower: true, strict: true })
    try {
        const startup = {
            title,
            description,
            category,
            image,
            views: 1,
            slug: {
                _type: 'slug',
                current: slug
            },
            author: {
                _type: 'reference',
                _ref: session?.id
            },
            pitch,
            approved: true
        }
        const result = await writeClient.create({
            _type: 'startup',
            ...startup
        })
        return parseServerActionResponse({
            ...result,
            error: '',
            status: 'SUCCESS'
        })
    } catch (error) {
        console.log(error)
        return parseServerActionResponse({
            error: JSON.stringify(error),
            status: 'ERROR'
        })
    }
};
