import { Copyright } from 'lucide-react';

const FooterCopyright = () => {
    return (
        <small className='flex flex-col items-start pl-4 lg:pl-10'>
            <span className='flex items-center gap-1'>
                <Copyright size={15} />
                2025
            </span>
            <span className='hidden xs:block'>
                Alejandro Dminguez
            </span>
            <span className='mt-[.05rem] flex flex-col items-center xs:hidden'>
                Alejandro
                <span className='-mt-1'>
                    Dminguez
                </span>
            </span>
        </small>
    )
};

export default FooterCopyright;
