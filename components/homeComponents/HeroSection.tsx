import SearchForm from '../SearchForm';

const HeroSection = ({ query }: { query?: string | '' }) => {
    return (
        <section className='bg-primary pattern grid place-items-center
        pt-10 pb-6 md:pt-16 md:pb-10 px-3 md:px-6 shadow-sm'>
            <div className='px4 xs:px-0'>
                <h1 className='uppercase bg-black px-4 xs:px-10 py-5 font-extrabold text-white text-center
                sm:text-4xl sm:leading-[2.75rem] tracking-wide text-2xl leading-8 max-w-5xl -mt-4'>
                    Presenta tu Startup,
                    <br />
                    Conecta con Emprendedores
                </h1>
            </div>
            <h2 className='font-medium text-[1.4rem] text-white max-w-3xl text-center break-words
            mt-3 drop-shadow leading-7'>
                ¡Comparte Ideas, Busca Proyectos y Hazte Notar!
            </h2>
            <SearchForm query={query} />
        </section>
    )
};

export default HeroSection;
