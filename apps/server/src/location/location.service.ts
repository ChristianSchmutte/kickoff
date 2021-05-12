import { Location } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/createLocation.dto';
import { LocationClient } from './location.client';

@Injectable()
export class LocationService {

  constructor(
    private locationClient: LocationClient,
  ) {}

  async createLocation(createdLocationDto: CreateLocationDto): Promise<Location> {
    return this.locationClient.createLocation(createdLocationDto);
  }
}
