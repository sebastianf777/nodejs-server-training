'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

import PasswordForm from '../password-form/password-form';

import LoginText from '@/components/heading/login-text';

export default function PasswordBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/admin');
  };

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
        <LoginText description={''} email={email || ''} heading={'Username'} />

        <PasswordForm handleSubmitAction={handleSubmit} />
      </div>
    </div>
  );
}
