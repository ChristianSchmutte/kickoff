import { Activity } from '.prisma/client';
import { Controller, Get, Param, ParseIntPipe, Patch, Query } from '@nestjs/common';
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
  addUserToActivity(
    @Query('activityId', ParseIntPipe) activityId: number,
    // TODO: seperate into auth module with UseGuard and UserPipe
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.feedService.addUserToActivity(activityId, userId);
  }
}
