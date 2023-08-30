import Form from './form';
import Button from '~/components/button'

export default function Login() {
  return (    
    <section className="-mt-20 py-20 min-h-screen items-center relative sm:flex">
      <div className="before:hidden before:right-0 before:top-0 before:w-1/2 before:absolute before:min-h-screen before:bg-no-repeat before:bg-[url('/illustration.png')] before:bg-[length:87.5%] before:bg-right sm:w-1/2 sm:pr-[13%] sm:before:block [content:.]">
        <h1 className="text-black text-[3rem] font-semibold mb-12 text-center sm:text-left">Bem-vindo a Vittude!</h1>
        <Form />
        <Button variant='outline' className="max-sm:bg-transparent max-sm:border max-sm:border-vittude-50 max-sm:text-vittude-50 max-sm:hover:bg-vittude-400">
          Esqueci minha senha  
        </Button>
      </div>
    </section>
  )
}
