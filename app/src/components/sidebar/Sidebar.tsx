import Link from 'next/link'
import { FC } from 'react'

import './sidebar.scss'

interface data {
  title: string
  imgUrl: string
}

interface Props {
  title: string
  data: data[]
}

export const Sidebar: FC<Props> = ({ title, data }) => {
  return (
    <aside className="sticky sidebars">
      <div className="sidebar__top">
        <div className="sidebar__title">{title}</div>
        <Link className="sidebar__link" href="/top">
          Все
        </Link>

        <div className="list">
          {data.map(item => {
            return (
              <li className="list__item" key={item.title}>
                {item.title}
              </li>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
