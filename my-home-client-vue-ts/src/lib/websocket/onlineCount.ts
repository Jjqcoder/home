/**
 * 创建时间: 2025-06-04
 * 作者: jjq
 * 描述: 封装了 WebSocket 连接、心跳检测、断线重连等功能，用于实现实时【在线人数统计】功能
 */

export class OnlineCount {
    /**
     * 构造函数
     * @param {string} url WebSocket 服务器地址
     * @param {function} onMessageCallback 消息回调函数
     * @param {object} options 配置选项
     *   - maxReconnectAttempts: 最大重连次数 (默认: 5)
     *   - reconnectInterval: 重连间隔(毫秒) (默认: 3000)
     *   - pingInterval: 心跳间隔(毫秒) (默认: 10000)
     */
    constructor(url, onMessageCallback, options = {}) {
      this.url = url;
      this.onMessageCallback = onMessageCallback;
      this.options = {
        maxReconnectAttempts: options.maxReconnectAttempts || 5,
        reconnectInterval: options.reconnectInterval || 5000,
        pingInterval: options.pingInterval || 10000,
      };
      
      this.socket = null;
      this.reconnectAttempts = 0;
      this.pingTimer = null;
      this.isManualClose = false; // 是否手动关闭连接
      
      this.connect();// 建立连接
    }
    
    /**
     * 建立 WebSocket 连接
     */
    connect() {
      try {
        this.socket = new WebSocket(this.url);
        
        // 连接成功
        this.socket.onopen = () => {
          console.log('【OnlineCount-WebSocket】连接成功');
          this.reconnectAttempts = 0; // 重置重连次数
          this.startHeartbeat(); // 开始心跳检测
        };
        
        // 处理消息
        this.socket.onmessage = (event) => {
          if (event.data === 'pong') {
            // 服务器发来的心跳响应
            this.reconnectAttempts = 0; // 重置重连次数
          } else if (event.data === 'ping') {
            // 服务器发来的心跳请求，回复心跳
            this.send('pong');
          } else {
            // 其他消息传递给回调函数
            this.onMessageCallback(event.data);
          }
        };
        
        // 连接关闭
        this.socket.onclose = () => {
          console.log('WebSocket connection closed');
          this.stopHeartbeat();
          if (!this.isManualClose) {
            this.reconnect();
          }
        };
        
        // 连接错误
        this.socket.onerror = (error) => {
          console.error('WebSocket error occurred:', error);
          this.stopHeartbeat();
          if (!this.isManualClose) {
            this.reconnect();
          }
        };
      } catch (error) {
        console.error('WebSocket connection failed:', error);
        this.reconnect();
      }
    }
    
    /**
     * 发送消息
     * @param {string} message 要发送的消息
     */
    send(message) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(message);
      }
    }
    
    /**
     * 开始心跳检测
     */
    startHeartbeat() {
      this.stopHeartbeat(); // 先停止已有的心跳检测
      
      this.pingTimer = setInterval(() => {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
          console.log('【前端->后端】发送心跳包');
          this.send('ping');
        }
      }, this.options.pingInterval);
    }
    
    /**
     * 停止心跳检测
     */
    stopHeartbeat() {
      if (this.pingTimer) {
        clearInterval(this.pingTimer);
        this.pingTimer = null;
      }
    }
    
    /**
     * 断线重连
     */
    reconnect() {
      if (this.reconnectAttempts < this.options.maxReconnectAttempts) {
        this.reconnectAttempts++;
        console.log(`【WebSocket】尝试第【${this.reconnectAttempts}】次重连...`);
        setTimeout(() => this.connect(), this.options.reconnectInterval);
      } else {
        console.error('达到最大重连次数，不再尝试重连');
      }
    }
    
    /**
     * 关闭 WebSocket 连接
     */
    close() {
      this.isManualClose = true;
      this.stopHeartbeat();
      if (this.socket) {
        this.socket.close();
      }
    }
  }