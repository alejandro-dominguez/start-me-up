import { StartUpSchemaType } from '@/types';
import Link from 'next/link';
import MarkdownIt from 'markdown-it';
import StartUpAuthorCustomImg from '../imgComponents/StartUpAuthorCustomImg';

const md = MarkdownIt();

const StartUpPageInfo = ({ post }: { post: StartUpSchemaType }) => {
    const parsedContent = md.render(post.pitch || '')

    return (
        <div className='mt-7 max-w-4xl mx-auto'>
            <div className='flex'>
                <Link
                    href={`/user/${post.author?._id}`}
                    className='flex gap-3 sm:items-center items-end mt-2'
                >
                    <StartUpAuthorCustomImg
                        url={post.author?.image || 'https://placehold.co/400x400.png'}
                        alt='imagen de avatar del autor'
                        twClassName='size-[60px] saturate-[1.25] brightness-110 contrast-[1.1]
                        rounded-full drop-shadow-[0_0_1px_rgba(0,0,0,0.5)]'
                    />
                    <div className='sm:space-x-2 flex flex-col sm:flex-row
                    items-start sm:items-center'>
                        <span className='font-medium text-xl text-black
                        leading-6 tracking-[.005em] pr-5'>
                            {post.author?.name}
                        </span>
                    </div>
                </Link>
                <span className='text-[.95rem] sm:text-base font-medium ml-auto'>
                    {post.category}
                </span>
            </div>
            <h3 className='text-3xl font-bold text-black mt-5 leading-8'>
                Detalles de la Propuesta
            </h3>
            {
                parsedContent ?
                    <article
                        className='prose max-w-4xl break-all mt-6'
                        dangerouslySetInnerHTML={{ __html: parsedContent }}
                    />
                :
                    <p className='text-black-100 text-sm font-normal mt-4'>
                        No se han provisto detalles
                    </p>
            }
        </div>
    )
};

export default StartUpPageInfo;
