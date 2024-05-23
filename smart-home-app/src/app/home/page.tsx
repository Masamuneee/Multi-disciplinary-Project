'use client'

import Image from "next/image";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import Link from "next/link";
import CardDevice from "@/components/cards/cardDevice";
import { logOut } from "@/utils/firebase.util";
import { auth } from "@/utils/firebase.util";
import extractUsernameFromEmail from "@/utils/extractUsername.util";
import ProtectedRoute from "../routes";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleSignOut = async () => {
    console.log('Signing out...');
    router.push('/');
    await logOut();
  }
  const extractedName = extractUsernameFromEmail(auth.currentUser?.email);

  return (
    <ProtectedRoute>
      {/* <main className="flex flex-col items-stretch bg-gray-300"> */}
        <div className='flex flex-row items-center mb-5'>
          <h1 className='font-normal'>Welcome home, <span className="font-bold">{extractedName}</span>!</h1>
          <div className='flex flex-row items-center gap-8 ml-auto'>
            <div className="flex items-center p-3 hover:bg-slate-200 rounded-full hover:shadow-md transition-[0.2s]">
              <span className="material-symbols-rounded">
                notifications
              </span>
            </div>
            <div className="flex flex-row-reverse items-center gap-4">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem onClick={handleSignOut} textValue="f" key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <p>{extractedName}</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid grid-rows-2 gap-5 h-full items-stretch">
          <div className="grid grid-cols-3 gap-5">
            <Link href='/camera'>
              <CardDevice title="Camera" icon="videocam" />
            </Link>
            <Link href='/temperature'>
              <CardDevice title="Temperature" icon="device_thermostat" />
            </Link>
            <Link href='/humidity'>
              <CardDevice title="Humidity" icon="humidity_percentage" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Link href='/light'>
              <CardDevice title="Light" icon="lightbulb" />
            </Link>
            <Link href='/sound'>
              <CardDevice title="Sound" icon="hearing" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:hidden">
          <CardDevice title="Camera" icon="videocam" />
          <CardDevice title="Temperature" icon="device_thermostat" />
          <CardDevice title="Humidity" icon="humidity_percentage" />
          <CardDevice title="Light" icon="lightbulb" />
          <CardDevice title="Sound" icon="hearing" />
        </div>
      {/* </main> */}
    </ProtectedRoute>
  );
}
