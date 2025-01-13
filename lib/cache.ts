type CacheEntry<T> = {
    data: T,
    ttl: number,
    timestamp: number
};

const cache: { [key: string]: CacheEntry<any> } = {};
const CACHE_TTL = 300000;

export const getFromCache = <T,>(key: string): T | null => {
    const entry = cache[key]
    if (entry && (performance.now() - entry.timestamp) < entry.ttl) {
        return entry.data
    }
    delete cache[key]

    return null
};

export const saveToCache = <T,>(key: string, data: T): void => {
    cache[key] = {
        data,
        ttl: CACHE_TTL,
        timestamp: performance.now()
    }
};
