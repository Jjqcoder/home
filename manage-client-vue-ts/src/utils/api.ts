/*
 * @Author: 江建清 1810422805@qq.com
 * @Date: 2024-10-10 20:40:48
 * @LastEditors: 江建清 1810422805@qq.com
 * @LastEditTime: 2024-10-25 21:09:21
 * @FilePath: \manage-client-vue\src\utils\api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
        console.error('[api出错:发起GET请求的时候发生了错误!]', error);  
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
        console.error('[api出错:发起POST请求的时候发生了错误!]', error);  
        throw error;  
    }  
}  

// 导出函数
export { fetchData, postData };