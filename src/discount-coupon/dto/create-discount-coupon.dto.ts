import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Max, Min } from 'class-validator';

export class CreateDiscountCouponDto {
  @ApiProperty({ description: 'El porcentaje del cupón', type: String })
  @IsNotEmpty()
  @Max(50)
  @Min(0)
  discountPercentage: number;
}
