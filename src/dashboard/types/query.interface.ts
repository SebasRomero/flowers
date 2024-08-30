import { TourNames } from 'src/booking/types/submit-booking.types';

export interface IQueryGetBookings {
  tourName?: TourNames;
  date?: string;
}
