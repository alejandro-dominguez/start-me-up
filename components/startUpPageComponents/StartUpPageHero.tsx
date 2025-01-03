import { formatDate } from '@/lib/utils';
import { StartUpSchemaType } from '@/types';

const StartUpPageHero = ({ post } : { post: StartUpSchemaType }) => {
    const {
        _createdAt,
        title,
        description
    } = post

    return (
        <section className='w-full bg-primary pattern grid place-items-center
        pt-[2.45rem] pb-[1.12rem] px-3 md:px-6 shadow-sm'>
            <span className='bg-secondary-100 px-6 py-[.35rem] font-bold rounded-sm
            uppercase relative tag-decoration -mt-4 mb-4 text-[.95rem] tracking-wide
            shadow-sm shadow-black/10'>
                <span className='drop-shadow'>
                    {formatDate(_createdAt)}
                </span>
            </span>
            <h1 className='uppercase bg-black px-10 py-5 font-extrabold
            text-white sm:text-4xl sm:leading-[2.75rem] tracking-wide text-2xl
            leading-7 max-w-5xl text-center'>
                {title}
            </h1>
            <h2 className='font-medium text-xl text-white max-w-3xl text-center break-words
            mt-3 drop-shadow leading-6'>
                {description}
            </h2>
        </section>
    )
};

export default StartUpPageHero;
