import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { LocationClient } from './location.client';

@Module({
  providers: [LocationService, LocationClient],
  controllers: [LocationController],
  exports: [LocationService, LocationClient],
})
export class LocationModule {}
