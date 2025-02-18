'use client';

import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

export default function ConfirmationComponent() {
  const router = useRouter();

  return (
    <div className="p-[20px] bg-white">
      <h1>¡Inicio de sesión exitoso!</h1>
      <Button color="primary" onPress={() => router.push('/')}>
        Volver al Inicio
      </Button>
    </div>
  );
}
