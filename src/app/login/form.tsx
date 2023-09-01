"use client"

import { ChangeEvent, MouseEvent, FormEvent, useRef, useState, useEffect } from "react";
import Button from "~/components/button";
import { useDebounce } from "~/hooks/useDebounce";
import Image from "next/image";
import { useFetch } from "~/hooks/useFetch";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const {loading, data, error, load} = useFetch();
  const [showPWD, setShowPWD] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(data && !error) router.push('/');
    console.log(error)
    if(error?.status === 403) {
      emailRef.current?.setCustomValidity('Login ou Senha invalidos')
    }
  }, [data, error, router])

  const debouceValidation = useDebounce<ChangeEvent<HTMLInputElement>>(e => {
    emailRef.current?.setCustomValidity('')
    pwdRef.current?.setCustomValidity('')
    e.target?.reportValidity();
  }, 400);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /*
      We define the input fields as required
      to validate the form after a first interaction,
      preventing the first time were the field is rendered
      empty from being considered an error
    */
    emailRef.current?.setAttribute('required', 'true');
    pwdRef.current?.setAttribute('required', 'true');

    pwdRef.current?.reportValidity();
    emailRef.current?.reportValidity();

    if(pwdRef.current?.validity && emailRef.current?.validity) {
      load('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          email: emailRef.current?.value,
          password: pwdRef.current?.value,
        })
      })
    }
  };

  const togglePWD = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPWD(!showPWD);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="-mx-8 px-8 pt-5 text-slate-50 bg-vittude-primary sm:bg-transparent sm:mx-0 sm:px-0 sm:pt-0 sm:text-slate-700"
    >
      <label htmlFor="email">Login</label>
      <input type="email" ref={emailRef} onChange={debouceValidation} placeholder="email@exemplo" id="email" className="invalid:border-red-600" />
      
      <label htmlFor="password">Senha</label>
      <input type={showPWD ? "text" : "password"} ref={pwdRef} id="password" onChange={debouceValidation} className="pr-14"/>
      <Button 
        onClick={togglePWD}
        className="w-auto bg-transparent float-right -mt-[68px] z-10 hover:bg-slate-200/50">
        <Image src={`/${showPWD ? 'closed-' : ''}eye.png`} width={24} height={24} alt={showPWD ? 'Esconder Senha' : 'Exibir Semha'}/>
      </Button>
      <Button
        itemType="submit"
        disabled={loading}
        onClick={() => {
          // emailRef.current?.setCustomValidity('')
          // pwdRef.current?.setCustomValidity('')
        }}
        className={` max-sm:bg-vittude-800 max-sm:hover:bg-vittude-900 max-sm:text-vittude-50`}
      >
        Acessar
      </Button>
    </form>
  )
}