/**
 * 创建时间: 2025-06-21
 * 作者: jjq
 * 描述: 事件总线
 */

export class EventBus {
    private events: { [eventName: string]: Array<(...args: any[]) => void> };
  
    constructor() {
      this.events = {}; // 存储事件及对应的回调函数数组
    }
  
    // 订阅事件
    on(eventName: string, callback: (...args: any[]) => void): void {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    }
  
    // 发布事件
    emit(eventName: string, ...args: any[]): void {
      if (!this.events[eventName]) return;
      
      // 依次执行所有订阅的回调
      this.events[eventName].forEach(callback => {
        callback(...args);
      });
    }
  
    // 取消订阅
    off(eventName: string, callback: (...args: any[]) => void): void {
      if (!this.events[eventName]) return;
      
      this.events[eventName] = this.events[eventName].filter(
        cb => cb !== callback
      );
    }
  }