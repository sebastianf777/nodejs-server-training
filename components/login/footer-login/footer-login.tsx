'use client';

import { Button } from '@heroui/react';

export default function FooterLogin() {
  return (
    <footer className="flex justify-between items-center bg-[#202124] p-2 w-full text-[#9aa0a6] text-sm">
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#e8eaed]">
        <span>Español (Latinoamérica)</span>
      </div>
      <div className="flex gap-5">
        <Button
          className="bg-transparent border-none text-[#9aa0a6] p-0 hover:text-[#e8eaed]"
          href="#"
        >
          Ayuda
        </Button>
        <Button
          className="bg-transparent border-none text-[#9aa0a6] p-0 hover:text-[#e8eaed]"
          href="#"
        >
          Privacidad
        </Button>
        <Button
          className="bg-transparent border-none text-[#9aa0a6] p-0 hover:text-[#e8eaed]"
          href="#"
        >
          Condiciones
        </Button>
      </div>
    </footer>
  );
}
