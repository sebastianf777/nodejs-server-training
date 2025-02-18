'use client';

import React from 'react';

type MailInputProps = {
  label: string;
  type?: string;
  onEmailChangeAction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MailInput({
  label,
  type = 'text',
  onEmailChangeAction,
}: MailInputProps) {
  return (
    <div className="relative mb-0 w-full">
      <input
        required
        className="peer w-full box-border rounded-md border border-gray-300 bg-[#0E0E0E] text-white outline-none transition focus:border-[#A8C7FA] focus:shadow-md focus:shadow-[#1A73E8]/60 px-4 py-3"
        id="email"
        placeholder=" "
        type={type}
        onChange={onEmailChangeAction}
      />
      <label
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0E0E0E] px-1 text-gray-400 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#A8C7FA]"
        htmlFor="email"
      >
        {label}
      </label>
    </div>
  );
}
