'use client'

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from 'next/image';
import { signIn } from "@/utils/firebase.util";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInPage() {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.username.value + '@smarthome.app';
    const password = e.currentTarget.password.value;
    try {
      await signIn(email, password);
      console.log('Form submitted');
      router.push('/home');
    }
    catch (error) {
      console.error('Error signing in:', error);
    }
  }

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
          <form className="w-1/2 flex flex-col gap-4" onSubmit={onSubmit}>
            <div className="flex flex-col gap-4">
              <Input name='username' size="lg" type="text" label="Username" />
              <Input name='password' size="lg" type="password" label="Password" />
            </div>
            <div className="flex flex-row gap-4 ml-auto">
              <Link href='/register'>
                <Button radius="full" color="primary" size="lg" variant="light" className="text-white">
                  Create account
                </Button>
              </Link>
              <Button type="submit" radius="full" color="primary" size="lg">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}