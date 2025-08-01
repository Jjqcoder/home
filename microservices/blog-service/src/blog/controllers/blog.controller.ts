// src/blog/controllers/blog.controller.ts
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { PaginateBlogDto } from '../dto/paginate-blog.dto';
import { UpdateBlogDto } from '../dto/update-blog.dto';
import { BlogService } from '../services/blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(@Query() paginateDto: PaginateBlogDto) {
    return this.blogService.paginate(paginateDto);
  }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}