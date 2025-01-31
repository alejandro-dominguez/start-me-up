import { mainMetadata } from '@/metadata';
import { fetchUserData } from '@/lib/fetchcalls';
import { Metadata } from 'next';

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
    const { id } = await params
    const { user } = await fetchUserData(id)

    return {
        ...mainMetadata,
        title:
            user ?
                `${user.name} | Start Me Up | Blog de Startups`
            : 
                'Página de Usuario | Start Me Up | Blog de Startups',
    }
};

const UserLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {children}
        </>
    )
};

export default UserLayout;
