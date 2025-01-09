import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { mainMetadata } from '@/metadata';
import CreateStartUpPageHero from '@/components/createStartUpPageComponents/CreateStartUpPageHero';
import CreateStartUpForm from '@/components/createStartUpPageComponents/CreateStartUpForm';

export const metadata: Metadata = {
    ...mainMetadata,
    title: 'Crea tu artículo | Start Me Up'
};

const CreateStartUpPage = async () => {
    const session = await auth()

    if (!session) redirect('/')

    return (
        <div className='min-h-[100svh] '>
            <CreateStartUpPageHero />
            <CreateStartUpForm />
        </div>
    )
};

export default CreateStartUpPage;
