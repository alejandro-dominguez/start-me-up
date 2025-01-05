import { StartUpSchemaType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import MarkdownIt from 'markdown-it';

const md = MarkdownIt();

const StartUpPageInfo = ({ post }: { post: StartUpSchemaType }) => {
    const parsedContent = md.render(post.pitch || '')

    return (
        <div className='mt-6 max-w-4xl mx-auto'>
            <div className='flex'>
                <Link
                    href={`/user/${post.author?._id}`}
                    className='flex gap-3 items-center'
                >
                    <Image
                        src={post.author?.image || 'https://placehold.co/600x400.png'}
                        alt='avatar'
                        width={64}
                        height={64}
                        className='rounded-full drop-shadow-lg'
                    />
                    <div className='sm:space-x-2 flex flex-col sm:flex-row items-start sm:items-center'>
                        <span className='font-medium text-xl text-black mt-3 sm:mt-0 leading-6'>
                            {post.author?.name}
                        </span>
                    </div>
                </Link>
                <span className='text-[.95rem] sm:text-base font-medium ml-auto'>
                    {post.category}
                </span>
            </div>
            <h3 className='text-3xl font-bold text-black mt-3'>
                Pitch Details
            </h3>
            {
                parsedContent ?
                    <article
                        className='prose max-w-4xl break-all mt-2'
                        dangerouslySetInnerHTML={{ __html: parsedContent }}
                    />
                :
                    <p className='text-black-100 text-sm font-normal mt-2'>
                        No details provided
                    </p>
            }
        </div>
    )
};

export default StartUpPageInfo;
