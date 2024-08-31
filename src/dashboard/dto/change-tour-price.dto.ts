import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { TourNames } from 'src/booking/types/submit-booking.types';

export class ChangeTourPrice {
  @ApiProperty({ description: 'The tour name', enum: TourNames })
  @IsNotEmpty()
  tourName: TourNames;

  @ApiProperty({ description: 'The price', type: Number })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
