import { AiOutlineFieldTime } from 'react-icons/ai'
import { BiCollection } from 'react-icons/bi'
import { FaFire } from 'react-icons/fa'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { TbBrandFeedly } from 'react-icons/tb'
import { AppRoutes } from '../../../routes/AppRoutes'

export const MenuItems = [
  { id: 0, name: 'Популярное', link: '/', icon: <FaFire className='icon' size={22} /> },
  { id: 1, name: 'Свежее', link: '/new', icon: <AiOutlineFieldTime className='icon' size={25} /> },
  { id: 2, name: 'Моя лента', link: '/feed', icon: <TbBrandFeedly className='icon icon-feed' size={25} /> },
  { id: 3, name: 'Подписки', link: '/subs', icon: <MdOutlineSubscriptions className='icon' size={25} /> },
]

export const MobileMenuItems = [
  { id: 0, name: 'Закладки', link: AppRoutes.FAVORITES, icon: <BiCollection className='icon' size={25} /> },
]