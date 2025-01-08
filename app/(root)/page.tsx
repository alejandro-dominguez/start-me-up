import { SanityLive } from '@/sanity/lib/live';
import HeroSection from '@/components/homeComponents/HeroSection';
import HomeStartUpsContainer from '@/containers/HomeStartupsContainer';

const HomePage = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
    const searchBarQuery = (await searchParams).query

    return (
        <div className='min-h-[100svh] bg-slate-100/50'>
            <HeroSection searchBarQuery={searchBarQuery} />
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
                    <HomeStartUpsContainer searchBarQuery={searchBarQuery} />
                </ul>
            </main>
            <SanityLive />
        </div>
    )
};

export default HomePage;
