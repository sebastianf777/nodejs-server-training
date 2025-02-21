'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {
  LOCAL_STORAGE,
  SESSION_EXPIRATION_TIME,
} from '@/components/utils/utils.constants'
import HomeBox from '@/components/home/home-box/home-box'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sessionTimestamp = localStorage.getItem(
        LOCAL_STORAGE.SESSION_TIMESTAMP,
      )
      const storedUsername = localStorage.getItem(LOCAL_STORAGE.USERNAME)

      if (sessionTimestamp) {
        const elapsedTime = Date.now() - Number(sessionTimestamp)

        if (elapsedTime > SESSION_EXPIRATION_TIME) {
          router.push('/login/password')
        }
      } else if (!storedUsername) {
        router.push('/login')
      } else {
        router.push('/login/password')
      }
    }
  }, [router])
  return (
    <div className="layout-home">
      <HomeBox />
    </div>
  )
}
