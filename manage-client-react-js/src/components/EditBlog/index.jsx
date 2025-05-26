/**
 * 创建时间: 2025-05-22
 * 作者: jjq
 * 描述: blog编辑页面
 */

import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {useEffect, useState} from 'react'

const RichTextEditor = () => {
    const [editorContent, setEditorContent] = useState('<p>加载中...</p>')
    const [title, setTitle] = useState('')

    // 模拟从数据库获取数据
    useEffect(() => {
        // 这里替换为实际的API调用
        const fetchData = async () => {
            // 假设这是从API获取的HTML数据
            const htmlFromDatabase = '<p>这是从数据库获取的<strong>富文本</strong>内容</p><img src="https://picsum.photos/150" alt="图片测试"><src>'

            setEditorContent(htmlFromDatabase)
            if (editor) {
                editor.commands.setContent(htmlFromDatabase)
            }
        }

        fetchData()
    }, [])

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link.configure({
                openOnClick: false
            })
        ],
        content: editorContent,
        onUpdate: ({editor}) => {
            const html = editor.getHTML()
            console.log('Editor content:', html)
            setEditorContent(html)
            // 这里可以添加保存到数据库的逻辑
        }
    })

    return (
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
            <h1 style={{textAlign: 'center'}}>富文本编辑器</h1>
            <div
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '10px',
                    minHeight: '200px',
                    marginBottom: '20px'
                }}
            >
                {/* 输入框的宽度继承父元素 */}
                <input
                    type='text'
                    placeholder='请输入标题'
                    style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '8px 12px',
                        marginBottom: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '16px'
                    }}
                    // 输入值绑定
                    value={title}
                    onChange={e => setTitle(e.target.value)} // Add this to update the title
                />
                <EditorContent editor={editor} />
                {/* 提交 */}
                <button
                    onClick={() => {
                        console.log('提交内容:', {title: title, content: editorContent})
                        // 这里可以添加保存到数据库的逻辑
                    }}
                    style={{
                        marginTop: '10px',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    提交
                </button>
            </div>

            <h2>预览:</h2>
            <div
                style={{
                    margin: '20px 0',
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
