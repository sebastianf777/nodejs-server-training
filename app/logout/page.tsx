'use client'

import { useEffect } from 'react'
import { LOCAL_STORAGE } from '@/components/utils/utils.constants'
import { redirect } from 'next/navigation'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import HeadingDescription from '@/components/global/heading-description/headingDescription'
import LogoutForm from '@/components/logout/logout-form/logout-form'

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
      }
    }
  }, [])

  if (localStorage) {
    throw new Error('Failed to logout: ')
  }

  return (
    <div className={'box-container'}>
      <Image
        alt={'Logo'}
        className={'w-10 h-10 self-start mb-4'}
        height={35}
        src={'/assets/img/google-logo.png'}
        width={35}
      />

      <div className={'grid grid-cols-[auto_1fr] gap-4 mt-4'}>
        <HeadingDescription heading={'Te deslogueaste correctamente'} />
        <LogoutForm />
      </div>
    </div>
  )
}
