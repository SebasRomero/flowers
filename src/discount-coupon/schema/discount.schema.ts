import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DiscountDocument = HydratedDocument<DiscountCoupon>;

@Schema({ timestamps: true, versionKey: false })
export class DiscountCoupon {
  @Prop()
  discountPercentage: number;
  @Prop()
  code: string;
  @Prop()
  uses: number;
}

export const DiscountCouponSchema =
  SchemaFactory.createForClass(DiscountCoupon);
