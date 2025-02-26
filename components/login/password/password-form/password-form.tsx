'use client'

import { Button, Alert } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { LOCAL_STORAGE } from '@/components/utils/utils.constants'
import { FormEvent, useState } from 'react'

import UserInput from '@/components/user-input/user-input'
import { Spinner } from '@heroui/spinner'

export default function PasswordForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (passwordValue === '777Holis') {
      setLoading(true)

      setTimeout(() => {
        localStorage.setItem(
          LOCAL_STORAGE.SESSION_TIMESTAMP,
          Date.now().toString(),
        )
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
          <div className="flex justify-center">
            <Spinner color="default" label="Loading" labelColor="foreground" />
          </div>
        ) : error ? (
          <Alert color="primary" title={error} />
        ) : (
          <UserInput
            label="Ingresa tu contraseña"
            showPasswordToggle={true}
            inputType="password"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        )}

        <div className="footer-form">
          <Button
            className="transparent-button"
            radius="full"
            onPress={() => {
              router.push('/login/forgot')
            }}
            isDisabled={loading}
          >
            ¿Olvidaste la contraseña?
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
