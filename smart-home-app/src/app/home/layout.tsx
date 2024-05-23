import React from "react";
import SideBar from "@/components/sidebar";

export default function HomeLayout({ children }: {children: React.ReactNode}) {
  return (
    <main className="flex flex-row">
      <SideBar />
      <div className="w-[85%] mr-0 ml-auto flex flex-col p-8 bg-gray-50">
        {children}
      </div>
    </main>
  )
}