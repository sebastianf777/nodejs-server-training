'use client'

import { useEffect, useState } from 'react'
import { LOCAL_STORAGE } from '@/components/utils/utils.constants'
import LogoutBox from '@/components/logout/logout-box/logout-box'
import { useRouter } from 'next/navigation'
import ErrorComponent from '@/app/logout/error'

export default function LogoutPage() {
  const router = useRouter()
  const [isLogout, setIsLogout] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage != null) {
      setIsLogout(true)

      if (!isLogout) {
        setError('Hubo un error, redirigiendo al login...')
        return
      }
      setTimeout(() => {
        localStorage.removeItem(LOCAL_STORAGE.SESSION_TIMESTAMP)
      }, 3000)
    }
  }, [])

  return (
    <>
      {error ? (
        <ErrorComponent
          error={new Error(error)}
          reset={() =>
            setTimeout(() => {
              router.push('/login')
            }, 3000)
          }
        />
      ) : null}
      <LogoutBox />
    </>
  )
}
