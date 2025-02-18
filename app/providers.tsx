'use client';

import { useRouter } from 'next/navigation';
import { HeroUIProvider } from '@heroui/react';
import React from 'react';

// Only if using TypeScript
declare module '@react-types/shared' {}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
}
