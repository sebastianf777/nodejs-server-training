'use client'

import { useEffect } from 'react'
import { LOCAL_STORAGE } from '@/components/utils/utils.constants'
import LogoutBox from '@/components/logout/logout-box/logout-box'
import { redirect } from 'next/navigation'
import { toast } from 'react-hot-toast'

export default function LogoutPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' || localStorage != null) {
      try {
        localStorage.removeItem(LOCAL_STORAGE.SESSION_TIMESTAMP)
        toast.success('Redireccionando.', {
          id: 'logout-redirect',
        })
      } catch (error) {
        console.error('Logout error:', error)
        throw new Error('Failed to logout: ' + error)
      } finally {
        setTimeout(() => {
          redirect('/login/password')
        }, 3000)
      }
    }
  }, [])

  if (localStorage) {
    throw new Error('Failed to logout: ')
  }

  return (
    <>
      <LogoutBox />
    </>
  )
}
