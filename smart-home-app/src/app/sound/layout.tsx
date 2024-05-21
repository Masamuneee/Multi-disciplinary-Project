export default function SoundLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <h1 className="font-bold mb-5">Sound</h1>
      {children}
    </main>
    )
}