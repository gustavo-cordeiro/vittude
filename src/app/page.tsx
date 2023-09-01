import { cookies } from 'next/headers'
export default function Home() {
  const cookiesStore = cookies();
  return (
    <h1 className='flex h-screen w-screen text-[8vw] items-center justify-center'>
      Olá {cookiesStore.get('credential')?.value}
    </h1>
  )
}
