import { replaceDotCom } from '@/lib/utils';
import { Settings } from 'lucide-react';
import CustomImg from '../imgComponents/CustomImg';
import Link from 'next/link';

const UserCard = (
    {
        user,
        id
    }:
    {
        user: 
            {
                name: string,
                email: string,
                image: string,
                emailShown: boolean,
                isAdmin: boolean
            },
        id: string
    }
) => {
    const userEmail = replaceDotCom(user.email)

    return (
        <div className='flex flex-col justify-center mt-[3.75rem] xs:mt-[4.2rem] md:mt-[4.5rem] mx-auto
        md:ml-0 md:mr-7 lg:mr-9 min-w-72 sm:min-w-[28rem] items-center bg-primary
        border-[5px] border-black shadow-100 h-[15rem] rounded-[30px] relative z-0'>
            <div className='profile-title'>
                <h3 className='text-2xl font-black text-black uppercase tracking-[.01em] max-w-[12.8rem]
                xs:max-w-80 md:min-w-[21.5rem] text-center leading-[1.6rem] xs:leading-normal'>
                    {user.name}
                </h3>
            </div>
            <div className='mt-9 xs:mt-[1.35rem] px-7 lg:px-0 grid place-items-center'>
                <CustomImg
                    url={user.image || 'https://placehold.co/110x110.png'}
                    alt={`imagen de avatar de ${user.name}` || 'imagen de avatar del usuario'}
                    twClassName='rounded-full object-cover object-center border-[5.5px]
                    border-black shadow shadow-black/10'
                    width={110}
                    height={110}
                    placeholderUrl='https://placehold.co/110x110.png'
                />
                {
                    user.emailShown ?
                        <p className='font-bold text-white text-[1.05rem] xs:text-[1.4rem] mt-3
                        text-center drop-shadow md:min-w-fit line-clamp-1 px-3'>
                            {userEmail}
                        </p>
                    :
                        null
                }
                <Link
                    href={`/user/edit/${id}`}
                    className=''
                >
                    <span>
                        Editar preferencias
                    </span>
                    <Settings />
                </Link>
            </div>
        </div>
    )
}

export default UserCard;
