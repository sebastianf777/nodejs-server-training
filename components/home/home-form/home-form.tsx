'use client'

import { Button } from '@heroui/react'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Spinner } from '@heroui/spinner'

export default function HomeForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push(`/admin`)
    }, 3000)
  }

  return (
    <div className="flex flex-col flex-1">
      <form onSubmit={handleSubmit}>
        {loading ? (
          <div className="flex justify-center">
            <Spinner color="default" label="Loading" labelColor="foreground" />
          </div>
        ) : null}

        <div className="footer-form">
          <Button
            className="solid-button"
            color="primary"
            radius="full"
            type="submit"
            isDisabled={loading}
          >
            Admin
          </Button>
        </div>
      </form>
    </div>
  )
}
