'use client'

import { Button } from '@heroui/react'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

import MailInput from '@/components/mail-input/mail-input'

export default function ForgotForm() {
  const router = useRouter()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/admin')
  }

  return (
    <div className="flex flex-col flex-1">
      <form onSubmit={handleSubmit}>
        <MailInput label="Número de teléfono o Correo electrónico" />
        <div className="footer-form">
          <Button
            className="solid-button"
            color="primary"
            radius="full"
            type="submit"
          >
            Siguiente
          </Button>
        </div>
      </form>
    </div>
  )
}
