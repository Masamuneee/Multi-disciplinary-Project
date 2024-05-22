'use client'

import Image from "next/image";
import SideBarButton from "@/components/buttons/sideBarButton";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-[15%] h-[100vh] bg-white py-8 px-3 flex flex-col">
      <div className="mb-8 pl-4 pb-4 flex flex-col">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={64} height={64} />
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <SideBarButton icon="overview_key" title="Overview"/>
        <SideBarButton icon="devices_other" title="Devices"/>
        <SideBarButton icon="settings" title="Settings" />
      </div>
      <div className="mt-auto">
        <Link href="/signIn">
          <SideBarButton icon="logout" title="Logout" />
        </Link>
      </div>
    </div>
  );
}