'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import PasswordForm from '../password-form/password-form'

import LoginText from '@/components/heading/login-text'

export default function PasswordBox() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUsername = localStorage.getItem('username') || ''
      setUsername(storedUsername)
    }
  }, [])

  return (
    <div className="flex flex-col items-start relative bg-[#0E0E0E] p-8 rounded-3xl text-white w-full min-h-[384px]">
      <Image
        alt={'Logo'}
        className={'w-10 h-10 self-start mb-4'}
        height={35}
        src={'/assets/img/google-logo.png'}
        width={35}
      />

      <div className="grid grid-cols-2 gap-5 w-full">
        <LoginText description={''} heading={username || 'Username'} />

        <PasswordForm />
      </div>
    </div>
  )
}
