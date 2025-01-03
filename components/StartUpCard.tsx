import { StartUpSchemaType } from '@/types';
import StartUpCardTop from './startUpCardComponents/StartUpCardTop';
import StartUpCardMainInfo from './startUpCardComponents/StartUpCardMainInfo';
import StartUpCardImg from './startUpCardComponents/StartUpCardImg';
import StartUpCardBottom from './startUpCardComponents/StartUpCardBottom';

const StartUpCard = ({ post }: { post: StartUpSchemaType }) => {
    const {
        _createdAt,
        author,
        _id,
    } = post
    
    return (
        <>
        {
            post?.approved ?
                <li className='bg-white border-[5px] border-black pt-3 pb-4 px-5 rounded-[22px]
                shadow-200 hover:border-primary hover:shadow-300 hover:bg-primary-100
                transition-all ease-linear duration-200'>
                    <StartUpCardTop
                        id={_id}
                        createdAt={_createdAt}
                        views={post?.views}
                    />
                    <StartUpCardMainInfo
                        authorId={author?._id}
                        authorImage={author?.image}
                        name={author?.name}
                        id={_id}
                        title={post?.title}
                        desc={post?.description}
                    />
                    <StartUpCardImg
                        id={_id}
                        img={post?.image}
                    />
                    <StartUpCardBottom
                        id={_id}
                        category={post?.category}
                    />
                </li>
            :
                null
        }
        </>
    )
};

export default StartUpCard;
