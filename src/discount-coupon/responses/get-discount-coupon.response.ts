import { GeneralResponse } from 'src/responses/general.response';
import { CreateDiscountCouponResponseDto } from '../dto/create-discount-coupon.response.dto';
import { HttpStatus } from '@nestjs/common';

export class GetDiscountCouponResponse
  implements GeneralResponse<CreateDiscountCouponResponseDto>
{
  statusCode: HttpStatus;
  message: string;
  data: CreateDiscountCouponResponseDto;
}
