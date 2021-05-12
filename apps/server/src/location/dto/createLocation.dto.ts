import { ApiProperty } from '@nestjs/swagger';
import { IsLatitude, IsLongitude, IsNotEmpty, IsString } from 'class-validator';
export class CreateLocationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsLatitude()
  latitude: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsLongitude()
  longitude: number;
}