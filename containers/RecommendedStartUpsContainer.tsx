import StartUpCard from '@/components/StartUpCard';
import { StartUpSchemaType } from '@/types';

const RecommendedStartUpsContainer = ({ editorPosts }: { editorPosts: [StartUpSchemaType] }) => {
    return (
        <div className='max-w-4xl mx-auto'>
            <h3 className='font-semibold text-2xl text-black'>
                Editor picks
            </h3>
            <ul className='grid sm:grid-cols-2 gap-5'>
                {
                    editorPosts.map((post: StartUpSchemaType, i: number) => {
                        return (
                            <StartUpCard
                                key={i}
                                post={post}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default RecommendedStartUpsContainer;
