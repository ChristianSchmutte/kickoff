import { ExecutionContext, Injectable} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FacebookAuthGuard extends AuthGuard('facebook') {
  async canActivate(ctx: ExecutionContext) {
    const activate = (await super.canActivate(ctx)) as boolean;
    const request = ctx.switchToHttp().getRequest();

    await super.logIn(request);
    return activate;
  }
}