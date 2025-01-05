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
        <div className=' pt-[3.75rem] xs:pt-[3.1rem] pb-5 xs:pb-7 flex flex-col justify-center
        items-center bg-primary border-[5px] border-black shadow-100 max-h-[15.5rem]
        rounded-[30px] relative z-0 md:min-w-[29.5rem] md:max-w-[29.5rem]'>
            <div className='profile-title'>
                <h3 className='text-2xl font-black text-black uppercase tracking-[.01em] max-w-52
                xs:max-w-80 md:min-w-[21.5rem] text-center leading-[1.6rem] xs:leading-normal'>
                    {user.name}
                </h3>
            </div>
            <Image
                src={user.image}
                alt={user.name}
                width={110}
                height={110}
                className='rounded-full object-cover object-center border-[4.5px]
                border-black shadow shadow-black/20'
            />
            <p className='font-bold text-white text-[1.05rem] xs:text-2xl mt-3 xs:mt-4
            text-center drop-shadow md:min-w-fit'>
                {user.email}
            </p>
        </div>
    )
}

export default UserCard;
