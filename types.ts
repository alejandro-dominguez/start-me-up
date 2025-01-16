import { Slug } from './sanity/types';

export type StartUpSchemaType = {
    _id: string,
    _type: 'startup',
    _createdAt: string,
    title?: string,
    slug?: Slug,
    author?: {
        _id: string,
        name?: string,
        email?: string,
        image?: string,
    },
    views?: number,
    description?: string,
    category?: string,
    image?: string,
    pitch?: string,
    approved?: true
};

export type PlaylistSchemaType = {
    _id: string,
    title: string,
    slug: Slug,
    select: PlaylistStartupType[]
};

export type PlaylistStartupType = {
    _id: string,
    title?: string,
    category?: string,
    slug?: Slug,
    image?: string,
    _createdAt: string,
    approved: boolean
};
