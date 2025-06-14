import { Button, Form, Input, Space } from 'antd'
import { useState } from 'react'
import { post } from '../utils/request'

const Login = () => {
    // 定义状态用于存储用户名和密码
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // 登录按钮的点击事件处理函数
    const handleLogin = async () => {
        console.log('用户名:', username)
        console.log('密码:', password)
        // 登录注册开始
        let res = await post('/login/loginAndRegister', {
            username,
            password
        })
        console.log(res);
        // 登录注册结束
        
        // 路由跳转到 /main
        // window.location.href = '/main'
    }

    return (
        <div style={{width: 300, margin: '50px auto'}}>
            <h2 style={{color: '#FFA500', textAlign: 'center'}}>manage-client-react-js</h2>
            <Form>
                <Form.Item>
                    <Input placeholder='请输入用户名' value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Input.Password placeholder='请输入密码' value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type='primary' onClick={handleLogin}>
                            登录
                        </Button>
                        <Button type='primary' onClick={() => console.log('游客登录！')}>
                            游客登录
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
