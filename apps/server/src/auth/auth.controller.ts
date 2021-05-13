import { User } from '.prisma/client';
import { Body, Post, Controller, Req, ValidationPipe } from '@nestjs/common';
import { request, Request } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}
  @Post('register')
  async registerUser(
    @Req() request: Request,
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.authService.registerUser(request.headers.authorization, createUserDto);
  }
}
