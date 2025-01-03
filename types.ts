import {
    Author,
    Startup
} from './sanity/types';

export type StartUpSchemaType = Omit<Startup, 'author'> & {author?: Author};
