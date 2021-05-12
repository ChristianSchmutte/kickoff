import { Injectable, InternalServerErrorException, NotFoundException, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Location, PrismaClient } from '@prisma/client';
import { CreateLocationDto } from './dto/createLocation.dto';

@Injectable()
export class LocationClient extends PrismaClient 
implements OnModuleInit, OnModuleDestroy {

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  async createLocation(
    createdLocationDto: CreateLocationDto
  ): Promise<Location> {
    const { name, latitude, longitude } = createdLocationDto;
    try {
      const createdLocation = this.location.create({
        data: {
          name, latitude, longitude,
        },
      });
      return createdLocation;
    } catch (error) {
     
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async getLocationById(id: number): Promise<Location> {
    try {
      const queriedLocation: Location = await this.location.findUnique({
        where: { id },
      });
      if (!queriedLocation) {
        throw new NotFoundException(`Could not find Location with id: ${id}`);
      }
      return queriedLocation;  
    } catch (error) {
      // TODO: Error Logging
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  
  async getLocationByName(locationname: string): Promise<Location[]> {
    try {
      
      const queriedLocations = await this.location.findMany({
        where: { 
          name: { contains: locationname }
        }
      });
  
      return queriedLocations;
    } catch (error) {
      // TODO: Error Logging
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}