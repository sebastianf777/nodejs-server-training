'use client'

import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState, useEffect } from 'react'

import UserInput from '@/components/user-input/user-input'

export default function PasswordForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // TODO SEBA | Reemplace el username por LOCAL_STORAGE.SESSION
      const storedUsername = localStorage.getItem('username')

      if (!storedUsername) {
        router.push('/login')
        return
      }
    }
  }, [router])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (passwordValue === '777Holis') {
      setLoading(true)
      setTimeout(() => {
        localStorage.setItem('sessionTimestamp', Date.now().toString())
        router.push('/admin')
      }, 3000)
    } else {
      setError('Incorrect password')
      setTimeout(() => {
        setError('')
      }, 1000)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {loading ? (
          <Button
            isLoading
            color="primary"
            className="solid-button w-full pointer-events-none"
          >
            Loading
          </Button>
        ) : error ? (
          <Button
            disabled
            color="warning"
            className="solid-button w-full pointer-events-none"
          >
            {error}
          </Button>
        ) : (
          <UserInput
            label="Ingresa tu contraseña"
            showPasswordToggle={true}
            inputType="password"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        )}

        <div className="footer-form">
          {/* Botón para recuperar contraseña */}
          <Button
            className="transparent-button"
            radius="full"
            onPress={() => {
              router.push('/login/forgot')
            }}
            disabled={loading}
          >
            ¿Olvidaste la contraseña?
          </Button>

          {/* TODO SEBA | Tiene que ser solo 1 button */}
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
