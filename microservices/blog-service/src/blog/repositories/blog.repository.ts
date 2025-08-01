// src/blog/repositories/blog.repository.ts
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Blog } from '../entities/blog.entity';

@Injectable()
export class BlogRepository extends Repository<Blog> {
  constructor(private dataSource: DataSource) {
    super(Blog, dataSource.createEntityManager());
  }

  // 自定义查询方法示例：按作者查询
  async findByAuthor(author: string): Promise<Blog[]> {
    return this.createQueryBuilder('blog')
      .where('blog.author = :author', { author })
      .orderBy('blog.created_at', 'DESC')
      .getMany();
  }

  // 自定义查询方法示例：标题搜索
  async searchByTitle(keyword: string): Promise<Blog[]> {
    return this.createQueryBuilder('blog')
      .where('blog.title LIKE :keyword', { keyword: `%${keyword}%` })
      .getMany();
  }
}