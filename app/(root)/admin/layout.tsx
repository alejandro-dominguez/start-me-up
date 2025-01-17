import { mainMetadata } from '@/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
    ...mainMetadata,
    title: 'Administrador | Start Me Up | Blog de Startups'
};

const AdminPageLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {children}
        </>
    )
};

export default AdminPageLayout;
