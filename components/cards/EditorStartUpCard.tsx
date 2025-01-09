import { PlaylistStartupType } from '@/types';
import StartUpCardImg from '../startUpCardComponents/StartUpCardImg';
import StartUpCardBottom from '../startUpCardComponents/StartUpCardBottom';
import EditorStartUpCardTop from '../startUpCardComponents/EditorStartUpCardTop';

const EditorStartUpCard = ({ post }: { post: PlaylistStartupType }) => {
    return (
        <>
        {
            post?.approved ?
                <li className='bg-white border-[5px] border-black pt-4 pb-[1.1rem] px-4 rounded-[22px]
                shadow-200 hover:border-primary hover:shadow-300 hover:bg-primary-100
                transition-all ease-out duration-200'>
                    <EditorStartUpCardTop
                        id={post._id}
                        createdAt={post._createdAt}
                        title={post?.title}
                    />
                    <StartUpCardImg
                        id={post._id}
                        img={post?.image}
                        isEditor={true}
                    />
                    <StartUpCardBottom
                        id={post._id}
                        category={post?.category}
                        isUserCard={false}
                    />
                </li>
            :
                null
        }
        </>
    )
};

export default EditorStartUpCard;
