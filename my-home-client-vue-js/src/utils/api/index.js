/**
 * 创建时间: 2025-03-20
 * 作者: jjq
 * 描述: 封装 axios 请求
 */

// 引入 axios
import axios from 'axios'

/* 常量的定义开始 */
const BASE_URL = import.meta.env.VITE_IN_USE_BASE_URL /* 基础 URL */
const TIMEOUT = 10000 /* 请求超时时间，单位毫秒 */
const MAX_RETRIES = 3 /* 最大重试次数 */
/* 常量的定义结束 */

// 创建 axios 实例
const http = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

// 带重试的请求函数 (内部使用)
async function requestWithRetry(requestFn) {
    const maxRetries = MAX_RETRIES
    let lastError

    for (let i = 0; i < maxRetries; i++) {
        try {
            console.log(`最大请求次数为${maxRetries}，正在进行第${i + 1}次请求...`)

            const response = await requestFn()
            return response
        } catch (error) {
            lastError = error
            // 只在网络错误或5xx错误时重试
            if (!error.response || error.response.status >= 500) {
                await new Promise(resolve => setTimeout(resolve, 1000)) // 等待1秒后重试
                continue
            }
            throw error // 如果其他错误则直接抛出，不再重试
        }
    }
    throw lastError
}

// 封装 GET 请求
async function get(url, params = {}) {
    return requestWithRetry(() => http.get(url, {params}))
}

// 封装 POST 请求
async function post(url, data = {}) {
    return requestWithRetry(() => http.post(url, data))
}

// 导出方法
export {get, post}
