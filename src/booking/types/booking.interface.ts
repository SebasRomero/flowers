import { Types } from 'mongoose';
import { TourNames } from './submit-booking.types';
import { BookingStatus } from './booking-status';
import { IAllDescriptionBooking } from 'src/dashboard/types/description.interface';

export interface IBooking {
  _id?: Types.ObjectId;
  orderNumber: string;
  name: string;
  phone: string;
  email: string;
  numberOfPersons: number;
  tourName: TourNames;
  dateStartingTour: Date;
  isArchived: boolean;
  status: BookingStatus;
  changeHistory: IAllDescriptionBooking[];
  createdAt?: Date;
  updatedAt?: Date;
}
