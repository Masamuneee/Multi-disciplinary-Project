'use client'

import Image from "next/image";
import SideBarButton from "@/components/buttons/sideBarButton";

export default function SideBar() {
  return (
    <div className="w-[15%] h-[100vh] bg-white py-8 px-3 flex flex-col">
      <div className="mb-8 pl-4 pb-4 flex flex-col">
        <Image src="/logo.svg" alt="Logo" width={64} height={64} />
      </div>
      <div className="flex flex-col gap-1">
        <SideBarButton icon="overview_key" title="Overview"/>
        <SideBarButton icon="devices_other" title="Devices"/>
        <SideBarButton icon="settings" title="Settings" />
      </div>
      <div className="mt-auto">
        <SideBarButton icon="logout" title="Logout" />
      </div>
    </div>
  );
}