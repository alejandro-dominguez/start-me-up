import { StartUpSchemaType } from '@/types';
import UserStartUpCardTop from '../startUpCardComponents/UserStartUpCardTop';
import UserStartUpCardMainInfo from '../startUpCardComponents/UserStartUpCardMainInfo';
import StartUpCardImg from '../startUpCardComponents/StartUpCardImg';
import StartUpCardBottom from '../startUpCardComponents/StartUpCardBottom';

const UserStartUpCard = ({ post }: { post: StartUpSchemaType }) => {
    return (
        <>
        {
            post?.approved ?
                <li className='bg-white border-[5px] border-black pt-[1.2rem] pb-5 px-[1.175rem]
                rounded-[22px] shadow-200 hover:border-primary hover:shadow-300
                hover:bg-primary-100 transition-all ease-out duration-200'>
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
                        isUserCard={true}
                    />
                </li>
            :
                null
        }
        </>
    )
};

export default UserStartUpCard;
