import { Controller, Get, Param, ParseIntPipe, Patch, Query } from '@nestjs/common';
import { Activity } from './activity.interface';
import { FeedService } from './feed.service';


@Controller('feed')
export class FeedController {

  constructor(
    private feedService: FeedService,
  ) {}

  @Get()
  getFeed(): Promise<Activity[]> {
    return this.feedService.getFeed();
  }

  @Get(':id')
  getActivityById(@Param('id', ParseIntPipe) id: number): Promise<Activity> {
    return this.feedService.getActivityById(id);
  }

  @Patch()
  updateActivityList(
    @Query('activityId', ParseIntPipe) activityId: number,
    // TODO: seperate into auth module
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.feedService.updateActivityList(activityId, userId);
  }
}
