'use client'
import { useAppDispatch, useAppSelector } from '@/app/src/hooks/useRedux'
import { toggleMenu, toggleRightSidebar } from '@/app/src/store/slices/sidebarSlice'
import { Montserrat } from 'next/font/google'
import { useEffect } from 'react'
import { useEditor } from './config/useEditor'
import './editor.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

function Editor() {
  const { editorReady } = useEditor('editor')
  const { isOpenMenu, isOpenRightSidebar } = useAppSelector(store => store.sidebar)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isOpenMenu) return

    dispatch(toggleMenu())

    if (!isOpenRightSidebar) return

    dispatch(toggleRightSidebar())
  }, [])

  return (
    <>
      <div className={montserrat.className} id="editor"></div>

      {editorReady && (
        <div className="editor__footer">
          <div className="container editor__footer-container">
            <button className="btn editor__submit">Опубликовать</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Editor