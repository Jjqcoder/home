/**
 * 创建时间: 2025-05-26
 * 作者: jjq
 * 描述: 封装 axios 请求
 */

// 引入 axios
import axios from 'axios'

// 创建 axios 实例
const http = axios.create({
    baseURL: `${import.meta.env.VITE_IN_USE_BASE_URL}`, // 设置请求的基础路径
    timeout: 10000, // 设置超时时间
    headers: {
        'Content-Type': 'application/json' // 默认全局设置 JSON 格式
    }
})

// 封装 GET 请求
async function get(url, params = {}) {
    try {
        const response = await http.get(url, {params})
        return response
    } catch (error) {
        throw error
    }
}

// 封装 POST 请求
async function post(url, data = {}) {
    try {
        const response = await http.post(url, data)
        return response
    } catch (error) {
        throw error
    }
}

// 导出方法
export { get, post }

