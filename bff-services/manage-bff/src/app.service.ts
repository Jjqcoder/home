import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) {} // 直接注入 DataSource
  getHello(): string {
    return 'Hello World!';
  }

  async testBlogTable(): Promise<string> {
    try {
      // 直接查询你的 BLOG 表（假设表已存在）
      const blogs = await this.dataSource.query('SELECT * FROM BLOG LIMIT 1');
      return `BLOG表测试成功，首条记录ID: ${JSON.stringify(blogs[0]) || '无数据'}`;
    } catch (error) {
      return `BLOG表查询失败: ${error.message}`;
    }
  }
}
