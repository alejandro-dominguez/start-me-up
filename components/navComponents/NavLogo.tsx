import Image from 'next/image';
import Link from 'next/link';

const NavLogo = () => {
  	return (
		<Link href='/'>
			<Image
				className='hidden sm:block'
				src='/logo.png'
				alt='Start me up logo'
				height={53.13}
				width={100}
			/>
			<Image
				className='block sm:hidden'
				src='/logo.png'
				alt='Start me up logo'
				height={45.16}
				width={85}
			/>
		</Link>
  	)
};

export default NavLogo;
