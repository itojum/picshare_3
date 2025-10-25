import { Center } from "@/components/ui"
import Image from "next/image"

export const PreviewImage: React.FC<{ src: string }> = ({ src }) => (
  <Center>
    <Image src={src} alt="Preview" className="object-contain" width={300} height={300} unoptimized />
  </Center>
)
