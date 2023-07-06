import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface state {
  isOpen: boolean
  confirmClose: boolean
}

const initialState: state = {
  isOpen: false,
  confirmClose: false,
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    openEditor: state => {
      state.isOpen = true
    },
    confirmClose: state => {
      state.confirmClose = true
    },
    closeEditor: state => {
      state.isOpen = false
      state.confirmClose = false
    },
  },
})

export const { openEditor, confirmClose, closeEditor } = editorSlice.actions
export const selectEditor = (state: RootState) => state.editor
export default editorSlice.reducer
