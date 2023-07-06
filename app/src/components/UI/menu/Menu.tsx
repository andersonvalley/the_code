import { useAppDispatch, useAppSelector } from '@/app/src/hooks/useRedux'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

import { MenuItems } from './config'
import './menu.scss'

export const Menu: FC = () => {
  const dispath = useAppDispatch()
  const { isOpenMenu } = useAppSelector(store => store.sidebar)
  const [activePage, setActivePage] = useState(0)
  const path = usePathname()

  useEffect(() => {
    const findPage = MenuItems.find(item => item.link === path)

    if (!findPage) return
    setActivePage(findPage.id)
  }, [path])

  return (
    <div className={isOpenMenu ? 'sidebarMenu sticky open' : 'sidebarMenu sticky hide'}>
      <nav className="sidebarMenu_list">
        {MenuItems.map(item => {
          return (
            <Link
              key={item.id}
              href={item.link}
              className={activePage === item.id ? 'sidebarMenu_item active' : 'sidebarMenu_item'}
            >
              <span className={activePage === item.id ? 'active-icon' : ''}>{item.icon}</span>
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
