import {
    sanityFetch,
    SanityLive
} from '@/sanity/lib/live';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import HeroSection from '@/components/homeComponents/HeroSection';
import StartUpsContainer from '@/containers/StartUpsContainer';

const HomePage = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
    const searchBarQuery = (await searchParams).query || ''
    const params = { search: searchBarQuery || null }
    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params }) || null

    return (
        <div className='min-h-[100svh] bg-slate-100/50'>
            <HeroSection query={searchBarQuery} />
            <main className='pb-10 px-3 md:px-4 max-w-7xl mx-auto'>
                <p className='font-semibold text-[1.35rem] mt-4'>
                    {
                        searchBarQuery ?
                            `Resultados para ${searchBarQuery}:`
                        :
                            'Todas las Startups:'
                    }
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10 mt-3'>
                    <StartUpsContainer posts={posts} />
                </ul>
            </main>
            <SanityLive />
        </div>
    )
};

export default HomePage;
