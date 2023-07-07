import Link from "next/link"
import { FC } from "react"
import { FiUser } from "react-icons/fi"
import { AppRoutes } from "../../routes/AppRoutes"

interface Props {
  text?: string
  className?: string
}

export const AuthLink: FC<Props> = ({ text = 'Войти', className }) => {
  return (
    <Link href={AppRoutes.SIGNIN} className={`btn btn-user flex gap-2 ${className}`}>
      <FiUser size={25} />
      <span className='font-semibold'>{text}</span>
    </Link>
  )
}
