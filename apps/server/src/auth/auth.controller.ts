import { User } from '.prisma/client';
import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/user.decorator';

@Controller('auth')
export class AuthController {

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin() {
    return HttpStatus.OK;
  }

  @Get('facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(
    @Req() req: Request,
    // @GetUser() user: User
  ) {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }
}
