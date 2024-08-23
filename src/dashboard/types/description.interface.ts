import { BookingStatus } from 'src/booking/types/booking-status';

export interface IDescriptionBooking {
  description: string;
}

export interface IAllDescriptionBooking {
  lastStatus: BookingStatus;
  newStatus: BookingStatus;
  description: string;
  date: Date;
}
