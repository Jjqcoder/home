// 引入 Axios  
import axios, { AxiosResponse } from 'axios';  
  
// 定义一个函数来发起 GET 请求  
async function fetchData(url: string): Promise<AxiosResponse> {  
    try {  
        // 每次请求都带上tokenName和tokenValue
        const tokenValue = localStorage.getItem('tokenValue');
        // console.log(tokenName,tokenValue);
        const response = await axios.get(url,{
            headers: {  
                'Content-Type': 'application/json',
                'satoken':tokenValue,
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
    try {  
        // 每次请求都带上tokenName和tokenValue
        // const tokenName = localStorage.getItem('tokenName');
        const tokenValue = localStorage.getItem('tokenValue');
        // console.log(tokenName,tokenValue);
        
        const response = await axios.post(url, data,{
            headers: {  
                'Content-Type': 'application/json',
                // 注意键名为satoken！！
                'satoken':tokenValue,
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