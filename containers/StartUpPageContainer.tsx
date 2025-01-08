import {
    PlaylistSchemaType,
    PlaylistStartupType
} from '@/types';
import {
    PLAYLIST_QUERY,
    STARTUP_BY_ID_QUERY
} from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { isNonEmptyObject } from '@/lib/utils';
import { notFound } from 'next/navigation';
import StartUpPageHero from '@/components/startUpPageComponents/StartUpPageHero';
import StartUpPageMain from '@/components/startUpPageComponents/StartUpPageMain';
import EditorStartUpCard from '@/components/cards/EditorStartUpCard';

const StartUpPageContainer = async ({ id }: { id: string }) => {
    const [ post, playlist ] = await Promise.all([
        client.fetch(STARTUP_BY_ID_QUERY, { id }),
        client.fetch(PLAYLIST_QUERY)
    ])
    const { select }: PlaylistSchemaType = playlist

    const playlistPosts = select?.map((
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
        <>
        {
            isNonEmptyObject(post) ?
                <>
                    <StartUpPageHero post={post} />
                    <StartUpPageMain
                        post={post}
                        id={id}
                    />
                    {
                        playlistPosts.length ?
                            <div className='max-w-4xl mx-auto'>
                                <h3 className='font-semibold text-xl text-black px-3 md:px-6 lg:px-0'>
                                    Artículos seleccionados:
                                </h3>
                                <ul className='grid sm:grid-cols-2 gap-5 mt-4 px-3 md:px-6 lg:px-0'>
                                    {
                                        playlistPosts.map((post: PlaylistStartupType) => {
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
                        :
                            null
                    }
                </>
            :
                notFound()
        }
        </>
    )
}

export default StartUpPageContainer;
