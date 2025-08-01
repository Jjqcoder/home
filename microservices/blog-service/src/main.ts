/* 用于配置.env文件-开始 */
import { ConfigService } from '@nestjs/config';
/* 用于配置.env文件-结束 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* 配置端口开始 */
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  /* 配置端口结束 */
  console.log(`Application is running on port ${port}`);
}
bootstrap();