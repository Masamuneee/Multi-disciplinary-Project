'use client'

import Image from "next/image";
import SideBarButton from "@/components/buttons/sideBarButton";
import Link from "next/link";
import { logOut } from "@/utils/firebase.util";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();
  const handleSignOut = async () => {
    console.log('Signing out...');
    router.push('/');
    await logOut();
  }
  return (
    <div className="w-[15%] h-[100vh] bg-white py-8 px-3 flex flex-col fixed">
      <div className="mb-8 pl-4 pb-4 flex flex-col">
        <Link href="/home">
          <Image src="/logo.svg" alt="Logo" width={64} height={64} />
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <SideBarButton icon="overview_key" title="Overview"/>
        <SideBarButton icon="devices_other" title="Devices"/>
        <SideBarButton icon="settings" title="Settings" />
      </div>
      <div className="mt-auto">
        <div onClick={handleSignOut}>
          <SideBarButton icon="logout" title="Logout" />
        </div>
      </div>
    </div>
  );
}