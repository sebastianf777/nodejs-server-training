'use client'

import { Button } from '@heroui/react'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Spinner } from '@heroui/spinner'
import UserInput from '@/components/user-input/user-input'

export default function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const handleSubmit = (e: FormEvent) => {
    // TODO | Test si es necesario o no
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      localStorage.setItem('username', username)
      router.push(`/login/password`)
    }, 3000)
  }

  return (
    <div className="flex flex-col flex-1 ">
      <form onSubmit={handleSubmit}>
        {/* TODO | REFACTOR */}
        {loading ? (
          <div className="flex justify-center">
            <Spinner color="default" label="Loading" labelColor="foreground" />
          </div>
        ) : (
          <UserInput
            label="Ingresa tu usuario"
            inputType="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        )}

        {/* TODO | Debe ser un link */}
        <Button
          className="text-[#A8C7FA] bg-transparent border-0 cursor-pointer h-fit text-left p-0 mt-3  hover:text-[#e8eaed]"
          type="button"
          onPress={() => router.push('/login/forgot')}
          isDisabled={loading}
        >
          ¿Olvidaste el correo electrónico?
        </Button>

        <p className="text-[#9aa0a6] mt-12 leading-[1.4] text-sm">
          ¿Esta no es tu computadora? Usa el modo de invitado para navegar de
          forma privada.{' '}
          <span className="bg-transparent border-0 text-[#A8C7FA] opacity-[.5] underline cursor-pointer p-0 hover:text-[#e8eaed] pointer-events-none">
            Más información para usar el modo de invitado
          </span>
        </p>

        <div className="footer-form">
          {/* TODO | Debe ser un link */}
          <Button
            className="transparent-button"
            radius="full"
            type="button"
            isDisabled
          >
            Crear cuenta
          </Button>

          <Button
            className="solid-button"
            color="primary"
            radius="full"
            type="submit"
            isDisabled={loading}
          >
            Siguiente
          </Button>
        </div>
      </form>
    </div>
  )
}
