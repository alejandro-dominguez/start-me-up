import { SanityLive } from '@/sanity/lib/live';
import HeroSection from '@/components/homeComponents/HeroSection';
import HomeStartUpsContainer from '@/containers/HomeStartupsContainer';
import SearchbarQueryText from '@/components/homeComponents/SearchbarQueryText';
import NoSearchbarQueryText from '@/components/homeComponents/NoSearchbarQueryText';

const HomePage = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
    const searchBarQuery = (await searchParams).query

    return (
        <div className='min-h-[100svh] bg-slate-200/20'>
            <HeroSection searchBarQuery={searchBarQuery} />
            <main className='pb-10 px-4 max-w-7xl mx-auto'>
                {
                    searchBarQuery ?
                        <SearchbarQueryText searchBarQuery={searchBarQuery} />
                    :
                        <NoSearchbarQueryText />
                }
                <ul className='relative grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-3 gap-8 lg:gap-10 mt-2 sm:mt-5'>
                    <HomeStartUpsContainer searchBarQuery={searchBarQuery} />
                </ul>
            </main>
            <SanityLive />
        </div>
    )
};

export default HomePage;
