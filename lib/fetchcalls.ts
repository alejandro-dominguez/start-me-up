import {
    AUTHOR_BY_ID_QUERY,
    PLAYLIST_QUERY,
    STARTUP_BY_ID_QUERY,
    STARTUPS_BY_AUTHOR_QUERY,
    STARTUPS_QUERY,
    TOTAL_STARTUPS_QUERY
} from '@/sanity/lib/queries';
import {
    getFromCache,
    saveToCache
} from './cache';
import { client } from '@/sanity/lib/client';
import { StartUpSchemaType } from '@/types';
import { sanityFetch } from '@/sanity/lib/live';

export const fetchPostsAndTotal = async (
    searchBarQuery?: string, 
    page: number = 1, 
    pageSize: number = 6
) => {
    const offset = (page - 1) * pageSize
    const cacheKey = `posts_and_total_${searchBarQuery || 'all'}_page_${page}`
    const cachedData = getFromCache<{ data: any[], totalCount: number }>(cacheKey)
    if (cachedData) {
        return cachedData
    }
    const [ postsResponse, totalResponse ] = await Promise.all([
        sanityFetch({
            query: STARTUPS_QUERY,
            params: { 
                search: searchBarQuery || null,
                offset,
                limit: pageSize
            }
        }),
        sanityFetch({
            query: TOTAL_STARTUPS_QUERY,
            params: { 
                search: searchBarQuery || null,
                offset,
                limit: pageSize
            }
        })
    ])
    const data = postsResponse || []
    const totalCount = totalResponse || 0
    const result = { data, totalCount }
    saveToCache(cacheKey, result)
    return result
};

export const fetchPlaylistAndPostData = async (id: string) => {
    const cacheKey = `playlist_post_${id}`
    const cachedData = getFromCache<{ post: any, playlist: any }>(cacheKey)
    if (cachedData) {
        return cachedData
    }
    const [post, playlist] = await Promise.all([
        client.fetch(STARTUP_BY_ID_QUERY, { id }),
        client.fetch(PLAYLIST_QUERY)
    ])
    const result = { post, playlist }
    saveToCache(cacheKey, result)
    return result
};

export const fetchStartUpData = async (id: string) => {
    const cacheKey = `startup_${id}`
    const cachedData = getFromCache<StartUpSchemaType>(cacheKey)
    if (cachedData) {
        return { post: cachedData }
    }
    const post: StartUpSchemaType = await client.fetch(STARTUP_BY_ID_QUERY, { id })
    saveToCache(cacheKey, post)
    return { post }
};

export const fetchUserAndPostsData = async (id: string) => {
    const cacheKey = `user_posts_${id}`
    const cachedData = getFromCache<{ user: any, posts: any[] }>(cacheKey)
    if (cachedData) {
        return cachedData
    }
    const [user, posts] = await Promise.all([
        client.fetch(AUTHOR_BY_ID_QUERY, { id }),
        client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })
    ])
    const result = { user, posts }
    saveToCache(cacheKey, result)
    return result
};

export const fetchUserData = async (id: string) => {
    const cacheKey = `user_${id}`
    const cachedData = getFromCache<any>(cacheKey)
    if (cachedData) {
        return { user: cachedData }
    }
    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id })
    saveToCache(cacheKey, user)
    return { user }
};
