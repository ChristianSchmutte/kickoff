import { User } from '.prisma/client';
import { Controller, Get, HttpStatus, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { GetUser } from './decorators/user.decorator';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { FacebookAuthGuard } from './guards/fb.guard';

@Controller('auth')
export class AuthController {

  @Get('facebook')
  @UseGuards(FacebookAuthGuard)
  async facebookLogin() {
    return HttpStatus.OK;
  }

  @Get('facebook/redirect')
  @UseGuards(FacebookAuthGuard)
  async facebookLoginRedirect(
    // @GetUser() user: User
  ) {
    return 'HI THERE';
  }

  @Get('test')
  @UseGuards(AuthenticatedGuard)
  async forTestingOut(
    @GetUser() user: User,
  ) {

    return 'It worked' + user.username;
  }
}
