import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const credential = request.cookies.get('credential')?.value;
  if(!credential) {
     return NextResponse.redirect(new URL('/login',request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|login|static|.*\\..*|_next).*)',
  ],
}