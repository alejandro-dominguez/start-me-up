import { StartUpSchemaType } from '@/types';
import StartUpPageHero from '@/components/startUpPageComponents/StartUpPageHero';
import StartUpPageMain from '@/components/startUpPageComponents/StartUpPageMain';

const StartUpPageContainer = ({
    post,
    id
}: {
    post: StartUpSchemaType,
    id: string
}) => {
    return (
        <>
            <StartUpPageHero post={post} />
            <StartUpPageMain
                post={post}
                id={id}
            />
        </>
    )
}

export default StartUpPageContainer;
