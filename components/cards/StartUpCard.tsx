import { StartUpSchemaType } from '@/types';
import StartUpCardTop from '../startUpCardComponents/StartUpCardTop';
import StartUpCardMainInfo from '../startUpCardComponents/StartUpCardMainInfo';
import StartUpCardImg from '../startUpCardComponents/StartUpCardImg';
import StartUpCardBottom from '../startUpCardComponents/StartUpCardBottom';

const StartUpCard = ({ post }: { post: StartUpSchemaType }) => {
    return (
        <>
        {
            post?.approved ?
                <li className='bg-white border-[5px] border-black pt-[1.2rem] pb-5 px-5 rounded-[22px]
                shadow-200 hover:border-primary hover:shadow-300 hover:bg-primary-100
                transition-all ease-out duration-200'>
                    <StartUpCardTop
                        id={post._id}
                        createdAt={post._createdAt}
                        views={post?.views}
                    />
                    <StartUpCardMainInfo
                        authorId={post.author?._id}
                        authorImage={post.author?.image}
                        name={post.author?.name}
                        id={post._id}
                        title={post?.title}
                        desc={post?.description}
                    />
                    <StartUpCardImg
                        id={post._id}
                        img={post?.image}
                        editor={false}
                    />
                    <StartUpCardBottom
                        id={post._id}
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
