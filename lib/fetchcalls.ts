import {
    AUTHOR_BY_ID_QUERY,
    PLAYLIST_QUERY,
    STARTUP_BY_ID_QUERY,
    STARTUPS_BY_AUTHOR_QUERY,
    STARTUPS_QUERY,
    TOTAL_STARTUPS_QUERY,
    ADMIN_QUERY,
    ADMIN_STARTUPS_QUERY
} from '@/sanity/lib/queries';
import {
    PlaylistSchemaType,
    StartUpSchemaType
} from '@/types';
import {
    getFromCache,
    saveToCache
} from './cache';
import { client } from '@/sanity/lib/client';

export const fetchPosts = async (
    searchBarQuery?: string, 
    page: number = 1, 
    pageSize: number = 6
) => {
    const offset = (page - 1) * pageSize
    const cacheKey = `posts_${searchBarQuery || 'all'}_page_${page}`
    const cachedData = getFromCache<StartUpSchemaType[]>(cacheKey)
    if (cachedData) {
        return cachedData
    }
    const data = await client.fetch(STARTUPS_QUERY,
        { 
            search: searchBarQuery || null,
            offset,
            limit: offset + pageSize
        }
    )
    saveToCache(cacheKey, data)
    return data
};

export const fethTotalStartUpsQt = async () => {
    const cacheKey = 'startups_total_quantity'
    const cachedData = getFromCache<number>(cacheKey)
    if (cachedData) {
        return cachedData
    }
    const totalStartupsQt = await client.fetch(TOTAL_STARTUPS_QUERY)
    saveToCache(cacheKey, totalStartupsQt)
    return totalStartupsQt
};

export const fetchPlaylistAndPostData = async (id: string) => {
    const cacheKey = `playlist_post_${id}`
    const cachedData = getFromCache<{ post: StartUpSchemaType, playlist: PlaylistSchemaType }>(cacheKey)
    if (cachedData) {
        return cachedData
    }
    const [ post, playlist ] = await Promise.all([
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
    const cachedData = getFromCache<
    {
        user: 
            {
                name: string,
                email: string,
                image: string,
                emailShown: boolean,
            }, 
        posts: StartUpSchemaType[]
    }>(cacheKey)
    if (cachedData) {
        return cachedData
    }
    const [ user, posts ] = await Promise.all([
        client.fetch(AUTHOR_BY_ID_QUERY, { id }),
        client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })
    ])
    const result = { user, posts }
    saveToCache(cacheKey, result)
    return result
};

export const fetchUserData = async (id: string) => {
    const cacheKey = `user_${id}`
    const cachedData = getFromCache<{
            name: string,
            email: string,
            image: string,
            emailShown: boolean,
    }>(cacheKey)
    if (cachedData) {
        return { user: cachedData }
    }
    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id })
    saveToCache(cacheKey, user)
    return { user }
};

export const fetchAdmin = async () => {
    const cacheKey = `admin_user`
    const cachedData = getFromCache<{
        name: string,
        email: string,
        image: string,
        emailShown: boolean,
    }>(cacheKey)
    if (cachedData) {
        return { adminUser: cachedData }
    }
    const adminUser = await client.fetch(ADMIN_QUERY)
    saveToCache(cacheKey, adminUser)
    return { adminUser }
};

export const fetchAdminPosts = async (
    page: number = 1, 
    pageSize: number = 6
) => {
    const offset = (page - 1) * pageSize
    const cacheKey = `admin_posts_page_${page}`
    const cachedData = getFromCache<StartUpSchemaType[]>(cacheKey)
    if (cachedData) {
        return cachedData
    }
    const data = await client.fetch(ADMIN_STARTUPS_QUERY,
        { 
            offset,
            limit: offset + pageSize
        }
    )
    saveToCache(cacheKey, data)
    return data
};
