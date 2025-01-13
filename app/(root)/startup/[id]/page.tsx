import { fetchPlaylistAndPostData } from '@/lib/fetchRequests';
import StartUpPageContainer from '@/containers/StartUpPageContainer';

export const experimental_ppr = true;

const StartUpPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const {
        post,
        playlist
    } = await fetchPlaylistAndPostData(id)
    
    return (
        <div className='min-h-[100svh] bg-[#F9FAFC]'>
            <StartUpPageContainer
                id={id}
                post={post}
                playlist={playlist}
            />
        </div>
    )
};

export default StartUpPage;
