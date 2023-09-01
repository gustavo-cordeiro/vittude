import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {email, password} = await request.json();

    if(!email) return NextResponse.json('An email must be provided', { status: 400, statusText: 'An email must be provided' });
    if(!password) return NextResponse.json('An password must be provided', { status: 400, statusText: 'An password must be provided' });

    if(password !== '1234') return NextResponse.json('User unauthorized', { status: 403, statusText: 'User unauthorized' }); 

    return new Response('', {
      status: 200,
      headers: { 'Set-Cookie': `credential=${email}; HttpOnly; path=/` },
    })
  } catch (error) {
    return NextResponse.json({}, { status: 501, statusText: JSON.stringify(error) }); 
  }
}

