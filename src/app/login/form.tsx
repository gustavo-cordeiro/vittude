"use client"

import { ChangeEvent, FormEvent, useRef } from "react";
import Button from "~/components/button";
import { useDebounce } from "~/hooks/useDebounce";

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  const debouceValidation = useDebounce<ChangeEvent<HTMLInputElement>>(e => {
    e.target?.reportValidity();
  }, 400);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /*
      We define the input fields as required
      to validate the form after a first interaction,
      preventing the first time the field is rendered
      empty from being considered an error
    */
    emailRef.current?.setAttribute('required', 'true');
    pwdRef.current?.setAttribute('required', 'true');

    pwdRef.current?.setCustomValidity('');
    emailRef.current?.setCustomValidity('');

    pwdRef.current?.reportValidity();
    emailRef.current?.reportValidity();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="-mx-8 px-8 pt-5 text-slate-50 bg-vittude-primary sm:bg-transparent sm:mx-0 sm:px-0 sm:pt-0 sm:text-slate-700"
    >
      <label htmlFor="email">Login</label>
      <input type="email" ref={emailRef} onChange={debouceValidation} placeholder="email@exemplo" id="email" className="invalid:border-red-600" />
      
      <label htmlFor="password">Senha</label>
      <input type="password" ref={pwdRef} id="password" onChange={debouceValidation} />
      
      <Button itemType="submit"
        className={` max-sm:bg-vittude-800 max-sm:hover:bg-vittude-900 max-sm:text-vittude-50`}
      >
        Acessar
      </Button>
    </form>
  )
}