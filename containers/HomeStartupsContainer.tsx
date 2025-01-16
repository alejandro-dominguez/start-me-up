import { StartUpSchemaType } from '@/types';
import StartUpCard from '@/components/cards/StartUpCard';

const HomeStartUpsContainer = ({ posts }: { posts: StartUpSchemaType[] }) => {
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
                <div className='absolute flex w-full text-black-100 font-normal'>
                    <span className='w-fit mx-auto md:ml-0 text-center'>
                        No se encontraron artículos relacionados.
                    </span>
                </div>
        }
        </>
    )
};

export default HomeStartUpsContainer;
