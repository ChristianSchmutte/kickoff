import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';
import { UserClient } from './user.client';


@Injectable()
export class AuthMiddleWare implements NestMiddleware {

  constructor(
    private userClient: UserClient,
  ) {}
  
  async use(request: Request, _response: Response, next: NextFunction) {
    const uid = request.headers.authorization;
    try {
      await admin.auth()
        .getUser(uid);
      next();
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Must be logged in');
    }
  }
}