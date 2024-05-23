import { Button } from "@nextui-org/react"
import Link from "next/link"

export default function CameraPage() {
  return (
    <div>
      <p>Implement your page here.</p>
      <Link href='1.1.1.1'> {/* Insert your link here */}
        <Button>Button 1</Button>
      </Link>
      <Link href='1.1.2.2'> {/* Insert your link here */}
        <Button>Button 2</Button>
      </Link>
    </div>
  )
}