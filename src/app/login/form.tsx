import Button from "~/components/button";

export default function LoginForm () {
  return (
    <form className="-mx-8 px-8 pt-5 text-slate-50 bg-vittude-primary sm:bg-transparent sm:mx-0 sm:px-0 sm:pt-0 sm:text-slate-700">
      <label htmlFor="email">Login</label>
      <input type="email" placeholder="email@exemplo" id="email"/>
      <label htmlFor="password">Senha</label>
      <input type="password" id="password"/>
      <Button itemType="submit" className={`max-sm:bg-vittude-800 max-sm:hover:bg-vittude-900 max-sm:text-vittude-50`}>Acessar</Button>
    </form>
  )
}