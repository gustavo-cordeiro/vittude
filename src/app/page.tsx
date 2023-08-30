import Image from 'next/image'
import { FC, InputHTMLAttributes } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen sm:bg-gradient-to-r bg-gradient-to-b to-vittude-primary from-50% from-white to-50%">
      <div className="container px-8 sm:w-[80.5%] sm:px-0 max-w-7xlxl mx-auto">
        <header className="flex justify-between items-center py-6">
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
        <section className="sm:flex -mt-20 py-20 min-h-screen items-center relative">
          <div className="sm:w-1/2 sm:pr-[13%] before:hidden sm:before:block sm:[content:.] before:right-0 before:top-0 before:w-1/2 before:absolute before:min-h-screen before:bg-no-repeat before:bg-[url('/illustration.png')] before:bg-[length:87.5%] before:bg-right">
            <h1 className="text-black text-[3rem] font-semibold mb-12 text-center sm:text-left">Bem-vindo a Vittude!</h1>
            <form className="sm:text-slate-700 text-slate-50 bg-vittude-primary sm:bg-transparent -mx-8 px-8 pt-5 sm:mx-0 sm:px-0 sm:pt-0">
              <label htmlFor="email">Login</label>
              <input type="text" placeholder="email@exemplo" id="email"/>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password"/>
              <button type="submit" className="bg-vittude-800 hover:bg-vittude-900 sm:hover:bg-vittude-700 sm:bg-vittude-primary  sm:border-none text-vittude-50 sm:text-white">Acessar</button>
            </form>
            <button className="bg-transparent border border-vittude-50 sm:border-vittude-primary hover:bg-vittude-400 sm:hover:bg-vittude-50 text-vittude-50 sm:text-vittude-primary">Esqueci minha senha</button>
          </div>
        </section>
      </div>
    </main>
  )
}
