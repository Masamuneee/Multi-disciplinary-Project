import SideBar from "@/components/sidebar"

export default function TemperatureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-row">
      <SideBar />
      <div className="w-[85%] mr-0 ml-auto flex flex-col p-8 bg-gray-50">
        <h1 className="font-bold mb-5">Temperature</h1>
        {children}
      </div>
    </main>
  )
}