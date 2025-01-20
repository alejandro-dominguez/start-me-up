import {
    defineField,
    defineType
} from 'sanity';
import { UserRoundCog } from 'lucide-react';

export const admin = defineType({
    name: 'admin',
    title: 'Admin',
    type: 'document',
    icon: UserRoundCog,
    fields: [
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'email',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'url'
        }),
        defineField({
            name: 'emailShown',
            type: 'boolean'
        }),
    ],
    preview: {
        select: { title: 'name'}
    }
});
