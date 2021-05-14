import { User } from '.prisma/client';
import { Body, Post, Controller, Req, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {

}
