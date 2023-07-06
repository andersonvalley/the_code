import Image from "next/image"
import Link from "next/link"

import { FC } from "react"
import LogoIcon from '../../../../../public/img/logo.png'

interface Props {
  navigateToMain: () => void
}

export const Logo: FC<Props> = ({ navigateToMain }) => {
  return (
    <Link onClick={navigateToMain} href='/' className="flex items-center ml-10 gap-5">
      <Image
        className='w-10'
        src={LogoIcon}
        width={10}
        height={20}
        alt="the code logo" />
      <span className='text-3xl font-bold'>the<span className="flash">_</span>code</span>
    </Link>
  )
}
