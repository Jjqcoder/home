import {MailOutlined} from '@ant-design/icons'
import {Menu, Switch} from 'antd'
import React, {useEffect, useState} from 'react'

// 定义一些示例组件
const Content1 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#3498db',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 1
    </div>
)

const Content2 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#2ecc71',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 2
    </div>
)

const items = [
    {
        key: '1',
        label: 'Option 1',
        icon: <MailOutlined />
    },
    {
        key: '2',
        label: 'Option 2',
        icon: <MailOutlined />
    }
]

export const App = () => {
    const [theme, setTheme] = useState('dark') // 初始值为 'dark'
    const [current, setCurrent] = useState('1') // 当前选中的菜单项的 key

    // 在组件挂载时读取 localStorage 中的主题设置
    useEffect(() => {
        // ================亮色模式暗色模式处理开始================
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setTheme(storedTheme)
            if (storedTheme === 'dark') {
                document.body.style.backgroundColor = '#121212' // 暗色背景
                document.body.style.color = '#d9d9d9' // 亮色文字
            } else {
                document.body.style.backgroundColor = '#FFFFFF' // 亮色背景
                document.body.style.color = '#121212' // 暗色文字
            }
        }
        // ================亮色模式暗色模式处理结束================
    }, []) // 空数组表示只在组件挂载时执行一次

    // 切换主题的函数
    const changeTheme = value => {
        setTheme(value ? 'dark' : 'light')
        if (value) {
            document.body.style.backgroundColor = '#121212' // 暗色背景
            document.body.style.color = '#d9d9d9' // 亮色文字
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.style.backgroundColor = '#FFFFFF' // 亮色背景
            document.body.style.color = '#121212' // 暗色文字
            localStorage.setItem('theme', 'light')
        }
    }

    const onClick = e => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    // 根据当前选中的菜单项的 key 渲染对应的组件
    const contentMap = {
        1: <Content1 />,
        2: <Content2 />
    }

    return (
        <div style={{display: 'flex'}}>
            <div style={{width: 256}}>
                <Switch checked={theme === 'dark'} onChange={changeTheme} checkedChildren='Dark' unCheckedChildren='Light' />
                <br />
                <br />
                <Menu theme={theme} onClick={onClick} style={{width: 256}} mode='inline' items={items} />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
                <h2>Selected Content</h2>
                {contentMap[current] || <div>No content available</div>}
            </div>
        </div>
    )
}
