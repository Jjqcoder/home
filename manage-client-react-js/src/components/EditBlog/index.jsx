/**
 * 创建时间: 2025-05-22
 * 作者: jjq
 * 描述: blog编辑页面
 */

import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {useState} from 'react'

const RichTextEditor = () => {
    const [editorContent, setEditorContent] = useState('请在此处进行编辑')

    const editor = useEditor({
        extensions: [StarterKit, Image, Link],
        content: editorContent,
        onUpdate: ({editor}) => {
            console.log(editor.getHTML()) // 富文本格式的数据

            setEditorContent(editor.getHTML())
        }
    })

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>富文本编辑器</h1>
            <EditorContent editor={editor} />
            <div
                style={{
                    margin: '20px',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px'
                }}
                dangerouslySetInnerHTML={{__html: editorContent}}
            />
        </div>
    )
}

export default RichTextEditor
