import Link from 'next/link';

const NavLogo = () => {
  	return (
		<Link
			href='/'
			className='justify-self-center xs:justify-self-auto mb-1 xs:mb-0'
		>
			<img
				className='drop-shadow-sm w-[100px]'
				src='/logo.svg'
				alt='Start me up logo'
			/>
		</Link>
  	)
};

export default NavLogo;
