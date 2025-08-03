import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    /* config start */
    // ConfigModule.forRoot(), // 加载.env文件
    /* config end */

    /* typeorm start */
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'mysql',
    //     host: configService.get('DB_HOST'),
    //     port: +configService.get('DB_PORT'), // +号转换为数字
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     database: configService.get('DB_DATABASE'),
    //     entities: [],
    //     synchronize: true,
    //     autoLoadEntities: true,
    //   }),
    //   inject: [ConfigService],
    // }), HealthModule,
    /* typeorm end */
    // 引入健康检查
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
