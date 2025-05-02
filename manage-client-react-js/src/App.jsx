import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons'
import {Menu, Switch} from 'antd'
import React, {useState} from 'react'

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

const Content3 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#e74c3c',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 3
    </div>
)

const Content4 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#f1c40f',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 4
    </div>
)

const Content5 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#9b59b6',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 5
    </div>
)

const Content6 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#1abc9c',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 6
    </div>
)

const Content7 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#34495e',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 7
    </div>
)

const Content8 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#bdc3c7',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 8
    </div>
)

const Content9 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#95a5a6',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 9
    </div>
)

const Content10 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#7f8c8d',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 10
    </div>
)

const Content11 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#16a085',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 11
    </div>
)

const Content12 = () => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#27ae60',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px'
        }}
    >
        Content of Option 12
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
    },
    {
        key: '3',
        label: 'Option 3',
        icon: <MailOutlined />
    },
    {
        key: '4',
        label: 'Option 4',
        icon: <MailOutlined />
    },
    {
        key: '5',
        label: 'Option 5',
        icon: <AppstoreOutlined />
    },
    {
        key: '6',
        label: 'Option 6',
        icon: <AppstoreOutlined />
    },
    {
        key: '7',
        label: 'Option 7',
        icon: <AppstoreOutlined />
    },
    {
        key: '8',
        label: 'Option 8',
        icon: <AppstoreOutlined />
    },
    {
        key: '9',
        label: 'Option 9',
        icon: <SettingOutlined />
    },
    {
        key: '10',
        label: 'Option 10',
        icon: <SettingOutlined />
    },
    {
        key: '11',
        label: 'Option 11',
        icon: <SettingOutlined />
    },
    {
        key: '12',
        label: 'Option 12',
        icon: <SettingOutlined />
    }
]

export const App = () => {
    const [theme, setTheme] = useState('dark')
    const [current, setCurrent] = useState('1') // 当前选中的菜单项的 key

    const changeTheme = value => {
        setTheme(value ? 'dark' : 'light')
    }

    const onClick = e => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    // 根据当前选中的菜单项的 key 渲染对应的组件
    const contentMap = {
        1: <Content1 />,
        2: <Content2 />,
        3: <Content3 />,
        4: <Content4 />,
        5: <Content5 />,
        6: <Content6 />,
        7: <Content7 />,
        8: <Content8 />,
        9: <Content9 />,
        10: <Content10 />,
        11: <Content11 />,
        12: <Content12 />
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
