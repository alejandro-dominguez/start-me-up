import { auth } from '@/auth';

const NotFoundSearchbarQueryText = async () => {
    const session = await auth()

    return (
        <p className='font-semibold text-[1.35rem] mt-[.85rem] md:mt-6 mb-3 md:mb-0
        flex flex-col md:flex-row items-center justify-between'>
            <span>
                Todas las Startups:
            </span>
            {
                session && session?.user ?
                    null
                :
                    <span className='text-[1.07rem] md:text-lg
                    text-primary-200 drop-shadow-sm text-center
                    px-8 xs:px-16 md:pl-0 md:pr-1 leading-[1.4rem]'>
                        ¡Loguea fácilmente para sumar tus startups!
                    </span>
            }
        </p>
    )
};

export default NotFoundSearchbarQueryText;
