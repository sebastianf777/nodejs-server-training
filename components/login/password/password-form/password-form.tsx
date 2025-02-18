'use client';

import { Button, Checkbox } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import MailInput from '@/components/mail-input/mail-input';

type PasswordProps = {
  handleSubmitAction: (e: React.FormEvent) => void;
};

export default function PasswordForm({ handleSubmitAction }: PasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleForgotPassword = () => {
    router.push('/forgot'); // Redirige a la página de recuperación de contraseña
  };

  return (
    <div>
      <form onSubmit={handleSubmitAction}>
        <MailInput
          label="Ingresa tu contraseña"
          type={showPassword ? 'text' : 'password'}
        />

        <div className="show-password flex items-center gap-2 mt-2">
          <Checkbox
            className="text-[#A8C7FA] bg-transparent border-none cursor-pointer text-left p-0 mt-[10px]"
            isSelected={showPassword}
            onValueChange={togglePasswordVisibility}
          >
            Mostrar contraseña
          </Checkbox>
        </div>

        <div className="footer-form">
          {/* Botón para recuperar contraseña */}
          <Button
            className="transparent-button"
            radius="full"
            onPress={() => {
              router.push('/login/forgot');
            }}
          >
            ¿Olvidaste la contraseña?
          </Button>

          {/* Botón para continuar */}
          <Button
            className="solid-button"
            color="primary"
            radius="full"
            type="submit"
          >
            Siguiente
          </Button>
        </div>
      </form>
    </div>
  );
}
