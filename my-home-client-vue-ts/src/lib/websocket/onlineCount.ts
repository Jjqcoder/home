/**
 * 创建时间: 2025-06-04
 * 作者: jjq
 * 描述: 封装了 WebSocket 连接、心跳检测、断线重连等功能，用于实现实时在线人数统计功能
 */

export class OnlineCount {
  /**
   * 构造函数
   * @param url WebSocket 服务器地址
   * @param onMessageCallback 消息回调函数
   * @param options 配置选项
   *   - maxReconnectAttempts: 最大重连次数 (默认: 5)
   *   - reconnectInterval: 重连间隔(毫秒) (默认: 5000)
   *   - pingInterval: 心跳间隔(毫秒) (默认: 10000)
   */
  constructor(
    private url: string,
    private onMessageCallback: (message: string) => void,
    private options: {
      maxReconnectAttempts?: number;
      reconnectInterval?: number;
      pingInterval?: number;
    } = {}
  ) {
    this.options = {
      maxReconnectAttempts: options.maxReconnectAttempts || 5,
      reconnectInterval: options.reconnectInterval || 5000,
      pingInterval: options.pingInterval || 10000,
    };

    this.socket = null;
    this.reconnectAttempts = 0;
    this.pingTimer = null;
    this.isManualClose = false; // 是否手动关闭连接

    this.connect(); // 建立连接
  }

  private socket: WebSocket | null;
  private reconnectAttempts: number;
  private pingTimer: NodeJS.Timeout | null;
  private isManualClose: boolean;

  /**
   * 建立 WebSocket 连接
   */
  private connect(): void {
    try {
      this.socket = new WebSocket(this.url);

      // 连接成功
      this.socket.onopen = (): void => {
        console.log('【OnlineCount-WebSocket】连接成功');
        this.reconnectAttempts = 0; // 重置重连次数
        this.startHeartbeat(); // 开始心跳检测
      };

      // 处理消息
      this.socket.onmessage = (event: MessageEvent<string>): void => {
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
      this.socket.onclose = (): void => {
        console.log('WebSocket connection closed');
        this.stopHeartbeat();
        if (!this.isManualClose) {
          this.reconnect();
        }
      };

      // 连接错误
      this.socket.onerror = (error: Event): void => {
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
   * @param message 要发送的消息
   */
  public send(message: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    }
  }

  /**
   * 开始心跳检测
   */
  private startHeartbeat(): void {
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
  private stopHeartbeat(): void {
    if (this.pingTimer) {
      clearInterval(this.pingTimer);
      this.pingTimer = null;
    }
  }

  /**
   * 断线重连
   */
  private reconnect(): void {
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
  public close(): void {
    this.isManualClose = true;
    this.stopHeartbeat();
    if (this.socket) {
      this.socket.close();
    }
  }
}