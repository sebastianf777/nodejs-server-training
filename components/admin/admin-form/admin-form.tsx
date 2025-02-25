'use client'

import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'

export default function AdminForm() {
  const router = useRouter()

  return (
    <div className="flex flex-col flex-1">
      <div className="footer-form">
        <Button
          className="solid-button"
          color="primary"
          radius="full"
          type="button"
          onPress={() => {
            router.push('/')
          }}
        >
          Home
        </Button>
        <Button
          className="solid-button"
          color="primary"
          radius="full"
          type="button"
          onPress={() => {
            router.push('/logout')
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}
