import Image from 'next/image';
import Link from 'next/link';

const NavLogo = () => {
  	return (
		<Link href='/'>
			<Image
				className='w-[85px] sm:w-[100px]'
				src='/logo.png'
				alt='Start me up logo'
				height={53.13}
				width={100}
				priority={true}
			/>
		</Link>
  	)
};

export default NavLogo;
