import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserClient } from './user.client';
import { AuthMiddleWare } from './auth.middleware';

@Module({
  providers: [AuthService, UserClient, AuthMiddleWare],
  controllers: [AuthController],
  exports: [UserClient, AuthMiddleWare],
})
export class AuthModule {}
