import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { UserClient } from './user.client';
@Injectable()
export class AuthService {
  constructor(private readonly userClient: UserClient) {}

  async validateUser(oauthId: string, username: string): Promise<User> {
    // console.log('🤟🤟🤟', oauthId, username);
    const user = await this.findByOauthId(oauthId);
    if (user) return user;
    return this.createOrUpdateUser(oauthId, username);
  }

  async createOrUpdateUser(oauthId: string, username: string): Promise<User> {
    return await this.userClient.createOrUpdate(oauthId, username);
  }

  async findByOauthId(oauthId: string): Promise<User | undefined> {
    return this.userClient.findByOauthId(oauthId);
  }
}
