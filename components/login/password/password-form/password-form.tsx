'use client'

import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import UserInput from '@/components/user-input/user-input'

export default function PasswordForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (passwordValue === '777Holis') {
      setLoading(true)
      setTimeout(() => {
        router.push('/admin')
      }, 3000)
    } else {
      alert('Incorrect password')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {loading ? (
          <Button isLoading color="primary" className="solid-button w-full">
            Loading
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
