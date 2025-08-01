// src/blog/dto/paginate-blog.dto.ts
import { IsNumber, IsOptional, Min } from 'class-validator';

export class PaginateBlogDto {
  @IsNumber()
  @IsOptional()
  @Min(1)
  page?: number = 1;

  @IsNumber()
  @IsOptional()
  @Min(1)
  limit?: number = 10;
}