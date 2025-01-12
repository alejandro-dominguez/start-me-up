import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { mainMetadata } from '@/metadata';
import { Suspense } from 'react';
import CreateStartUpPageHero from '@/components/createStartUpPageComponents/CreateStartUpPageHero';
import CreateStartUpPageSkeleton from '@/components/createStartUpPageComponents/CreateStartUpPageSkeleton';
import CreateStartUpForm from '@/components/createStartUpPageComponents/CreateStartUpForm';

export const metadata: Metadata = {
    ...mainMetadata,
    title: 'Crea tu artículo | Start Me Up'
};

const CreateStartUpPage = async () => {
    const session = await auth()

    if (!session) redirect('/')

    return (
        <Suspense fallback={<CreateStartUpPageSkeleton />}>
            <div className='min-h-[100svh] bg-slate-200/20'>
                <CreateStartUpPageHero />
                <CreateStartUpForm />
            </div>
        </Suspense>
    )
};

export default CreateStartUpPage;
