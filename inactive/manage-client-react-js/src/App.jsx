// App.jsx
import React, {useEffect, useState} from 'react'
import Layout from './components/Layout.jsx'

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Login from './components/Login' // 假设你有一个 Login 组件

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

    return (
        <Router>
            <Routes>
                {/* 最开始的路由是登录 */}
                <Route path='/' element={<Login setTheme={setTheme} setCurrent={setCurrent} />} />
                {/* 登录之后跳转到管理页面 */}
                <Route path='/main' element={<Layout theme={theme} setTheme={setTheme} current={current} setCurrent={setCurrent} />} />
            </Routes>
        </Router>
    )
}
