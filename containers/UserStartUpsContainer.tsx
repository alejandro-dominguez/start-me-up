import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries';
import { StartUpSchemaType } from '@/types';
import StartUpCard from '@/components/StartUpCard';

const UserStartUpsContainer = async ({ id }: { id: string }) => {
    const posts: [StartUpSchemaType] = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })

    return (
        <>
        {
            posts.length ?
                posts.map((post: StartUpSchemaType) => (<span key={post._id}>{post.author?.name}</span>))
                /* posts.map((post: StartUpSchemaType) => (<StartUpCard key={post._id} post={post} />)) */
            :
                <p className='text-black-100 text-sm font-normal'>
                    No posts yet
                </p>
        }
        </>
    )
};

export default UserStartUpsContainer;
