'use client'

import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

import UserInput from '@/components/user-input/user-input'

type PasswordProps = {
  handleSubmitAction: (e: FormEvent) => void
}

export default function PasswordForm({ handleSubmitAction }: PasswordProps) {
  const router = useRouter()

  return (
    <div>
      <form onSubmit={handleSubmitAction}>
        <UserInput
          label="Ingresa tu contraseña"
          showPasswordToggle={true}
          inputType="password"
        />

        <div className="footer-form">
          {/* Botón para recuperar contraseña */}
          <Button
            className="transparent-button"
            radius="full"
            onPress={() => {
              router.push('/login/forgot')
            }}
          >
            ¿Olvidaste la contraseña?
          </Button>

          {/* Botón para continuar */}
          <Button
            className="solid-button"
            color="primary"
            radius="full"
            type="submit"
          >
            Siguiente
          </Button>
        </div>
      </form>
    </div>
  )
}
