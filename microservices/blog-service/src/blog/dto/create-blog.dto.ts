// src/blog/dto/create-blog.dto.ts
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
// 引入Swagger装饰器
import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto {
  @ApiProperty({ description: '博客标题', example: ' NestJS教程' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: '博客内容',
    example: ' NestJS是一个基于Node.js的框架...',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: '博客作者', example: '张三', required: false })
  @IsString()
  @IsOptional()
  author?: string;
}
