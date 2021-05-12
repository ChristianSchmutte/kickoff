import { Injectable, InternalServerErrorException, NotFoundException, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { Activity, PrismaClient } from '@prisma/client'

@Injectable()
export class FeedClient extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  async getFeed(): Promise<Activity[]> {
    // TODO Error Handling
    try {
      const activities = await this.activity.findMany({
        include: {
          participants: true,
          organizer: true,
        },
      });
      return activities;
    } catch (error) {
      // TODO Error Logging
      console.error(error);
      throw new InternalServerErrorException('Interal Server Error');
    }
  };
  
  async getActivityById(id: number ): Promise<Activity> {
    try {
      const activity = this.activity.findUnique({ where: { id }});
      if (!activity) throw new NotFoundException(`Could not find activity with id: ${id}`);
      return activity;
    } catch (error) {
      // TODO Error Logging
      throw new InternalServerErrorException('Interal Server Error');
    }
  }
  
  async addUserToActivity(activityId: number, userId: number ): Promise<Activity> {
    try {
      // TODO: Get User from Auth
      const updatingUser = await this.user.findUnique({ where: {id: userId }});
      const updatedActivity = await this.activity.update({
        where: { id: activityId },
        data: {
          // updating actvity_participant MTM relation
          participants: { connect: [ { id: updatingUser.id } ] }

        },
        include: {
          participants: true,
        },
      });
      return updatedActivity;
    } catch (error) {
      // TODO Error Logging
      console.error(error);
      throw new InternalServerErrorException('Interal Server Error');
    }
  }
}