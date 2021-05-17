import { Activity } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { ActivityClient } from '../activity/dbclient/activity.client';

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
