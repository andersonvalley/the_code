'use client'

import { Header } from '@/components/header/Header'
import { store } from '@/src/store/store'
import { Fira_Code } from 'next/font/google'
import { Provider } from 'react-redux'

import '@/src/styles/global.scss'
const FiraCode = Fira_Code({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <Provider store={store}>
      <html lang="ru">
        <body className={FiraCode.className}>
          <Header />
          <div className="page">
            <main className="main">{children}</main>
            {/* <EditorComponent /> */}
          </div>
        </body>
      </html>
    </Provider>
  )
}
