import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { TourNames } from 'src/booking/types/submit-booking.types';

export class ChangeTourPrice {
  @ApiProperty({ description: 'The tour name', enum: TourNames })
  @IsNotEmpty()
  tourName: TourNames;

  @ApiProperty({ description: 'The price', type: Number })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Discount percentage', type: Number })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(100)
  discountPercentage: number;
}
