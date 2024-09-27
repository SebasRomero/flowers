import { Types } from 'mongoose';

export interface IDiscountCoupon {
  _id?: Types.ObjectId;
  discountPercentage?: number;
  code?: string;
  uses?: number;
}
