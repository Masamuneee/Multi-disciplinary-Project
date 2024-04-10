import Image from "next/image";

export default function Home() {
  return (
    <main className="container min-w-screen-xl mx-auto">
      <div className="hidden lg:grid grid-rows-2 h-[calc(100vh-64px)] gap-5 pb-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-gray-300 rounded-xl flex flex-col justify-center items-center">
            <span className="material-symbols-outlined mb-5">
              videocam
            </span>
            <h1>Camera</h1>
          </div>
          <div className="bg-gray-200 rounded-xl flex flex-col justify-center items-center">
            <span className="material-symbols-outlined mb-5">
              device_thermostat
            </span>
            <h1>Temperature</h1>
          </div>
          <div className="bg-gray-100 rounded-xl flex flex-col justify-center items-center">
            <span className="material-symbols-outlined mb-5">
              humidity_percentage
            </span>
            <h1>Humidity</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-gray-400 rounded-xl flex flex-col justify-center items-center">
            <span className="material-symbols-outlined mb-5">
              lightbulb
            </span>
            <h1>Light</h1>
          </div>
          <div className="bg-gray-500 rounded-xl flex flex-col justify-center items-center">
            <span className="material-symbols-outlined mb-5">
              hearing
            </span>
            <h1>Sound</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:hidden">
        <div className="bg-gray-300 h-64 rounded-xl flex flex-col justify-center items-center">
          <span className="material-symbols-outlined mb-5">
            videocam
          </span>
          <h1>Camera</h1>
        </div>
        <div className="bg-gray-200 h-64 rounded-xl flex flex-col justify-center items-center">
          <span className="material-symbols-outlined mb-5">
            device_thermostat
          </span>
          <h1>Temperature</h1>
        </div>
        <div className="bg-gray-100 h-64 rounded-xl flex flex-col justify-center items-center">
          <span className="material-symbols-outlined mb-5">
            humidity_percentage
          </span>
          <h1>Humidity</h1>
        </div>
        <div className="bg-gray-400 h-64 rounded-xl flex flex-col justify-center items-center">
          <span className="material-symbols-outlined mb-5">
            lightbulb
          </span>
          <h1>Light</h1>
        </div>
        <div className="bg-gray-500 h-64 rounded-xl flex flex-col justify-center items-center">
          <span className="material-symbols-outlined mb-5">
            hearing
          </span>
          <h1>Sound</h1>
        </div>
      </div>
    </main>
  );
}
