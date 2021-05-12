import { Activity } from '.prisma/client';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { FeedClient } from './feed.client';

@Injectable()
export class FeedService {

  constructor(
    private feedClient: FeedClient,
  ){}

  async getFeed(): Promise<Activity[]> {
    return this.feedClient.getFeed();
  }

  async getActivityById(id: number): Promise<Activity> {
    return this.feedClient.getActivityById(id);
  }

  async addUserToActivity(activityId: number, userId: number): Promise<Activity> {
    return this.feedClient.addUserToActivity(activityId, userId);
  }
}
