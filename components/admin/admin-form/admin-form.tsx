'use client'

import { Button } from '@heroui/react'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminForm() {
  const router = useRouter()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/login')
  }

  return (
    <div className="flex flex-col flex-1">
      <form onSubmit={handleSubmit}>
        <div className="footer-form">
          <Button
            className="solid-button"
            color="primary"
            radius="full"
            type="submit"
          >
            Logout
          </Button>
        </div>
      </form>
    </div>
  )
}
