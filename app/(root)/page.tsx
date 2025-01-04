import {
    sanityFetch,
    SanityLive
} from '@/sanity/lib/live';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import HeroSection from '@/components/homeComponents/HeroSection';
import StartupsContainer from '@/containers/StartupsContainer';

const HomePage = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
    const searchBarQuery = (await searchParams).query
    const params = { search: searchBarQuery || null }
    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })

    return (
        <>
            <HeroSection query={searchBarQuery} />
            <main className='pb-10 px-3 md:px-4 max-w-7xl mx-auto'>
                <p className='font-semibold text-[1.35rem] mt-4'>
                    {
                        searchBarQuery ?
                            `Search results for ${searchBarQuery}`
                        :
                            'All Startups'
                    }
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10 mt-3'>
                    <StartupsContainer posts={posts} />
                </ul>
            </main>
            <SanityLive />
        </>
    )
};

export default HomePage;
