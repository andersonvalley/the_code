// import { useAppSelector } from '@/src/hooks/useRedux'
import { Editor } from './Editor'
import './editor.scss'

export const EditorComponent = () => {
  // const { isOpen } = useAppSelector(store => store.editor)

  return (
    <div className={true ? 'editor open' : 'editor'}>
      <div className="editor__wrapper">{true && <Editor />}</div>
    </div>
  )
}
