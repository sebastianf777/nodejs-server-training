'use client'

import { Button } from '@heroui/react'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import UserInput from '@/components/user-input/user-input'

export default function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push(`/login/password`)
    }, 3000)
  }

  return (
    <div className="flex flex-col flex-1">
      <form onSubmit={handleSubmit}>
        {loading ? (
          <Button isLoading color="primary" className="solid-button w-full">
            Loading
          </Button>
        ) : (
          <UserInput label="Ingresa tu usuario" inputType="username" />
        )}

        <Button
          className="text-[#A8C7FA] bg-transparent border-0 cursor-pointer text-left p-0 mt-[10px] text-xs hover:text-[#e8eaed]"
          type="button"
          onPress={() => router.push('/login/forgot')}
          disabled={loading}
        >
          ¿Olvidaste el correo electrónico?
        </Button>

        <p className="text-[#9aa0a6] mt-[33px] leading-[1.4] text-xs">
          ¿Esta no es tu computadora? Usa el modo de invitado para navegar de
          forma privada.{' '}
          <span className="bg-transparent border-0 text-[#A8C7FA] underline cursor-pointer p-0 hover:text-[#e8eaed]">
            Más información para usar el modo de invitado
          </span>
        </p>

        <div className="footer-form">
          <Button
            className="transparent-button"
            radius="full"
            type="button"
            disabled={loading}
          >
            Crear cuenta
          </Button>

          {loading ? (
            <Button
              className="solid-button"
              color="primary"
              radius="full"
              type="submit"
              isDisabled
            >
              Siguiente
            </Button>
          ) : (
            <Button
              className="solid-button"
              color="primary"
              radius="full"
              type="submit"
              disabled={loading}
            >
              Siguiente
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
