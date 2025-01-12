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
import { Suspense } from 'react';
import StartUpPageHero from '@/components/startUpPageComponents/StartUpPageHero';
import StartUpPageMain from '@/components/startUpPageComponents/StartUpPageMain';
import EditorStartUpCard from '@/components/cards/EditorStartUpCard';
import StartUpCardSkeleton from '@/components/cards/StartUpCardSkeleton';

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
            category,
            slug,
            image,
            _createdAt,
            approved
        }) => ({
            _id,
            title,
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
                    <div className='max-w-4xl mx-auto px-4 md:px-2 lg:px-0 pb-10 mb-4 w-full'>
                        {
                            playlistPosts.length ?
                                <h3 className='font-semibold text-xl text-black lg:px-0'>
                                    Artículos seleccionados para vos:
                                </h3>
                            :
                                null
                        }
                        <ul className='mt-5 grid grid-cols-1 sm:grid-cols-2
                        lg:grid-cols-3 gap-8 md:gap-4 lg:gap-5 w-full'>
                            <Suspense fallback={<StartUpCardSkeleton />}>
                                {
                                    playlistPosts.length ?
                                        playlistPosts.map((post: PlaylistStartupType) => {
                                            return (
                                                <EditorStartUpCard
                                                    key={post._id}
                                                    post={post}
                                                />
                                            )
                                        })
                                    :
                                        null
                                }
                            </Suspense>
                        </ul>
                    </div>
                </>
            :
                notFound()
        }
        </>
    )
}

export default StartUpPageContainer;
