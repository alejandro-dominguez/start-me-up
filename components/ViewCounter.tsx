import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/writeClient';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { after } from 'next/server';
import ViewPing from './viewCounterComponents/ViewPing';

const ViewCounter = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client.withConfig(
        { useCdn: false}).fetch(STARTUP_VIEWS_QUERY, { id }
    )
    
    after(async () => await writeClient.patch(id)
        .set({ views: totalViews + 1 })
        .commit()
    )

    return (
        <div className='flex justify-end items-center mt-5 fixed bottom-3 right-3'>
            <div className='absolute -top-2 -right-2 z-10'>
                <ViewPing />
            </div>
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
