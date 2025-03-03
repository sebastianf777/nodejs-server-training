'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button, NavLink } from '@mantine/core'

import UserInput from '@/components/user-input/user-input'

export default function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      localStorage.setItem('username', username)
      router.push(`/login/password`)
    }, 3000)
  }

  return (
    <div className={'flex flex-col flex-1 '}>
      <form onSubmit={handleSubmit}>
        <UserInput
          label={'Ingresa tu usuario'}
          inputType={'username'}
          onChange={(e) => setUsername(e.target.value)}
          loading={loading}
        />
        {/*// No estoy seguro de si esto esta bien // No estoy seguro de si esto*/}
        {/*esta bien // No estoy seguro de si esto esta bien*/}
        <NavLink
          classNames={{
            root: 'bg-[#0E0E0E] text-[#A8C7FA] hover:bg-[#0E0E0E] px-0',
            body: 'bg-[#0E0E0E] text-[#A8C7FA] hover:opacity-70',
          }}
          href={'/login/forgot?redirect=/login'}
          label={'¿Olvidaste el correo electrónico?'}
        />
        <p className={'text-[#9aa0a6] mt-12 leading-[1.4] text-sm'}>
          ¿Esta no es tu computadora? Usa el modo de invitado para navegar de
          forma privada.{' '}
          <span
            className={
              'bg-transparent border-0 text-[#A8C7FA] opacity-[.5] underline cursor-pointer p-0 hover:text-[#e8eaed] pointer-events-none'
            }
          >
            Más información para usar el modo de invitado
          </span>
        </p>
        <div className={'buttons-area'}>
          <NavLink
            className={'transparent-button'}
            href={'#'}
            label={'Crear cuenta'}
            disabled
          />

          <Button
            unstyled
            className={'solid-button'}
            variant="default"
            type={'submit'}
            disabled={loading}
          >
            Siguiente
          </Button>
        </div>
      </form>
    </div>
  )
}
