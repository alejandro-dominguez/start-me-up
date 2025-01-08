import { StartUpSchemaType } from '@/types';
import StartUpCard from '@/components/cards/StartUpCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';

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
                <p className='text-black-100 text-sm font-normal'>
                    No startups found
                </p>
        }
        </>
    )
};

export default HomeStartUpsContainer;
