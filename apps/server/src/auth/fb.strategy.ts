import { User } from '.prisma/client';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, } from 'passport-facebook';
import { UserClient } from './user.client';

export class FaceBookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private userClient: UserClient,
  ) {
    super({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:3333/api/auth/facebook/redirect',
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(
    accessToken: string,
    refreshtoken: string,
    profile: Profile,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    done: (err: any, user: any, info?: any) => void
    ): Promise<void> {
      const { name, emails } = profile;
      const user = {
        email: emails[0].value,
        firstName: name.givenName,
        lastName: name.familyName,
      };
      const payload = {
        user,
        accessToken,
      };
      
    done(null, payload);
  }
}