import { User } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
  ) {
    super();
  }
  serializeUser(user: User, done: (err: Error, user: User) => void) {
    done(null, user);
  }

  async deserializeUser(user: User, done: (err: Error, User) => void) {
    const dbUser = await this.authService.findByOauthId(user.oauthId);
    return dbUser ? done(null, dbUser) : done(null, null);
  }
}