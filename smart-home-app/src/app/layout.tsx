'use client'

import './globals.css';
import './globalicons.css'

import { Metadata } from 'next'
import { NextUIProvider } from "@nextui-org/react";
import { Plus_Jakarta_Sans } from "next/font/google";

import { AuthContextProvider } from '@/context/userContext';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>
        <NextUIProvider>
          <AuthContextProvider>
              {children}
          </AuthContextProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}