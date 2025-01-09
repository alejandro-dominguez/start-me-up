import Image from 'next/image';

const UserCard = (
    { user }:
    { user: 
        {
            name: string,
            email: string,
            image: string
        }
    }
) => {
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
                <Image
                    src={user.image}
                    alt={user.name}
                    width={110}
                    height={110}
                    className='rounded-full object-cover object-center border-[5.5px]
                    border-black shadow shadow-black/15'
                />
                <p className='font-bold text-white text-[1.05rem] xs:text-[1.4rem] mt-3
                text-center drop-shadow md:min-w-fit line-clamp-1 px-3'>
                    {user.email}
                </p>
            </div>
        </div>
    )
}

export default UserCard;
