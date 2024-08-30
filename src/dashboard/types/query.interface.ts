import { TourNames } from 'src/booking/types/submit-booking.types';

export interface IQueryGetBookings {
  tourName?: TourNames;
  date?: string;
}

export interface IQueryGetClient {
  orderNumber?: string;
  date?: string;
  page?: string;
}
