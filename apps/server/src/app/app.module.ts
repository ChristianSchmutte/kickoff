import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ActivityModule } from '../activity/activity.module';
import { AuthModule } from '../auth/auth.module';
import { FeedModule } from '../feed/feed.module';
import { LocationModule } from '../location/location.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    FeedModule,
    LocationModule,
    ActivityModule,
    AuthModule,
    PassportModule.register({ session: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
