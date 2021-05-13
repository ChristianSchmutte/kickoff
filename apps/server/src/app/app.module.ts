import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ActivityModule } from '../activity/activity.module';
import { AuthMiddleWare } from '../auth/auth.middleware';
import { AuthModule } from '../auth/auth.module';
import { FeedModule } from '../feed/feed.module';
import { LocationModule } from '../location/location.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FeedModule, LocationModule, ActivityModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthMiddleWare],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleWare).forRoutes(
      { path: '*', method: RequestMethod.ALL }
    );
  }
}
