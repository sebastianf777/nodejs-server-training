'use client'

import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'

export default function HomeForm() {
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
            router.push('/admin')
          }}
        >
          Admin
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
