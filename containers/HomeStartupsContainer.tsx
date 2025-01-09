import { StartUpSchemaType } from '@/types';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
import StartUpCard from '@/components/cards/StartUpCard';

const HomeStartUpsContainer = async ({ searchBarQuery }: { searchBarQuery?: string | '' }) => {
    const params = { search: searchBarQuery || null }
    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })
    
    return (
        <>
        {
            posts.length ?
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-4'>
                    {
                        posts.map((post: StartUpSchemaType) => {
                            return (
                                <StartUpCard
                                    key={post._id}
                                    post={post}
                                />
                            )
                        })
                    }
                </ul>
            :
                <p className='text-black-100 font-normal text-center mt-1 md:text-start'>
                    No se encontraron artículos relacionados.
                </p>
        }
        </>
    )
};

export default HomeStartUpsContainer;
