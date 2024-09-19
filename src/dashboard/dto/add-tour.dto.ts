import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddTourDto {
  @ApiProperty({ description: 'The tour name' })
  @IsNotEmpty()
  tourName: string;

  @ApiProperty({ description: 'The price', type: Number })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
