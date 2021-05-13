import { Injectable } from '@nestjs/common';
import { ActivityClient } from './dbclient/activity.client';
import { CreateActivityDto } from './dto/createActivity.dto';

@Injectable()
export class ActivityService {

  constructor(
    private activityClient: ActivityClient,
  ) {}

  async createActivity(
    createActivityDto: CreateActivityDto,
  ) {
    return this.activityClient.createActivity(createActivityDto);
  }
}
