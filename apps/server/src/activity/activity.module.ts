import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { LocationModule } from '../location/location.module';
import { LocationService } from '../location/location.service';
import { ActivityClient } from './dbclient/activity.client';

@Module({
  imports: [LocationModule],
  providers: [ActivityService, ActivityClient, LocationService],
  controllers: [ActivityController],
  exports: [ActivityService, ActivityClient],
})
export class ActivityModule {}
