import { Injectable, InternalServerErrorException, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserClient extends PrismaClient
implements OnModuleInit, OnModuleDestroy {
  async onModuleInit(): Promise<void> {
    this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    this.$disconnect();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    
    try {
      const newUser = await this.user.create({
        data: {
          firstname: createUserDto.firstname,
          lastname: createUserDto.lastname,
        }
      });
      return newUser;      
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async createOrUpdate(id: number, firstname: string, lastname: string): Promise<User> {
    try {
      return this.user.upsert({
        where: { id },
      update: {
        firstname,
        lastname,
      },
      create: {
        firstname,
        lastname,
      },
      });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Could not create or update user');
    }
  }
}