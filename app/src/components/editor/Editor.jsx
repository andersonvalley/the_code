'use client'

import CodeTool from '@editorjs/code'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'
import List from '@editorjs/list'
import SimpleImage from '@editorjs/simple-image'

import { useEffect, useState } from 'react'
import './editor.scss'


function Editor() {
  const [editorReady, setEditorReady] = useState(false)

  useEffect(() => {
    let editor = new EditorJS({
      holder: 'editorjs',
      inlineToolbar: true,
      data: {
        blocks: [
          {
            type: 'header',
            data: {
              placeholder: 'Заголовок',
              text: '',
              level: 2,
            },
          },
        ],
      },
      tools: {
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
      },

      /**
       * Internationalzation config
       */
      i18n: {
        /**
         * @type {I18nDictionary}
         */
        messages: {
          /**
           * Other below: translation of different UI components of the editor.js core
           */
          ui: {
            blockTunes: {
              toggler: {
                'Click to tune': 'Нажмите, чтобы настроить',
                'or drag to move': 'или перетащите',
              },
            },
            inlineToolbar: {
              converter: {
                'Convert to': 'Конвертировать в',
              },
            },
            toolbar: {
              toolbox: {
                Add: 'Добавить',
              },
            },
          },

          /**
           * Section for translation Tool Names: both block and inline tools
           */
          toolNames: {
            Text: 'Параграф',
            Heading: 'Заголовок',
            List: 'Список',
            Warning: 'Примечание',
            Checklist: 'Чеклист',
            Quote: 'Цитата',
            Code: 'Код',
            Delimiter: 'Разделитель',
            'Raw HTML': 'HTML-фрагмент',
            Table: 'Таблица',
            Link: 'Ссылка',
            Marker: 'Маркер',
            Bold: 'Полужирный',
            Italic: 'Курсив',
            InlineCode: 'Моноширинный',
          },

          /**
           * Section for passing translations to the external tools classes
           */
          tools: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
             * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
             */
            warning: {
              // <-- 'Warning' tool will accept this dictionary section
              Title: 'Название',
              Message: 'Сообщение',
            },

            /**
             * Link is the internal Inline Tool
             */
            link: {
              'Add a link': 'Вставьте ссылку',
            },
            /**
             * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
             */
            stub: {
              'The block can not be displayed correctly.': 'Блок не может быть отображен',
            },
          },

          /**
           * Section allows to translate Block Tunes
           */
          blockTunes: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
             * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
             *
             * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
             */
            delete: {
              Delete: 'Удалить',
            },
            moveUp: {
              'Move up': 'Переместить вверх',
            },
            moveDown: {
              'Move down': 'Переместить вниз',
            },
          },
        },
      },
    })

    editor.isReady.then(() => {
      setEditorReady(true)
    })

    return () => editor.destroy()
  }, [])

  return (
    <>
      <div id="editorjs"></div>
      {editorReady && (
        <div className="editor__footer">
          <div className="container editor__footer-container">
            <button className="btn editor__submit">Опубликовать</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Editor