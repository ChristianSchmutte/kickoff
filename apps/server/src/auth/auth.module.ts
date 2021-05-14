import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserClient } from './user.client';

@Module({
  providers: [AuthService, UserClient],
  controllers: [AuthController],
  exports: [UserClient],
})
export class AuthModule {}
