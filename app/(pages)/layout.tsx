'use client'

import { Header } from '@/components/header/Header'
import { store } from '@/src/store/store'
import { Fira_Code } from 'next/font/google'
import { Provider } from 'react-redux'
import { EditorComponent } from '../src/components/editor/Index'

import '@/src/styles/global.scss'
import { Menu } from '../src/components/UI/menu/Menu'
import { Sidebar } from '../src/components/sidebar/Sidebar'
const FiraCode = Fira_Code({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
}

const data = [{ title: 'Маркетинг', link: '/', description: 'Рекламные кейсы из России и других стран, советы по продвижению, маркетинг и digital.', imgUrl: 'https://leonardo.osnova.io/d66009fe-9bf0-52da-bdbf-4c758eba39e7/-/scale_crop/108x108/-/format/webp/' }, { title: 'Python', link: '/', description: 'Рекламные кейсы из России и других стран, советы по продвижению, маркетинг и digital.', imgUrl: 'https://leonardo.osnova.io/d66009fe-9bf0-52da-bdbf-4c758eba39e7/-/scale_crop/108x108/-/format/webp/' }]


export default function RootLayout({ children }: Props) {
  return (
    <Provider store={store}>
      <html lang="ru">
        <body className={FiraCode.className}>
          <Header />
          <div className="page">
            <div className="container page-container">
              <Menu />
              <main className="main">{children}</main>
              <EditorComponent />
              <Sidebar title="Топ сообществ" path='/top' data={data} />
            </div>
          </div>
        </body>
      </html>
    </Provider>
  )
}
