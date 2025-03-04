/*
 * @Author: 江建清 1810422805@qq.com
 * @Date: 2024-10-14 19:39:26
 * @LastEditors: 江建清 1810422805@qq.com
 * @LastEditTime: 2024-11-05 20:03:54
 * @FilePath: \manage-client-vue\src\services\webSocketService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ReconnectingWebSocket from 'reconnecting-websocket';  
  
const ws = new ReconnectingWebSocket('ws://localhost:8090/ws');  

// console.log("打印"+JSON.stringify(ws));

  
export const webSocketService = {  
  sendMessage: (message: string) => {  
    ws.send(message);  
  },  
  onMessage: (callback: (message: string) => void) => {  
    ws.onmessage = (event) => {  
      callback(event.data);  
    };  
  },  
  // onError: (callback: (error: Event) => void) => {  
  //   ws.onerror = callback;  
  // },  
  // onClose: (callback: (event: CloseEvent) => void) => {  
  //   ws.onclose = callback;  
  // },  
};