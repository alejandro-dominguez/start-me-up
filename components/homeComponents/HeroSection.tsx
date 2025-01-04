import SearchForm from '../SearchForm';

const HeroSection = ({ query }: { query?: string }) => {
    return (
        <section className='bg-primary pattern grid place-items-center
        pt-10 pb-6 md:pt-16 md:pb-10 px-3 md:px-6 shadow-sm'>
            <h1 className='uppercase bg-black px-10 py-5 font-extrabold text-white -mt-4
            sm:text-4xl sm:leading-[2.75rem] tracking-wide text-2xl leading-7 max-w-5xl text-center'>
                Pitch Your Startup,
                <br />
                Connect With Entrepreneurs
            </h1>
            <h2 className='font-medium text-[1.4rem] text-white max-w-3xl text-center break-words
            mt-3 drop-shadow leading-7'>
                Submit Ideas, Vote on Pitches, and Get Noticed!
            </h2>
            <SearchForm query={query} />
        </section>
    )
};

export default HeroSection;
