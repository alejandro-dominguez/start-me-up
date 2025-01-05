import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries';
import { StartUpSchemaType } from '@/types';
import UserStartUpCard from '@/components/cards/UserStartUpCard';

const UserStartUpsContainer = async ({ id }: { id: string }) => {
    const posts = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })

    return (
        <>
        {
            posts.length ?
                posts.map((post: StartUpSchemaType) => {
                    return (
                        <UserStartUpCard
                            key={post._id}
                            post={post}
                        />
                    )
                })
            :
                <p className='text-black-100 text-sm font-normal'>
                    No posts yet
                </p>
        }
        </>
    )
};

export default UserStartUpsContainer;
