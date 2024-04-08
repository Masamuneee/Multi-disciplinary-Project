'use client'

import './globals.css';

import { Metadata } from 'next'
import { NextUIProvider } from "@nextui-org/react";
import { Plus_Jakarta_Sans } from "next/font/google";

// import NavBar from "../components/navbar";
// import Footer from "../components/footer";
import SignInPage from './signIn/page';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
 
// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js',
// }

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>
        <NextUIProvider>
          {/* <NavBar /> */}
          <SignInPage />
          <main className='min-h-screen'>
            {children}
          </main>
          {/* <Footer /> */}
        </NextUIProvider>
      </body>
    </html>
  )
}