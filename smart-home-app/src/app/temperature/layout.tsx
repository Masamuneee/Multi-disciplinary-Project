export default function TemperatureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <h1 className="font-bold mb-5">Temperature</h1>
      {children}
    </main>
  )
}