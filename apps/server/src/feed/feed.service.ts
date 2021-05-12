import { Activity } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { ActivityService } from '../activity/activity.service';
import { ActivityClient } from '../activity/dbclient/activity.client';
import { FeedClient } from './feed.client';

@Injectable()
export class FeedService {

  constructor(
    private activityClient: ActivityClient,
  ) {}

  async getFeed(): Promise<Activity[]> {
    return this.activityClient.getFeed();
  }

  async getActivityById(id: number): Promise<Activity> {
    return this.activityClient.getActivityById(id);
  }

  async addUserToActivity(activityId: number, userId: number): Promise<Activity> {
    return this.activityClient.addUserToActivity(activityId, userId);
  }
}
