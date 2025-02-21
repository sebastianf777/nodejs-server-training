import Image from 'next/image'
import LoginText from '@/components/heading/login-text'
import ForgotForm from '@/components/login/forgot/forgot-form/forgot-form'

export default function ForgotBox() {
  return (
    <div className="box-container">
      <Image
        alt="Logo"
        className="w-10 h-10 self-start mb-4"
        height={35}
        src="/assets/img/google-logo.png"
        width={35}
      />

      <div className="grid grid-cols-2 gap-5 w-full">
        <LoginText
          description="Ingresa tu número de teléfono o correo de recuperación."
          heading="Buscar tu correo electrónico"
        />
        <ForgotForm />
      </div>
    </div>
  )
}
