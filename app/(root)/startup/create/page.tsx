import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import CreateStartUpPageHero from '../../../../components/createStartUpPageComponents/CreateStartUpPageHero';
import CreateStartUpForm from '../../../../components/createStartUpPageComponents/CreateStartUpForm';

const CreateStartUpPage = async () => {
    const session = await auth()

    if (!session) redirect('/')

    return (
        <>
            <CreateStartUpPageHero />
            <CreateStartUpForm />
        </>
    )
};

export default CreateStartUpPage;
