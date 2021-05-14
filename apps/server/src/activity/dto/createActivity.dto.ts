import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from "class-validator";

export class CreateActivityDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  organizerId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  locationId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  sportId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  timestamp: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  ends: number;
}
