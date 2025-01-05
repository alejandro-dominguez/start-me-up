import Image from 'next/image';
import Link from 'next/link';

const NavLogo = () => {
  	return (
		<Link
			href='/'
			className='justify-self-center xs:justify-self-auto mb-1 xs:mb-0'
		>
			<Image
				className='drop-shadow-sm'
				src='/logo.svg'
				alt='Start me up logo'
				width={100}
				height={100}
			/>
		</Link>
  	)
};

export default NavLogo;
