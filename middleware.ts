import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from 'jose'
export async function middleware(req: NextRequest,) {
    const jwt = req.cookies.get('enag_session')
    if (jwt === undefined) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
    try {
        const { value } = jwt
        await jwtVerify(value, new TextEncoder().encode('secret'))
        return NextResponse.next()
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: ['/my/:path*', '/admin/:path*', '/teacher/:path*']
}