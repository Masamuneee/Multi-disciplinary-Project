'use client'

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from 'next/image';

export default function SignInPage() {
  return (
    <main className="log-in min-h-screen flex justify-center items-center">
      <div className="bg-white log-in-wrapper shadow-2xl max-w-screen-xl px-10 pt-12 pb-10 w-full flex flex-col gap-10 rounded-[2.25rem]">
        <div>
          <Image
            src="/logo.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className="text-5xl">Sign in</h1>
            <p className="mt-4">to continue to Smart Home</p>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Input size="lg" type="email" label="Email or phone" />
              <Input size="lg" type="password" label="Password" />
            </div>
            <div className="flex flex-row ml-auto">
              <Button radius="full" color="primary" size="lg">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}