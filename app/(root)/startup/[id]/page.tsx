import type { Metadata } from 'next';
import { mainMetadata } from '@/metadata';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import StartUpPageContainer from '@/containers/StartUpPageContainer';

export const experimental_ppr = true;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params
    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id })

    return {
        ...mainMetadata,
        title: post? `${post.title} | ${post.author.name} | Start Me Up` : 'Artículo | Start Me Up',
    }
};

const StartUpPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id

    return (
        <div className='min-h-[100svh] bg-[#F9FAFC]'>
            <StartUpPageContainer id={id} />
        </div>
    )
};

export default StartUpPage;
