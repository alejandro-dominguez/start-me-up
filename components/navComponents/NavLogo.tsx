import Image from 'next/image';
import Link from 'next/link';

const NavLogo = () => {
  	return (
		<Link href='/'>
			<Image
				src='/logo.png'
				alt='Start me up logo'
				width={144}
				height={30}
			/>
		</Link>
  	)
};

export default NavLogo;
