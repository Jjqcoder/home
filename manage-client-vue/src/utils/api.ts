// 引入 Axios  
import axios, { AxiosResponse } from 'axios';  
  
// 定义一个函数来发起 GET 请求  
async function fetchData(url: string): Promise<AxiosResponse> {  
    const token = localStorage.getItem('token')
    try {  
        const response = await axios.get(url,{
            headers: {  
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // 请求携带token
            }  
        });  
        return response;  
    } catch (error) {  
        console.error('Error fetching data:', error);  
        throw error;  
    }  
}  
  
// 定义一个函数来发起 POST 请求  
async function postData(url: string, data: object): Promise<AxiosResponse> { 
    const token = localStorage.getItem('token') 
    try {  
        const response = await axios.post(url, data,{
            headers: {  
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // 请求携带token
            } 
        });  
        return response;  
    } catch (error) {  
        console.error('Error posting data:', error);  
        throw error;  
    }  
}  

// 导出函数
export { fetchData, postData };