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
// 引入Swagger装饰器
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('博客') // 添加标签
@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  @ApiOperation({ summary: '获取博客列表', description: '分页获取博客列表' })
  @ApiResponse({ status: 200, description: '成功获取博客列表' })
  async findAll(@Query() paginateDto: PaginateBlogDto) {
    return this.blogService.paginate(paginateDto);
  }

  @Post()
  @ApiOperation({ summary: '创建博客', description: '创建新的博客文章' })
  @ApiResponse({ status: 201, description: '成功创建博客' })
  @ApiResponse({ status: 400, description: '请求参数错误' })
  async create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取博客详情', description: '根据ID获取博客详情' })
  @ApiParam({ name: 'id', description: '博客ID', example: 1 })
  @ApiResponse({ status: 200, description: '成功获取博客详情' })
  @ApiResponse({ status: 404, description: '博客不存在' })
  async findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新博客', description: '根据ID更新博客信息' })
  @ApiParam({ name: 'id', description: '博客ID', example: 1 })
  @ApiResponse({ status: 200, description: '成功更新博客' })
  @ApiResponse({ status: 400, description: '请求参数错误' })
  @ApiResponse({ status: 404, description: '博客不存在' })
  async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除博客', description: '根据ID删除博客' })
  @ApiParam({ name: 'id', description: '博客ID', example: 1 })
  @ApiResponse({ status: 200, description: '成功删除博客' })
  @ApiResponse({ status: 404, description: '博客不存在' })
  async remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}
