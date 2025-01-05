import { StartUpSchemaType } from '@/types';
import StartUpCard from '@/components/cards/StartUpCard';

const StartUpsContainer = ({ posts }: { posts: [StartUpSchemaType] | null }) => {
    return (
        <>
        {
            posts?.length ?
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

export default StartUpsContainer;
