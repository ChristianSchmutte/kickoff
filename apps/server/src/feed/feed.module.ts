import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedClient } from './feed.client';
import { FeedService } from './feed.service';

@Module({
  imports: [],
  providers: [FeedService, FeedClient],
  controllers: [FeedController],
  exports: [],
})
export class FeedModule {}
