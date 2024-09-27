import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DiscountCoupon } from './schema/discount.schema';
import { Model } from 'mongoose';
import { IDiscountCoupon } from './types/discount.types';
import { CreateDiscountCouponDto } from './dto/create-discount-coupon.dto';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { CreateDiscountCouponResponseDto } from './dto/create-discount-coupon.response.dto';

@Injectable()
export class DiscountCouponService {
  constructor(
    @InjectModel(DiscountCoupon.name)
    private readonly discountCouponModel: Model<DiscountCoupon>,
    private readonly utilsService: UtilitiesService,
  ) {}

  async createDiscountCoupon(
    createDiscountCoupon: CreateDiscountCouponDto,
  ): Promise<CreateDiscountCouponResponseDto> {
    const discount: IDiscountCoupon = {
      discountPercentage: createDiscountCoupon.discountPercentage,
      uses: 0,
      code: this.utilsService.generateCouponNumber(),
    };
    const response = await this.discountCouponModel.create(discount);

    return response;
  }

  async getDiscountCoupons(): Promise<CreateDiscountCouponResponseDto[]> {
    return await this.discountCouponModel.find();
  }

  async getDiscountCoupon(
    codeNumber: string,
  ): Promise<CreateDiscountCouponResponseDto> {
    const coupon = await this.discountCouponModel.findOne({ code: codeNumber });
    if (!coupon)
      throw new HttpException('coupon not found', HttpStatus.BAD_REQUEST);
    return coupon;
  }

  updateCouponUses(codeNumber: string) {
    return this.discountCouponModel.findOneAndUpdate(
      { code: codeNumber },
      { $inc: { uses: 1 } },
    );
  }
}
