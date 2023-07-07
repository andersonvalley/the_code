import Link from 'next/link'
import { FC } from 'react'

import Image from 'next/image'
import './sidebar.scss'

interface data {
  title: string
  imgUrl: string
  description: string
  link: string
}

interface Props {
  title: string
  data: data[]
  path: string
}

export const Sidebar: FC<Props> = ({ title, path, data }) => {
  return (
    <aside className="sticky sidebar">
      <div className="sidebar__header mb-6 flex justify-between">
        <div className="sidebar__title font-bold">{title}</div>
        <Link className="sidebar__link" href={path}>
          Все
        </Link>
      </div>

      <div className="list">
        {data.map(item => {
          return (
            <li className="mb-4 list-none" key={item.title}>
              <Link className='flex items-center' href={item.link}>
                <Image className='mr-4 rounded-full w-24' src={item.imgUrl} alt={item.title} width={25} height={25} />
                <div className="list__item-text overflow-hidden">
                  <span className='font-bold'>{item.title}</span>
                  <p className='whitespace-nowrap overflow-hidden text-ellipsis'>{item.description}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </div>

    </aside>
  )
}
