'use client';
import { 
    useActionState,
    useState
} from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { createStartup } from '@/lib/actions';
import { createStartupSchema } from '@/lib/validation';
import MDeditor from '@uiw/react-md-editor';
import Form from 'next/form';

const CreateStartUpForm = () => {
    const [ pitch, setPitch ] = useState('')
    const { toast } = useToast()
    const router = useRouter()

    const handleSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                category: formData.get('category') as string,
                image: formData.get('image') as string,
                pitch,
            }
            await createStartupSchema.parseAsync(formValues)
            const result = await createStartup(prevState, formData, pitch)
            if (result.status == 'SUCCESS') {
                toast({
                    title: '¡Genial!',
                    description: 'Tu propuesta de startup fue creada con éxito.',
                })
                router.push(`/startup/${result._id}`)
            }
            return result
        } catch (error) {
            if (error instanceof z.ZodError) {
                toast({
                    title: 'Error',
                    description: 'Por favor revisa los datos utilizados e intenta de nuevo',
                    variant: 'destructive',
                })
                return {
                    ...prevState,
                    error: 'Validation failed',
                    status: 'ERROR'
                }
            }
            toast({
                title: 'Error',
                description: 'An unexpected error has occurred',
                variant: 'destructive',
            })
            return {
                ...prevState,
                error: 'An unexpected error has occurred',
                status: 'ERROR',
            }
        }
    }

    const [ state , formAction, isPending ] = useActionState(handleSubmit, { error: '', status: 'INITIAL' })

    return (
        <Form
            action={formAction}
            className='mx-auto mt-5 space-y-8 px-4 md:px-20 lg:px-44 pb-10'
        >
            <main className='flex flex-col items-start justify-center gap-[.6rem]'>
                <div className='grid grid-cols-1 md:grid-cols-3 w-full md:gap-8'>
                    <div className='md:col-span-2'>
                        <label
                            htmlFor='title'
                            className='font-bold text-base text-black'
                        >
                            Título
                        </label>
                        <Input
                            id='title'
                            name='title'
                            className='border-[3px] border-black px-4 py-[1.375rem] text-lg text-black
                            font-semibold rounded-full mt-[.65rem] placeholder:text-black-300 bg-white'
                            required
                            placeholder='Título de tu startup'
                        />
                    </div>
                    <div className='mt-4 md:mt-0'>
                        <label
                            htmlFor='category'
                            className='font-bold text-base text-black'
                        >
                            Categoría
                        </label>
                        <Input
                            id='category'
                            name='category'
                            className='border-[3px] border-black px-4 py-[1.375rem] text-lg text-black
                            font-semibold rounded-full mt-[.65rem] placeholder:text-black-300 bg-white'
                            required
                            placeholder='Tecnología, salud, economía, etc.'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 w-full md:gap-8'>
                    <div
                        data-color-mode='light'
                        className='md:col-span-2 mt-[.35rem] md:mt-0'
                    >
                        <label
                            htmlFor='pitch'
                            className='font-bold text-base text-black'
                        >
                            Propuesta
                        </label>
                        <MDeditor
                            id='pitch'
                            value={pitch}
                            onChange={(value) => setPitch(value as string)}
                            aria-required={true}
                            preview='edit'
                            className='mt-[.7rem] bg-white'
                            height={200}
                            style={{
                                borderRadius: 20, overflow: 'hidden',
                            }}
                            textareaProps={{
                                placeholder: 'Describe brevemente la idea de tu startup y qué problema soluciona'
                            }}
                            previewOptions={{
                                disallowedElements: ['style']
                            }}
                        />
                    </div>
                    <div className='mt-4 md:mt-0 flex flex-col-reverse md:flex-col'>
                        <div className='mt-4 md:mt-0'>
                            <label
                                htmlFor='description'
                                className='font-bold text-base text-black'
                            >
                                Descripción
                            </label>
                            <Textarea
                                id='description'
                                name='description'
                                className='px-4 py-3 text-lg text-black font-semibold
                                mt-[.65rem] placeholder:text-black-300 border-[3px]
                                border-black rounded-[20px] min-h-28 bg-white'
                                required
                                placeholder='Descripción de tu startup'
                            />
                        </div>
                        <div className='md:mt-3'>
                            <label
                                htmlFor='image'
                                className='font-bold text-base text-black'
                            >
                                Url de imagen
                            </label>
                            <Input
                                id='image'
                                name='image'
                                className='border-[3px] border-black px-4 py-[1.375rem] text-lg text-black
                                font-semibold rounded-full mt-[.65rem] placeholder:text-black-300 bg-white'
                                required
                                placeholder='Url de portada'
                            />
                        </div>
                    </div>
                </div>
                <Button
                    type='submit'
                    className='bg-[#ff2067] border-[3.75px] border-black rounded-full
                    text-white self-center mt-4 hover:bg-[#ff0051] transition-colors
                    shadow-sm shadow-black/20 w-[296px] py-6'
                    disabled={isPending}
                >
                    <div className='relative w-full h-full grid place-items-center'>
                        <span className='font-bold drop-shadow text-[1.3rem] absolute left-5 tracking-wide'>
                            {
                                isPending ?
                                    'Enviando...'
                                :
                                    'Enviar Tu Startup'
                            }
                        </span>
                        <Send className='absolute drop-shadow scale-150 text-secondary-100
                        -top-[.4rem] right-5' />
                    </div>
                </Button>
            </main>
        </Form>
    )
};

export default CreateStartUpForm;
