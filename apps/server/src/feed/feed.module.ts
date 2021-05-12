import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedClient } from './feed.client';
import { FeedService } from './feed.service';
import { ActivityModule } from '../activity/activity.module';
import { LocationModule } from '../location/location.module';
import { ActivityService } from '../activity/activity.service';
import { LocationService } from '../location/location.service';

@Module({
  imports: [ActivityModule, LocationModule],
  providers: [FeedService, FeedClient, ActivityService, LocationService],
  controllers: [FeedController],
  exports: [],
})
export class FeedModule {}
