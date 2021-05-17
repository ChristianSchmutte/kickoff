import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserClient } from './user.client';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from '.prisma/client';

@Injectable()
export class AuthService {
  
}
