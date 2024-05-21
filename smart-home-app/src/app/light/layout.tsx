export default function LightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <h1 className="font-bold mb-5">Light</h1>
      {children}
    </main>
  )
}