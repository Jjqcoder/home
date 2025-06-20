/**
 * 创建时间: 2025-06-21
 * 作者: jjq
 * 描述: 发布订阅入口
 */

import { EventBus } from './eventbus';
import { ShoppingCart } from './pub';
import { RecommendationSystem } from './sub';
import { Product } from './types';

const eventbus = new EventBus()
const cart = new ShoppingCart(eventbus)
const recommendationSystem = new RecommendationSystem(eventbus)

// 模拟商品数据
const products: Product[] = [
    { id: 1, name: 'iPhone 13', category: '手机', price: 5999 },
    { id: 2, name: 'MacBook Pro', category: '笔记本电脑', price: 12999 },
    { id: 3, name: 'T恤', category: '衣服', price: 99 }
];

export const startPubSub = async () => {
    console.group('发布订阅测试开始');
    cart.addItem(products[0]);  // 添加手机
    console.log('----------------');
    cart.addItem(products[1]);  // 添加笔记本电脑
    console.log('----------------');
    cart.removeItem(1);         // 移除手机
    console.log('----------------');
    cart.removeItem(2);         // 移除笔记本电脑
    console.groupEnd();
}
