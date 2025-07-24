/**
 * 创建时间: 2025-06-21
 * 作者: jjq
 * 描述: 发布入口
 */

import { EventBus } from '../eventbus';
import { Product } from '../types';

export class ShoppingCart {
    private items: Product[];
    private eventBus: EventBus;
  
    constructor(eventBus: EventBus) {
      this.items = [];
      this.eventBus = eventBus;
    }
  
    // 添加商品到购物车
    addItem(product: Product): void {
      this.items.push(product);
      console.log(`[购物车] 添加商品: ${product.name}`);
      
      // 发布"商品添加"事件
      this.eventBus.emit('itemAdded', product, this.items);
    }
  
    // 移除商品
    removeItem(productId: number): void {
      const index = this.items.findIndex(item => item.id === productId);
      if (index !== -1) {
        const removedItem = this.items.splice(index, 1)[0];
        console.log(`[购物车] 移除商品: ${removedItem.name}`);
        
        // 发布"商品移除"事件
        this.eventBus.emit('itemRemoved', removedItem, this.items);
      }
    }
  
    // 获取购物车商品列表
    getItems(): Product[] {
      return [...this.items];
    }
  }