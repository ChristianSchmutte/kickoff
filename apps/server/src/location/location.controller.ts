import { Location } from '.prisma/client';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateLocationDto } from './dto/createLocation.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {

  constructor(
    private locationService: LocationService,
  ){}

  @Post()
  async createLocation(
    @Body(ValidationPipe) createLocationDto: CreateLocationDto,
  ): Promise<Location> {
    return this.locationService.createLocation(createLocationDto);
  }
}
