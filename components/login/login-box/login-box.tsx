import Image from 'next/image'
import TextLeft from '@/components/heading/text-left'
import LoginForm from '@/components/login/login-form/login-form'

export default function LoginBox() {
  return (
    <div className="box-container">
      <Image
        alt="Logo"
        className="w-10 h-10 self-start mb-4"
        height={35}
        src="/assets/img/google-logo.png"
        width={35}
      />

      <div className="grid grid-cols-[7fr_7fr] gap-5 w-full">
        <TextLeft
          description="Con tu Cuenta de Google. Esta cuenta estará disponible para otras apps de Google en el navegador."
          heading="Acceder"
        />
        <LoginForm />
      </div>
    </div>
  )
}
