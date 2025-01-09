import Link from 'next/link';

const NavLogo = () => {
  	return (
		<Link
			href='/'
			className='justify-self-center xs:justify-self-auto -mt-[.15rem] xs:-mt-0'
		>
			<img
				className='drop-shadow-[0_0_0.25px_rgba(0,0,0,0.025)] w-[85px] sm:w-[100px]'
				src='/logo.svg'
				alt='Start me up logo'
			/>
		</Link>
  	)
};

export default NavLogo;
