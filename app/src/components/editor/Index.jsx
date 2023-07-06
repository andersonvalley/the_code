import { useAppSelector } from '@/src/hooks/useRedux';
import dynamic from 'next/dynamic';
import './editor.scss';

let Editor;

export const EditorComponent = () => {
  const { isOpen } = useAppSelector(store => store.editor)
  if (typeof window !== "undefined") {
    Editor = dynamic(() => import('./Editor'));
  }

  return (
    <div className={isOpen ? 'editor open' : 'editor'}>
      <div className="editor__wrapper">{isOpen && Editor && <Editor />}</div>
    </div >
  )
}
