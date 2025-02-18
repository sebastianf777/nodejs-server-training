import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type LoginTextProps = {
  heading: string;
  description?: string;
  email?: string;
};

export default function LoginText({
  heading,
  description,
  email,
}: LoginTextProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 mr-10">
      <h1 className="text-[38px]">{heading}</h1>
      {description && (
        <p className="text-sm text-[#9aa0a6] mb-[30px] mt-0 leading-[1.5]">
          {description}
        </p>
      )}

      {email && (
        <Button
          className="bg-[#A8C7FA] w-[300px] text-black font-medium px-4 py-2 rounded-full hover:bg-[#91B6F5] transition flex justify-start gap-2"
          role="button"
          tabIndex={0}
          onPress={() => {
            router.push('/login');
          }}
        >
          <Image
            alt="User Avatar"
            className="rounded-full"
            height={32}
            src="https://i.pravatar.cc/40?u=a04258114e29026702d"
            width={32}
          />
          <span className="truncate">{email}</span>
        </Button>
      )}
    </div>
  );
}
