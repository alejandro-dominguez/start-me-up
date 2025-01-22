import { StartUpSchemaType } from '@/types';
import StartUpCard from '@/components/cards/StartUpCard';

const StartUpsContainer = (
    {
        posts,
        isHome
    }:
    {
        posts: StartUpSchemaType[],
        isHome: boolean
    }) => {
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
                        {
                            isHome?
                                'No se encontraron artículos relacionados.'
                            :
                                'No se han encontrado artículos.'
                        }
                    </span>
                </div>
        }
        </>
    )
};

export default StartUpsContainer;
