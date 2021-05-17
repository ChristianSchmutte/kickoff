import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserClient } from './user.client';
import { FaceBookStrategy } from './fb.strategy';
import { PassportModule } from '@nestjs/passport'
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [PassportModule],
  providers: [
    AuthService,
    UserClient,
    FaceBookStrategy,
    SessionSerializer,
  ],
  controllers: [AuthController],
  exports: [UserClient],
})
export class AuthModule {}
