import { Activity } from '.prisma/client';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/createActivity.dto';

@Controller('activity')
export class ActivityController {
  
  constructor(
    private activityService: ActivityService,
  ) {}

  @Post()
  async createActivity(
    @Body(ValidationPipe) createActivityDto: CreateActivityDto
  ): Promise<Activity>{
    return this.activityService.createActivity(createActivityDto);
  }
}
