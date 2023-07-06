import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface state {
  isOpenMenu: boolean
  isOpenRightSidebar: boolean
}

const initialState: state = {
  isOpenMenu: true,
  isOpenRightSidebar: true,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleMenu: state => {
      state.isOpenMenu = !state.isOpenMenu
    },
    toggleRightSidebar: state => {
      state.isOpenRightSidebar = !state.isOpenRightSidebar
    },
  },
})

export const { toggleMenu, toggleRightSidebar } = sidebarSlice.actions
export const selectSidebar = (state: RootState) => state.sidebar
export default sidebarSlice.reducer
