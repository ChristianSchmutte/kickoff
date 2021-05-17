import { Injectable, InternalServerErrorException, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserClient extends PrismaClient
implements OnModuleInit, OnModuleDestroy {
  async onModuleInit(): Promise<void> {
    this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    this.$disconnect();
  }

  async createOrUpdate(oauthId: string, username: string): Promise<User> {
    try {
      return this.user.upsert({
        where: { oauthId },
      update: {
        username,
        oauthId,
      },
      create: {
        username,
        oauthId,
      },
      });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Could not create or update user');
    }
  }

  async findByOauthId(oauthId: string): Promise<User> {
    try {

      return this.user.findUnique({ where: { oauthId }});
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}