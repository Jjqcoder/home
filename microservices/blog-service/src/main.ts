/* 用于配置.env文件-开始 */
import { ConfigService } from '@nestjs/config';
/* 用于配置.env文件-结束 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 引入Swagger模块
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置Swagger文档
  const config = new DocumentBuilder()
    .setTitle('Blog Service API')
    .setDescription('博客服务的API文档')
    .setVersion('1.0')
    .addTag('blog')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  /* 配置端口开始 */
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  /* 配置端口结束 */
  console.log(`Application is running on port ${port}`);
  console.log(`Swagger文档地址: http://localhost:${port}/api`);
}
bootstrap();
