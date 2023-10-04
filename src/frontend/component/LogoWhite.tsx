import Image from 'next/image'
import Link from 'next/link'

export const LogoWhite = () => {
  return (
    <Link href="/">
      <div className="w-[90px] aspect-square relative">
        <Image src="/COLOP_white.png" fill alt="" />
      </div>
    </Link>
  )
}
