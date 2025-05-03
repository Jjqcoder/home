// App.jsx
import React, {useEffect, useState} from 'react'
import Layout from './components/Layout.jsx'

export const App = () => {
    const [theme, setTheme] = useState('dark') // 初始值为 'dark'
    const [current, setCurrent] = useState('1') // 当前选中的菜单项的 key

    // 在组件挂载时读取 localStorage 中的主题设置
    useEffect(() => {
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
    }, []) // 空数组表示只在组件挂载时执行一次

    return <Layout theme={theme} setTheme={setTheme} current={current} setCurrent={setCurrent} />
}
