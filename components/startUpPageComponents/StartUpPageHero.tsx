import { formatDate } from '@/lib/utils';
import { StartUpSchemaType } from '@/types';

const StartUpPageHero = ({ post } : { post: StartUpSchemaType }) => {
    const {
        _createdAt,
        title,
        description
    } = post

    return (
        <section className='bg-primary pattern grid place-items-center
        pt-12 pb-7 px-3 md:px-6 shadow-sm'>
            <span className='bg-secondary-100 px-6 py-[.35rem] font-bold rounded-sm
            uppercase relative tag-decoration -mt-4 mb-[1.2rem] text-[.95rem] tracking-wide
            shadow-sm shadow-black/10'>
                <span className='drop-shadow'>
                    {formatDate(_createdAt)}
                </span>
            </span>
            <div className='px-4 xs:px-0'>
                <h1 className='uppercase bg-black px-6 xs:px-10 py-5 xs:py-6 font-extrabold
                text-white sm:text-4xl sm:leading-[2.75rem] tracking-wide text-3xl
                leading-9 xs:max-w-5xl text-center'>
                    {title}
                </h1>
            </div>
            <h2 className='font-medium text-lg sm:text-xl text-white max-w-3xl
            text-center break-words mt-4 drop-shadow'>
                {description}
            </h2>
        </section>
    )
};

export default StartUpPageHero;
