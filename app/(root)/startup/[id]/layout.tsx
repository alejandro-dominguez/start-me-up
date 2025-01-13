import { fetchStartUpData } from '@/lib/fetchRequests';
import { mainMetadata } from '@/metadata';
import { Metadata } from 'next';

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
    const { id } = await params
    const { post } = await fetchStartUpData(id)
    
    return {
        ...mainMetadata,
        title:
            post ?
                `${post.title} | ${post.author?.name} | Start Me Up`
            :
                'Artículo | Start Me Up',
    }
};

const StartUpPageLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {children}
        </>
    )
};

export default StartUpPageLayout;
