/**
 * 创建时间: 2025-03-20
 * 作者: jjq
 * 描述: 封装 axios 请求
 */

// 引入 axios
import axios from 'axios';

// 创建 axios 实例
const http = axios.create({
    baseURL: `${import.meta.env.VITE_IN_USE_BASE_URL}`, // 设置请求的基础路径
    timeout: 5000, // 设置超时时间
});

// 请求拦截器
// http.interceptors.request.use(
//     (config) => {
//         // 在这里可以对请求头等进行统一处理
//         // 例如添加 token
//         // config.headers['Authorization'] = 'Bearer your-token';
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// 响应拦截器
// http.interceptors.response.use(
//     (response) => {
//         // 对响应数据做点什么
//         return response.data; // 假设后端返回的响应数据是 response.data
//     },
//     (error) => {
//         // 对响应错误做点什么
//         console.error('请求失败:', error);
//         return Promise.reject(error);
//     }
// );

// 封装 GET 请求
async function get(url, params = {}) {
    try {
        const response = await http.get(url, { params });
        return response;
    } catch (error) {
        throw error;
    }
}

// 封装 POST 请求
async function post(url, data = {}) {
    try {
        const response = await http.post(url, data);
        return response;
    } catch (error) {
        throw error;
    }
}

// 导出方法
export { get, post };