import { Types } from 'mongoose';
import { TourNames } from './submit-form.types';
import { BookingStatus } from './booking-status';

export interface IForm {
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
