import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, } from 'passport-facebook';
import { AuthService } from './auth.service';
@Injectable()
export class FaceBookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private authService: AuthService,
  ) {
    super({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:3333/api/auth/facebook/redirect',
      scopes: ['public_profile'],
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(
    accessToken: string,
    refreshtoken: string,
    profile: Profile,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): Promise<User> {
      const { id, displayName: username } = profile;
      return await this.authService.validateUser(id, username);
  }
}