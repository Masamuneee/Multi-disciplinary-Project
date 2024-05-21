export default function CameraLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <h1 className="font-bold mb-5">Camera</h1>
      {children}
    </main>
  )
}