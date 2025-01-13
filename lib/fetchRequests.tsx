import {
    AUTHOR_BY_ID_QUERY,
    PLAYLIST_QUERY,
    STARTUP_BY_ID_QUERY,
    STARTUPS_BY_AUTHOR_QUERY,
    STARTUPS_QUERY
} from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { StartUpSchemaType } from '@/types';
import { sanityFetch } from '@/sanity/lib/live';

export const fetchPosts = async (searchBarQuery?: string ) => {
    let data
    
    if (searchBarQuery) {
        data = await sanityFetch({ 
            query: STARTUPS_QUERY,
            params: { search: searchBarQuery }
        })
    } else {
        data = await sanityFetch({ 
            query: STARTUPS_QUERY,
            params: { search: null }
        })
    }

    return data
};

export const fetchPlaylistAndPostData = async (id: string) => {
    const [ post, playlist ] = await Promise.all([
        client.fetch(STARTUP_BY_ID_QUERY, { id }),
        client.fetch(PLAYLIST_QUERY)
    ])

    return {
        post,
        playlist
    }
};

export const fetchStartUpData = async (id: string) => {
    const post: StartUpSchemaType = await client.fetch(STARTUP_BY_ID_QUERY, { id }) 
    
    return { post }
};

export const fetchUserAndPostsData = async (id: string) => {
    const [user, posts] = await Promise.all([
        client.fetch(AUTHOR_BY_ID_QUERY, { id }),
        client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id }),
    ])

    return {
        user,
        posts
    }
};

export const fetchUserData = async (id: string) => {
    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id })
    
    return { user }
};
