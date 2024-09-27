import { IDiscountCoupon } from '../types/discount.types';
import { CreateDiscountCouponDto } from './create-discount-coupon.dto';

export class CreateDiscountCouponResponseDto extends CreateDiscountCouponDto {
  static mapToResponse(coupon: IDiscountCoupon): IDiscountCoupon {
    return {
      code: coupon.code,
      discountPercentage: coupon.discountPercentage,
      uses: coupon.uses,
    };
  }
}
