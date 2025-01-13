import { mainMetadata } from '@/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
    ...mainMetadata,
    title: 'Crea tu artículo | Start Me Up'
};

const CreatePageLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {children}
        </>
    )
};

export default CreatePageLayout;
