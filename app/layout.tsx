'use client';

import React from 'react';

import './globals.css';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Mi Aplicación</title>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
