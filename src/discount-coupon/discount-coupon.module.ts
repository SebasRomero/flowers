import { Module } from '@nestjs/common';
import { DiscountCouponService } from './discount-coupon.service';
import { DiscountController } from './discount-coupon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscountCoupon, DiscountCouponSchema } from './schema/discount.schema';
import { UtilitiesService } from 'src/utilities/utilities.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DiscountCoupon.name, schema: DiscountCouponSchema },
    ]),
  ],
  providers: [DiscountCouponService, UtilitiesService],
  controllers: [DiscountController],
})
export class DiscountCouponModule {}
