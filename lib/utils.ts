import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
};

export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
};

export const shortenUsername = (input: string | null | undefined) => {
    return input ? input.split(' ')[0] : '';
};

export const parseServerActionResponse = <T>(response: T) => {
    return JSON.parse(JSON.stringify(response))
};
