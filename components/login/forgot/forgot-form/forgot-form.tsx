'use client'

import { Button, Alert } from '@heroui/react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import UserInput from '@/components/user-input/user-input'

export default function ForgotForm() {
  const router = useRouter()
  const [alerts, setAlerts] = useState(false)
  return (
    <div className="flex flex-col flex-1">
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault()
          if (!alerts) {
            setAlerts(true)
          } else {
            router.push('/login/password')
          }
        }}
      >
        {alerts ? (
          <Alert
            color="primary"
            title="Un correo electronico ha sido enviado para resetear tu password"
          />
        ) : (
          <UserInput
            label="Número de teléfono o Correo electrónico"
            inputType={'email'}
          />
        )}

        <div className="footer-form">
          <Button
            className={'solid-button'}
            color={'primary'}
            radius={'full'}
            type={'submit'}
          >
            {alerts ? 'Atrás' : 'Siguiente'}
          </Button>
        </div>
      </form>
    </div>
  )
}
