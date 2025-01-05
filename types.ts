import {
    Author,
    Slug,
    Startup
} from './sanity/types';

export type StartUpSchemaType = Omit<Startup, 'author'> & {author?: Author};

export type PlaylistSchemaType = {
    _id: string;
    title: string;
    slug: {
      current: string;
      _type: 'slug';
    };
    select: PlaylistStartupType[];
};

export type PlaylistStartupType = {
    _id: string;
    title?: string;
    description?: string;
    category?: string;
    slug?: Slug;
    image?: string;
    _createdAt: string;
    approved: boolean;
};
