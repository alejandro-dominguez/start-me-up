import { NextResponse } from 'next/server';

export function middleware(request: Request) {
    const url = new URL(request.url)

    if (url.pathname === '/' && !url.searchParams.has('page')) {
        url.searchParams.set('page', '1')
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
};
