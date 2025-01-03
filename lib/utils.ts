import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
};

export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
};

export function shortenUsername(input: string | null | undefined): string {
    return input ? input.split(' ')[0] : '';
};
