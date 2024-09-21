import { Types } from 'mongoose';
import { IOrder } from './order.type';

export interface IClient {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  orders: IOrder[];
}
