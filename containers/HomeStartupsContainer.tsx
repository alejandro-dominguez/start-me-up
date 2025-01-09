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
                posts.map((post: StartUpSchemaType) => {
                    return (
                        <StartUpCard
                            key={post._id}
                            post={post}
                        />
                    )
                })
            :
                <div className='absolute flex w-full text-black-100 font-normal -mt-2'>
                    <span className='w-fit mx-auto md:ml-0'>
                        No se encontraron artículos relacionados.
                    </span>
                </div>
        }
        </>
    )
};

export default HomeStartUpsContainer;
