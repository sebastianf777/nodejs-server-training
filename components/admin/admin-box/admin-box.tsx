'use client';
import Image from 'next/image';

import LoginText from '@/components/heading/login-text';

export default function AdminBox() {
  return (
    <div className="flex flex-col items-start relative bg-[#0E0E0E] p-8 rounded-3xl text-white w-full min-h-[384px]">
      <Image
        alt="Logo"
        className="w-10 h-10 self-start mb-4"
        height={35}
        src="/assets/img/google-logo.png"
        width={35}
      />

      <div className="grid grid-cols-[auto_1fr] gap-4 mt-4">
        <LoginText heading="Admin Page Vegana" />
      </div>
    </div>
  );
}
