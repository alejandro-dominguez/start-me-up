import { StartUpSchemaType } from '@/types';
import UserStartUpCardTop from '../UserStartUpCardComponents/UserStartUpCardTop';
import UserStartUpCardMainInfo from '../UserStartUpCardComponents/UserStartUpCardMainInfo';
import StartUpCardImg from '../startUpCardComponents/StartUpCardImg';
import StartUpCardBottom from '../startUpCardComponents/StartUpCardBottom';

const UserStartUpCard = ({ post }: { post: StartUpSchemaType }) => {
    return (
        <>
        {
            post?.approved ?
                <li className='bg-white border-[5px] border-black pt-4 pb-5 px-5 rounded-[22px]
                shadow-200 hover:border-primary hover:shadow-300 hover:bg-primary-100
                transition-all ease-linear duration-200'>
                    <UserStartUpCardTop
                        createdAt={post._createdAt}
                        views={post?.views}
                    />
                    <UserStartUpCardMainInfo
                        authorId={post.author?._id}
                        id={post._id}
                        title={post?.title}
                        desc={post?.description}
                    />
                    <StartUpCardImg
                        id={post._id}
                        img={post?.image}
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

export default UserStartUpCard;
