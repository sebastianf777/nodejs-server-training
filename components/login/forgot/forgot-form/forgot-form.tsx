'use client'

import { Button, Alert } from '@heroui/react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import UserInput from '@/components/user-input/user-input'

export default function ForgotForm() {
  const router = useRouter()
  const [alerts, setAlerts] = useState(false)

  /**
   * LO importante es la consistencia en que pongas el codigo
   * Si lo podes de un formato, mantenelo a lo largo de todo el proyecto
   * se llamarian : "convenciones del proyecto y de codigo"
   *
   * Si es largo o corto el codigo, lo vemos.
   * Si es muy corto, ok no creamos la fuicion
   * si es largo, creamos la funcion
   * si es mediano, por ahi como ahora, seguimos la convencion.
   * Si no hay convencion alguna, creala a gusto.
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!alerts) {
      setAlerts(true)
    } else {
      router.push('/login/password')
    }
  }

  return (
    <div className="flex flex-col flex-1">
      <form onSubmit={handleSubmit}>
        {alerts ? (
          <Alert
            color="primary"
            title="Un correo electronico ha sido enviado para resetear tu password"
          />
        ) : (
          <UserInput label="Correo electrónico" inputType={'email'} />
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
