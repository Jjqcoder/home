/**
 * 创建时间: 2025-06-21
 * 作者: jjq
 * 描述: 订阅入口
 */
import { EventBus } from '../eventbus';
import { Product } from '../types';

export class RecommendationSystem {
    private eventBus: EventBus;
    private readonly relatedProducts: Record<string, string[]>;
  
    constructor(eventBus: EventBus) {
      this.eventBus = eventBus;
      this.relatedProducts = {
        '手机': ['手机壳', '耳机', '充电宝'],
        '笔记本电脑': ['鼠标', '键盘', '电脑包'],
        '衣服': ['裤子', '帽子', '鞋子']
      };
      
      // 订阅"商品添加"事件
      this.eventBus.on('itemAdded', this.updateRecommendations.bind(this));
    }
  
    private updateRecommendations(product: Product): void {
      // 基于当前商品的推荐逻辑
      const recommendations = this.relatedProducts[product.category] || ['热门商品'];
      console.log(`[推荐系统] 基于 ${product.name} 为您推荐: ${recommendations.join(', ')}`);
    }
  }