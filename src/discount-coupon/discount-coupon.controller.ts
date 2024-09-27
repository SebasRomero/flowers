import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { DiscountCouponService } from './discount-coupon.service';
import { CreateDiscountCouponDto } from './dto/create-discount-coupon.dto';
import { CreateDiscountCouponResponse } from './responses/create-discount-coupon.response';
import { Role } from 'src/auth/enums/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { GetDiscountCouponResponse } from './responses/get-discount-coupon.response';
import { GetDiscountCouponsResponse } from './responses/get-discount-coupons.response';

@Controller('discount-coupon')
export class DiscountController {
  constructor(private readonly discountService: DiscountCouponService) {}

  @Get()
  @Roles(Role.ADMIN)
  async getDiscountCoupons(): Promise<GetDiscountCouponsResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Cupones',
      data: await this.discountService.getDiscountCoupons(),
    };
  }

  @Get(':couponNumber')
  @Roles(Role.ADMIN)
  async getDiscountCoupon(
    @Query('couponNumber') couponNumber: string,
  ): Promise<GetDiscountCouponResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Cupones',
      data: await this.discountService.getDiscountCoupon(couponNumber),
    };
  }

  @Post()
  @Roles(Role.ADMIN)
  async createDiscountCoupon(
    @Body() createDiscountCoupon: CreateDiscountCouponDto,
  ): Promise<CreateDiscountCouponResponse> {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Cupón creado',
      data: await this.discountService.createDiscountCoupon(
        createDiscountCoupon,
      ),
    };
  }
}
