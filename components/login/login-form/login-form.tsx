'use client'

import { Button } from '@heroui/react'
import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import UserInput from '@/components/user-input/user-input'

const LOGIN_EXPIRATION_TIME = 5 * 60 * 1000 // 5 minutes

export default function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('username') || '' : '',
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loginTimestamp = localStorage.getItem('loginTimestamp')

      if (loginTimestamp) {
        const elapsedTime = Date.now() - Number(loginTimestamp)

        if (elapsedTime > LOGIN_EXPIRATION_TIME) {
          router.push('/login/password')
        }
      }
    }
  }, [router])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      localStorage.setItem('username', username)
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
          <UserInput
            label="Ingresa tu usuario"
            inputType="username"
            onChange={(e) => setUsername(e.target.value)}
          />
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
