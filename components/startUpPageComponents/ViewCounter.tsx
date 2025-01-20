import { writeClient } from '@/sanity/lib/writeClient';
import { after } from 'next/server';

export const experimental_ppr = true;

const ViewCounter = async (
    {
        totalViews,
        id
    }: {
        totalViews: number,
        id: string
    }) => {
    
    after(async () => await writeClient.patch(id)
        .set({ views: totalViews + 1 })
        .commit()
    )

    return (
        <div className='flex justify-end items-center mt-5 fixed bottom-3 right-3 z-10'>
            <div className='flex gap-2 font-black text-[.975rem] tracking-wider bg-primary
            px-3 py-[.45rem] rounded-lg shadow-sm shadow-black/20 relative'>
                <span className='z-10'>
                    Vistas:
                </span>
                <span className='z-10'>
                    {totalViews}
                </span>
                <div className='absolute w-full h-full bg-primary-100/80 inset-0 rounded-lg' />
            </div>
        </div>
    )
};

export default ViewCounter;
