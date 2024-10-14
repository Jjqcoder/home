import ReconnectingWebSocket from 'reconnecting-websocket';  
  
const ws = new ReconnectingWebSocket('ws://localhost:8090/ws');  

console.log("打印"+JSON.stringify(ws));

  
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