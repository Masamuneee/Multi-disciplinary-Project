'use client'

import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import CardDevice from "@/components/cards/cardDevice";

export default function Home() {
  return (
    <main className="flex flex-col p-8 h-[100vh]">
      <div className='flex flex-row items-center mb-5'>
        <h1 className='font-normal'>Welcome home, <span className="font-bold">John Doe</span>!</h1>
        <div className='flex flex-row items-center gap-8 ml-auto'>
          <div className="flex items-center p-3 hover:bg-slate-200 rounded-full hover:shadow-md">
            <span className="material-symbols-rounded">
              notifications
            </span>
          </div>
          <div className="flex flex-row-reverse items-center gap-4">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
            <p>John Doe</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:grid grid-rows-2 gap-5 h-full">
        <div className="grid grid-cols-3 gap-5">
          <CardDevice title="Camera" icon="videocam" />
          <CardDevice title="Temperature" icon="device_thermostat" />
          <CardDevice title="Humidity" icon="humidity_percentage" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <CardDevice title="Light" icon="lightbulb" />
          <CardDevice title="Sound" icon="hearing" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:hidden">
        <CardDevice title="Camera" icon="videocam" />
        <CardDevice title="Temperature" icon="device_thermostat" />
        <CardDevice title="Humidity" icon="humidity_percentage" />
        <CardDevice title="Light" icon="lightbulb" />
        <CardDevice title="Sound" icon="hearing" />
      </div>
    </main>
  );
}
