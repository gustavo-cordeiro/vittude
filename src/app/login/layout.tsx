import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acessar Vittude',
  description: 'Página para acessar a plataforma Vittude',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen sm:bg-gradient-to-r bg-gradient-to-b to-vittude-primary from-50% from-white to-50%">
      <div className="container px-8 sm:w-[80.5%] sm:px-0 max-w-7xlxl mx-auto">
        <header className="flex justify-between items-center py-6 z-10">
          <div>
            <a href='/' title='Vittude home page'>
              <span className="-indent-[9999em] inline-block bg-image bg-cover bg-no-repeat bg-[url('/vittude-care.png')] sm:w-[107px] w-[67px] sm:h-8 h-5">Vittude</span>
            </a>
          </div>
          <nav>
            <ul className="flex justify-around gap-5 sm:gap-10 leading-6 text-sm sm:text-base text-slate-700 sm:text-inherit">
              <li><a href="#">Site Institucional</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#"><span className="-indent-[9999em] inline-block bg-slate-700 sm:bg-white [mask:url('/public.svg')_no-repeat_center] w-6 h-6">Social</span></a></li>
            </ul>
          </nav>
        </header>
        {children}
      </div>
    </main>
  )
}
