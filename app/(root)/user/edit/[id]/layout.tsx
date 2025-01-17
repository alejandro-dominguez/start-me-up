import { fetchUserData } from '@/lib/fetchcalls';
import { mainMetadata } from '@/metadata';
import { Metadata } from 'next';

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
    const { id } = await params
    const { user } = await fetchUserData(id)

    return {
        ...mainMetadata,
        title:
            user ?
                `Preferencias del Perfil | ${user.name} | Start Me Up | Blog de Startups`
            : 
                'Preferencias del Perfil | Start Me Up | Blog de Startups',
    }
};

const UserEditPageLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {children}
        </>
    )
};

export default UserEditPageLayout;
