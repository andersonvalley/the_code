'use client'

import { useAppSelector } from '@/src/hooks/useRedux';
import dynamic from 'next/dynamic';
import './editor.scss';

const EditorJs = dynamic(import('./Editor'), {
  ssr: false,
});

export const EditorComponent = () => {
  const { isOpen } = useAppSelector(store => store.editor)

  return (
    <div className={isOpen ? 'editor open' : 'editor'}>
      <div className="editor__wrapper">{isOpen && <EditorJs />}</div>
    </div>
  )
}
