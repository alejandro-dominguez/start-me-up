import { mainMetadata } from '@/metadata';
import { client } from '@/sanity/lib/client';
import { Metadata } from 'next';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import UserContainer from '@/containers/UserContainer';

export const experimental_ppr = true;

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params
    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id })

    return {
        ...mainMetadata,
        title: user ? `Start Me Up | Usuario: ${user.name}` : 'Start Me Up | blog de startups',
    }
};

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id
    
    return (
        <div className='min-h-[100svh] bg-slate-200/20'>
            <UserContainer id={id} />
        </div>
    )
};

export default UserPage;
