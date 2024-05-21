export default function HumidityLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <h1 className="font-bold mb-5">Humidity</h1>
      {children}
    </main>
  )
}