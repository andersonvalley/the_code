'use client'
import { Menu } from '@/app/src/components/UI/menu/Menu'

import { Sidebar } from '@/app/src/components/sidebar/Sidebar'
import '../../src/styles/global.scss'

interface Props {
  children: React.ReactNode
}

const data = [{ title: 'Маркетинг', link: '/', description: 'Рекламные кейсы из России и других стран, советы по продвижению, маркетинг и digital.', imgUrl: 'https://leonardo.osnova.io/d66009fe-9bf0-52da-bdbf-4c758eba39e7/-/scale_crop/108x108/-/format/webp/' }, { title: 'Python', link: '/', description: 'Рекламные кейсы из России и других стран, советы по продвижению, маркетинг и digital.', imgUrl: 'https://leonardo.osnova.io/d66009fe-9bf0-52da-bdbf-4c758eba39e7/-/scale_crop/108x108/-/format/webp/' }]

export default function RootLayout({ children }: Props) {
  return (
    <div className="container page-container">
      <Menu />
      <main className="main">{children}</main>
      <Sidebar title="Топ комьюнити" path='/top' data={data} />
    </div>
  )
}
