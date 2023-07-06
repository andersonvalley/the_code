import Link from 'next/link'

import { BiCollection, BiSun } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { GrFormAdd } from 'react-icons/gr'
import { HiMenuAlt1 } from 'react-icons/hi'
import { RxMoon } from 'react-icons/rx'

import { useState } from 'react'
import { useAppDispatch } from '../../hooks/useRedux'
import { toggleMenu } from '../../store/slices/sidebarSlice'
import { Logo } from '../UI/logo/Logo'
import { Search } from '../UI/search/Search'

import { useTheme } from '../../hooks/useTheme'
import { AppRoutes } from '../routes/AppRoutes'
import './header.scss'

export const Header = () => {
  const { theme, changeTheme } = useTheme()
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useAppDispatch()
  const isAuth = false

  const openEditorHandler = () => {
    // document.body.style.overflow = 'hidden'
    dispatch(openEditor())
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <>
      <header className="header sticky sticky-header">
        <div className="container header__container">
          <div className="header__left">
            <button onClick={toggleMenuHandler} className="btn burger">
              <HiMenuAlt1 size={25} />
            </button>
            <Logo />
          </div>
          <div className="header__controls">
            <Search value={searchValue} onChange={setSearchValue} />

            <nav className='header__nav'>
              <button onClick={openEditorHandler} className="btn btn-editor">
                <GrFormAdd size={25} />
              </button>

              {/* <button
                data-title="Тема"
                className={theme === themeVariant.LIGHT ? 'btn-theme btn active light' : 'btn-theme btn dark'}
                onClick={() =>
                  theme === themeVariant.LIGHT ? changeTheme(themeVariant.DARK) : changeTheme(themeVariant.LIGHT)
                }
              >
                {theme === themeVariant.LIGHT ? <BiSun size={25} /> : <RxMoon size={25} />}
              </button> */}

              <Link className="btn btn-default" href={AppRoutes.FAVORITES}>
                <BiCollection size={25} />
              </Link>

              {isAuth ?
                <button className="btn btn-user">
                  <FiUser size={25} />
                  <span>Yaroslav K</span>
                </button>
                :
                <Link href='/signin' className="btn btn-user flex gap-2">
                  <FiUser size={25} />
                  <span className='font-semibold'>Войти</span>
                </Link>
              }
            </nav>
          </div>
        </div>
      </header >

      {/* <div className="container header__container-menu">
        <Menu open={openMenu} setOpen={setOpenMenu} />
      </div> */}

    </>
  )
}
