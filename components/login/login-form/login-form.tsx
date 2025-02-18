'use client';

import { Button } from '@heroui/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import MailInput from '@/components/mail-input/mail-input';

type FormProps = {
  onEmailChangeAction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function LoginForm({ onEmailChangeAction }: FormProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/login/password${email ? `?email=${encodeURIComponent(email)}` : ''}`
    );
  };

  return (
    <div className="flex flex-col flex-1">
      <form onSubmit={handleSubmit}>
        <MailInput
          label="Correo electrónico o teléfono"
          onEmailChangeAction={e => {
            setEmail(e.target.value);
            onEmailChangeAction?.(e);
          }}
        />

        <Button
          className="text-[#A8C7FA] bg-transparent border-0 cursor-pointer text-left p-0 mt-[10px] text-xs hover:text-[#e8eaed]"
          type="button"
          onPress={() => router.push('/login/forgot')}
        >
          ¿Olvidaste el correo electrónico?
        </Button>

        <p className="text-[#9aa0a6] mt-[33px] leading-[1.4] text-xs">
          ¿Esta no es tu computadora? Usa el modo de invitado para navegar de
          forma privada.{' '}
          <span className="bg-transparent border-0 text-[#A8C7FA] underline cursor-pointer p-0 hover:text-[#e8eaed]">
            Más información para usar el modo de invitado
          </span>
        </p>

        <div className="footer-form">
          <Button className="transparent-button" radius="full" type="button">
            Crear cuenta
          </Button>

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
