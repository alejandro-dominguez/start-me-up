import {
    PlaylistSchemaType,
    PlaylistStartupType,
    StartUpSchemaType
} from '@/types';
import EditorStartUpCard from '@/components/EditorStartUpCard';

const EditorStartUpsContainer = ({ editorPosts }: { editorPosts: PlaylistSchemaType }) => {
    const { select }: PlaylistSchemaType = editorPosts;

    const posts = select?.map((
        {
            _id,
            title,
            description,
            category,
            slug,
            image,
            _createdAt,
            approved
        }) => ({
            _id,
            title,
            description,
            category,
            slug,
            image,
            _createdAt,
            approved
        })
    )

    return (
        <div className='max-w-4xl mx-auto'>
            <h3 className='font-semibold text-xl text-black px-3 md:px-6 lg:px-0'>
                Artículos seleccionados:
            </h3>
            <ul className='grid sm:grid-cols-2 gap-5 mt-4 px-3 md:px-6 lg:px-0'>
                {
                    posts.map((post: PlaylistStartupType) => {
                        return (
                            <EditorStartUpCard
                                key={post._id}
                                post={post}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default EditorStartUpsContainer;
