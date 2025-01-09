import { auth } from '@/auth';
import { SanityLive } from '@/sanity/lib/live';
import HeroSection from '@/components/homeComponents/HeroSection';
import HomeStartUpsContainer from '@/containers/HomeStartupsContainer';

const HomePage = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
    const searchBarQuery = (await searchParams).query
   const session = await auth()

    return (
        <div className='min-h-[100svh] bg-slate-200/20'>
            <HeroSection searchBarQuery={searchBarQuery} />
            <main className='pb-10 px-3 md:px-4 max-w-7xl mx-auto'>
                {
                    searchBarQuery ?
                        <p className='font-semibold text-[1.35rem] mt-2 md:mt-[1.12rem]
                        flex flex-col md:flex-row items-center justify-between break-all'>
                            <span className='flex flex-col md:flex-row xs:gap-1 mx-auto md:ml-0
                            xs:items-baseline self-start leading-7 text-center mt-[.2rem]'>
                                <span className='text-center mx-auto'>
                                    Resultados para:
                                </span>
                                <span className='text-lg tracking-wide text-primary-200 -mt-1 md:-mt-0'>
                                    {` "${searchBarQuery}"`}
                                </span>
                            </span>
                        </p>
                    :
                        <p className='font-semibold text-[1.35rem] mt-2 md:mt-[1.12rem]
                        flex flex-col md:flex-row items-center justify-between'>
                            <span>
                                Todas las Startups:
                            </span>
                            {
                                session && session?.user ?
                                    null
                                :
                                    <span className='text-[1.07rem] md:text-lg
                                    text-primary-200 drop-shadow-sm text-center
                                    px-8 xs:px-16 md:pl-0 md:pr-1 leading-[1.4rem]'>
                                        ¡Loguea fácilmente para sumar tus startups!
                                    </span>
                            }
                        </p>
                }
                <HomeStartUpsContainer searchBarQuery={searchBarQuery} />
            </main>
            <SanityLive />
        </div>
    )
};

export default HomePage;
