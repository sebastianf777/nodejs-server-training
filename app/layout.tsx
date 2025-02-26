'use client'

import '../styles/globals.scss'
import { ReactNode, useEffect } from 'react'
import { Providers } from './providers'
import { useRouter } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import {
  LOCAL_STORAGE,
  SESSION_EXPIRATION_TIME,
} from '@/components/utils/utils.constants'

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sessionTimestamp = localStorage.getItem(
        LOCAL_STORAGE.SESSION_TIMESTAMP,
      )
      const elapsedTime = Date.now() - Number(sessionTimestamp)
      const storedUsername = localStorage.getItem(LOCAL_STORAGE.USERNAME)
      if (!storedUsername) {
        router.push('/login')
      } else if (!sessionTimestamp || elapsedTime > SESSION_EXPIRATION_TIME) {
        localStorage.removeItem(LOCAL_STORAGE.SESSION_TIMESTAMP)
        router.push('/login/password')
      }
    }
  }, [router])
  return (
    <html lang="es">
      <head>
        <title>Mi Aplicación</title>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body>
        <Providers>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  )
}
