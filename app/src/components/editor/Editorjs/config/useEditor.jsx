import EditorJS from '@editorjs/editorjs'
import { useEffect, useRef, useState } from "react"

import { configInt } from './i18n'
import { JS_TOOLS } from './tools'


export const useEditor = (holder) => {
  const [editorReady, setEditorReady] = useState(false)
  const editorRef = useRef()

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder,
      placeholder: 'Нажмите Tab для выбора блока',
      autofocus: false,
      inlineToolbar: true,
      tools: JS_TOOLS,
      i18n: configInt()
    })

    editorRef.current.isReady.then(() => {
      setEditorReady(true)
    })

    return () => editorRef.current.destroy()
  }, [])

  return { editorReady, setEditorReady }
}
