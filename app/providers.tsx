'use client'

import { useRouter } from 'next/navigation'
import { HeroUIProvider } from '@heroui/react'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
}
