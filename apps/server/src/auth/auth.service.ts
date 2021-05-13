import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserClient } from './user.client';
import * as admin from 'firebase-admin';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from '.prisma/client';

@Injectable()
export class AuthService {

  constructor(
    private readonly userClient: UserClient,
  ){}

  async registerUser(
    idToken: string,
    createUserDto: CreateUserDto
  ): Promise<User> {
    try {
      const userRecord = await admin.auth()
        .getUser(idToken)
      return this.userClient.createUser(userRecord.uid, createUserDto);
    } catch (error) {
      throw new UnauthorizedException('Cannot validate register');
    }
  }
}