import { mainMetadata } from '@/metadata';
import { fetchUserData } from '@/lib/fetchRequests';
import { Metadata } from 'next';

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
    const { id } = await params
    const { user } = await fetchUserData(id)

    return {
        ...mainMetadata,
        title:
            user ?
                `${user.name} | Página de Usuario | Start Me Up | Blog de Startups`
            : 
                'Start Me Up | Blog de Startups',
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
