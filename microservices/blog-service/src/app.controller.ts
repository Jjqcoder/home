import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    /* get blog data start */
    console.log('typeorm test start');
    console.log(await this.appService.testBlogTable());
    console.log('typeorm test end');
    
    /* get blog data end */
    return this.appService.getHello();
  }
}
