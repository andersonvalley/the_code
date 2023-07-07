import CodeTool from '@editorjs/code'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'
import List from '@editorjs/list'
import SimpleImage from '@editorjs/simple-image'

import CheckList from '@editorjs/checklist'
import Code from '@editorjs/code'
import Delimiter from '@editorjs/delimiter'
import Embed from '@editorjs/embed'
import Image from '@editorjs/image'
import InlineCode from '@editorjs/inline-code'
import LinkTool from '@editorjs/link'
import Marker from '@editorjs/marker'
import Quote from '@editorjs/quote'
import Raw from '@editorjs/raw'
import Table from '@editorjs/table'
import Warning from '@editorjs/warning'
import CodeBox from '@bomdi/codebox'

export const tools = () => {
  return {
    header: {
      class: Header,
      config: {
        levels: [1, 2, 3, 4],
        defaultLevel: 2,
        inlineToolbar: true,
        placeholder: 'Заголовок',
      },
    },
    list: {
      style: 'unordered',
      class: List,
      config: {
        defaultStyle: 'unordered',
        inlineToolbar: true,
      },
    },
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        },
      },
    },
    image: SimpleImage,
    code: CodeTool,
  }
}

export const JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  header: {
    class: Header,
    config: {
      levels: [1, 2, 3, 4],
      defaultLevel: 2,
      inlineToolbar: true,
    },
  },
  codeBox: {
    class: CodeBox,
    config: {
      themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', // Optional
      themeName: 'atom-one-dark', // Optional
      useDefaultTheme: 'light', // Optional. This also determines the background color of the language select drop-down
    },
  },
  embed: Embed,
  table: Table,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
}
