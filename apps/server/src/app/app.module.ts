import { Module } from '@nestjs/common';
import { ActivityModule } from '../activity/activity.module';
import { FeedModule } from '../feed/feed.module';
import { LocationModule } from '../location/location.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FeedModule, LocationModule, ActivityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
