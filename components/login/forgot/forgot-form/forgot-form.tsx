'use client'

import { Button, Alert, Loader } from '@mantine/core'
import { FormEvent, useState } from 'react'
import { IconInfoCircle } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import UserInput from '@/components/user-input/user-input'

export default function ForgotForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<boolean>(false)

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
    if (success) {
      router.push('/login/password')
    } else if (!loading) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setSuccess(true)
      }, 3000)
    }
  }
  const icon = <IconInfoCircle />

  return (
    <div className={'flex flex-col flex-1'}>
      <form onSubmit={handleSubmit}>
        {success ? (
          <Alert
            className={'text-[#062E6F] bg-[#A8C7FA]'}
            variant={'default'}
            color={'#A8C7FA'}
            icon={icon}
          >
            Un correo electrónico ha sido enviado para resetear tu password
          </Alert>
        ) : loading ? (
          <Loader color={'blue'} type={'bars'} className={'mx-auto'} />
        ) : (
          <UserInput label={'Correo electrónico'} inputType={'email'} />
        )}

        <div className={'buttons-area'}>
          <Button
            className={'solid-button'}
            type={'submit'}
            unstyled
            disabled={loading}
          >
            {loading || success ? 'Atrás' : 'Siguiente'}
          </Button>
        </div>
      </form>
    </div>
  )
}
