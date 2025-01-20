import { type SchemaTypeDefinition } from 'sanity';
import { startup } from './startup';
import { author } from './author';
import { playlist } from './playlist';
import { admin } from './admin';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        admin,
        author,
        startup,
        playlist
    ]
};
