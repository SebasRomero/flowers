import { Types } from 'mongoose';
import { BookingStatus } from 'src/booking/types/booking-status';

export interface IClient {
  _id?: Types.ObjectId;
  name: string;
  phone: string;
  orderNumber: string;
  status: BookingStatus;
}
