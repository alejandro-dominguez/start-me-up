import {
    PLAYLIST_QUERY,
    STARTUP_BY_ID_QUERY
} from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import StartUpPageContainer from '@/containers/StartUpPageContainer';
import RecommendedStartUpsContainer from '@/containers/RecommendedStartUpsContainer';

export const experimental_ppr = true;

const StartUpPage = async ({ params } : { params: Promise<{ id: string }> }) => {
    const id = (await params).id
    const [ post, editorPosts ] = await Promise.all([
        client.fetch(STARTUP_BY_ID_QUERY, { id }),
        client.fetch(PLAYLIST_QUERY)
    ])
    
    if (!post) return notFound()

    return (
        <div className='min-h-[100svh] bg-slate-100/30'>
            <StartUpPageContainer
                post={post}
                id={id}
            />
            {
                editorPosts.length ?
                    <RecommendedStartUpsContainer editorPosts={editorPosts} />
                :
                    null
            }
        </div>
    )
};

export default StartUpPage;
