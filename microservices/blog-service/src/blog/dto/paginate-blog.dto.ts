// src/blog/dto/paginate-blog.dto.ts
import { IsNumber, IsOptional, Min } from 'class-validator';
// 引入Swagger装饰器
import { ApiProperty } from '@nestjs/swagger';

export class PaginateBlogDto {
  @ApiProperty({ description: '页码', example: 1, required: false })
  @IsNumber()
  @IsOptional()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ description: '每页数量', example: 10, required: false })
  @IsNumber()
  @IsOptional()
  @Min(1)
  limit?: number = 10;
}
