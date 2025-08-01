// src/blog/services/blog.service.ts
import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { PaginateBlogDto } from '../dto/paginate-blog.dto';
import { UpdateBlogDto } from '../dto/update-blog.dto';
import { Blog } from '../entities/blog.entity';
import { BlogRepository } from '../repositories/blog.repository';

@Injectable()
export class BlogService {
  constructor(private readonly blogRepository: BlogRepository) {}

  async paginate(paginateDto: PaginateBlogDto): Promise<[Blog[], number]> {
    const { page = 1, limit = 10 } = paginateDto;
    return this.blogRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });
  }

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const blog = this.blogRepository.create(createBlogDto);
    return this.blogRepository.save(blog);
  }

  async findOne(id: number): Promise<Blog | null> {
    return this.blogRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto): Promise<Blog | null> {
    await this.blogRepository.update(id, updateBlogDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.blogRepository.delete(id);
  }
}