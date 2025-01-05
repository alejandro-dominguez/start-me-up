import { defineQuery } from 'next-sanity';

export const STARTUPS_QUERY = defineQuery(
    `*[_type == 'startup'
        && defined(slug.current)
        && !defined($search)
        || title match $search
        || category match $search
        || author -> name match $search
    ] | order(_createdAt desc){
        _id, 
        title, 
        slug,
        _createdAt,
        author->{
            _id,
            name,
            image,
        },
        views,
        description,
        category,
        image,
        approved
    }`
);

export const STARTUP_BY_ID_QUERY = defineQuery(
    `*[_type == 'startup' && _id == $id][0]{
        _id,
        title, 
        slug,
        _createdAt,
        author->{
            _id,
            name,
            image,
        }, 
        views,
        description,
        category,
        image,
        pitch,
        approved
    }`
);

export const STARTUP_VIEWS_QUERY = defineQuery(`
    *[_type == 'startup' && _id == $id][0]{
        _id,
        views
    }`
);

export const AUTHOR_BY_GOOGLE_EMAIL_QUERY = defineQuery(`
    *[_type == 'author' && email == $email][0]{
        _id,
        name,
        email,
        image
    }`
);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
    *[_type == 'author' && _id == $id][0]{
        _id,
        name,
        email,
        image
    }`
);

export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(`
    *[_type == 'startup' && author._ref == $id] | order(_createdAt desc){
        _id, 
        title, 
        slug,
        _createdAt,
        author->{
            _id,
            name,
            image,
            email
        }, 
        views,
        description,
        category,
        image,
        approved
    }`
);

export const PLAYLIST_QUERY = defineQuery(`
    *[_type == 'playlist'][0]{
        select[]->{
            _id,
            _createdAt,
            title,
            slug,
            description,
            category,
            image,
            approved
        }
    }`
);
