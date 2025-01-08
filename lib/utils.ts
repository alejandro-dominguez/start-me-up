import {
    clsx,
    type ClassValue
} from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
};

export const formatDate = (date: string): string => {
    if (!date || !/^\d{4}-\d{2}-\d{2}T/.test(date)) {
        return 'Fecha inválida'
    }
    const [year, month, day] = date.split('T')[0].split('-')
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
        'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]
    return `${parseInt(day, 10)} de ${months[parseInt(month, 10) - 1]} de ${year}`
};

export const parseServerActionResponse = <T>(response: T) => {
    return JSON.parse(JSON.stringify(response))
};

export const isNonEmptyObject = (value: unknown): boolean => {
    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        Object.keys(value).length > 0
    )
};
