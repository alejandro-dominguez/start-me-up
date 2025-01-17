import { fetchStartUpData } from '@/lib/fetchcalls';
import { mainMetadata } from '@/metadata';
import { Metadata } from 'next';

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
    const { id } = await params
    const { post } = await fetchStartUpData(id)
    
    return {
        ...mainMetadata,
        title:
            post ?
                `Editar ${post.title} | ${post.author?.name} | Start Me Up | Blog de Startups`
            :
                'Editar artículo | Start Me Up | Blog de Startups',
    }
};

const StartUpEditPageLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {children}
        </>
    )
};

export default StartUpEditPageLayout;
