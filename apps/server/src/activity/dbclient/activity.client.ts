import { Activity } from ".prisma/client";
import { PrismaClient } from ".prisma/client";
import { InternalServerErrorException, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { CreateActivityDto } from "../dto/createActivity.dto";

export class ActivityClient extends PrismaClient
implements OnModuleInit, OnModuleDestroy {

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  async createActivity(
    createActivityDto: CreateActivityDto,
  ): Promise<Activity> {
    const {
      title,
      description,
      organizerId,
      locationId,
      sportId,
      timestamp,
      ends,
    } = createActivityDto;
    try {
      const createdActivity = await this.activity.create({
        data: {
          title,
          description,
          timestamp,
          ends,
          sport: {
            connect: { id: sportId },
          },
          organizer: {
            connect: { id: organizerId },
          },
          location: {
            connect: { id: locationId },
          },
        },
        include: {
          organizer: true,
          location: true,
          sport: true,
        }
      });
      return createdActivity;
    } catch (error) {
      // TODO: Error logging
      throw new InternalServerErrorException('Internal server Error');
    }
  }

  async getFeed(): Promise<Activity[]> {
    // TODO Error Handling
    try {
      const activities = await this.activity.findMany({
        include: {
          participants: true,
          organizer: true,
          location: true,
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
      const activity = await this.activity.findUnique({ 
        where: { id },
        include: { location: true }
      });
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