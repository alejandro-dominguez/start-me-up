import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import CreateStartUpPageHero from '@/components/createStartUpPageComponents/CreateStartUpPageHero';
import CreateStartUpForm from '@/components/createStartUpPageComponents/CreateStartUpForm';

const CreateStartUpPage = async () => {
    const session = await auth()

    if (!session) redirect('/')

    return (
        <div className='min-h-[100svh] bg-slate-100/30'>
            <CreateStartUpPageHero />
            <CreateStartUpForm />
        </div>
    )
};

export default CreateStartUpPage;
