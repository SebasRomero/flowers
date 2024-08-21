import { Types } from 'mongoose';
import { TourNames } from './submit-booking.types';
import { BookingStatus } from './booking-status';

export interface IBooking {
  _id?: Types.ObjectId;
  orderNumber: string;
  name: string;
  phone: string;
  email: string;
  numberOfPersons: number;
  tourName: TourNames;
  dateStartingTour: Date;
  status: BookingStatus;
}
