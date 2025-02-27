'use client'

import { Button } from '@heroui/react'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function LogoutForm() {
  const router = useRouter()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/login')
  }
  //esto lo dejo en caso de que se pida que no se redireccione automaticamente
  return (
    <div className={'flex flex-col flex-1'}>
      <form onSubmit={handleSubmit}>
        <div className={'footer-form'}>
          <Button
            className={'solid-button'}
            color={'primary'}
            radius={'full'}
            type={'submit'}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}
