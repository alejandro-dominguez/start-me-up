import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import CreateStartUpPageHero from '@/components/createStartUpPageComponents/CreateStartUpPageHero';
import CreateStartUpPageSkeleton from '@/components/createStartUpPageComponents/CreateStartUpPageSkeleton';
import CreateStartUpForm from '@/components/createStartUpPageComponents/CreateStartUpForm';

const CreateStartUpPage = async () => {
    const session = await auth()

    if (!session) redirect('/')

    return (
        <Suspense fallback={<CreateStartUpPageSkeleton />}>
            <div className='min-h-[100svh] bg-[#F9FAFC]'>
                <CreateStartUpPageHero />
                <CreateStartUpForm />
            </div>
        </Suspense>
    )
};

export default CreateStartUpPage;
