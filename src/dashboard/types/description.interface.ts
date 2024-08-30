import { BookingStatus } from 'src/booking/types/booking-status';

export interface IDescriptionBooking {
  observations: string;
}

export interface IAllDescriptionBooking {
  lastStatus?: BookingStatus;
  newStatus?: BookingStatus;
  description: string;
  observations?: string;
  date?: Date;
}
