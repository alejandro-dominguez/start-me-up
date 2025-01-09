import Link from 'next/link';

const NavLogo = () => {
  	return (
		<Link
			href='/'
			className='justify-self-center xs:justify-self-auto -mt-[.15rem] xs:-mt-0'
		>
			<img
				className='drop-shadow-sm w-[85px] sm:w-[100px]'
				src='/logo.svg'
				alt='Start me up logo'
			/>
		</Link>
  	)
};

export default NavLogo;
