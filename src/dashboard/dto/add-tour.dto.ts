import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, Max, Min } from 'class-validator';

export class AddTourDto {
  @ApiProperty({ description: 'The tour name' })
  @IsNotEmpty()
  tourName: string;

  @ApiProperty({ description: 'The price', type: Number })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ description: 'Discount percentage', type: Number })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  discountPercentage: number;
}
