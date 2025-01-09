import SearchForm from '@/components/homeComponents/SearchForm';

const HeroSection = ({ searchBarQuery }: { searchBarQuery?: string | '' }) => {
    return (
        <section className='bg-primary pattern-xs md:pattern grid place-items-center
        pt-8 pb-[1.125rem] xs:pt-[3.2rem] xs:pb-9 px-4 md:px-6 shadow-sm'>
            <div className='px4 xs:px-0'>
                <h1 className='uppercase bg-black px-4 xs:px-10 py-4 md:py-5 font-extrabold
                text-white text-center sm:text-4xl sm:leading-[2.75rem] tracking-wide
                text-2xl leading-8 max-w-5xl -mt-4'>
                    Presenta tu Startup,
                    <br />
                    Conecta con Emprendedores
                </h1>
            </div>
            <h2 className='font-medium text-xl md:text-[1.4rem] text-white
            text-center break-words mt-2 xs:mt-4 drop-shadow leading-6 md:leading-7'>
                ¡Comparte Ideas, Crea, Busca Proyectos y Hazte Notar!
            </h2>
            <SearchForm searchBarQuery={searchBarQuery} />
        </section>
    )
};

export default HeroSection;
