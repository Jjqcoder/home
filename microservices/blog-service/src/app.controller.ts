import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// 引入Swagger装饰器
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('首页') // 添加标签
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: '获取欢迎信息',
    description: '返回系统欢迎信息并测试数据库连接',
  })
  @ApiResponse({ status: 200, description: '成功获取欢迎信息' })
  async getHello(): Promise<string> {
    /* get blog data start */
    console.log('typeorm test start');
    console.log(await this.appService.testBlogTable());
    console.log('typeorm test end');

    /* get blog data end */
    return this.appService.getHello();
  }
}
