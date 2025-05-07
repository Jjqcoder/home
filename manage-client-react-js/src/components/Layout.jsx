// 布局组件
// Layout.jsx
import {MailOutlined} from '@ant-design/icons'
import {Menu, Switch} from 'antd'
import React from 'react'
import Content1 from './Content1.jsx'
import Content2 from './Content2.jsx'

const Layout = ({theme, setTheme, current, setCurrent}) => {
    // 切换主题的函数
    const changeTheme = value => {
        setTheme(value ? 'dark' : 'light')
        if (value) {
            document.body.style.backgroundColor = '#1f1f1f' // 暗色背景
            document.body.style.color = '#d9d9d9' // 亮色文字
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.style.backgroundColor = '#FFFFFF' // 亮色背景
            document.body.style.color = '#1f1f1f' // 暗色文字
            localStorage.setItem('theme', 'light')
        }
    }

    const onClick = e => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    // 使用 switch 语句渲染内容
    const renderContent = () => {
        switch (current) {
            case '1':
                return <Content1 />
            case '2':
                return <Content2 />
            default:
                return <div>No content available</div>
        }
    }

    return (
        <div style={{display: 'flex'}}>
            <div style={{width: 256}}>
                <Switch checked={theme === 'dark'} onChange={changeTheme} checkedChildren='Dark' unCheckedChildren='Light' />
                <br />
                <br />
                <Menu
                    theme={theme}
                    onClick={onClick}
                    style={{width: 256}}
                    mode='inline'
                    items={[
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
                    ]}
                />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
                <h2>Selected Content</h2>
                {renderContent()}
            </div>
        </div>
    )
}

export default Layout
