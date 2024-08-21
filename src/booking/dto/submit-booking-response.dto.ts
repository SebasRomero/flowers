import { Types } from 'mongoose';

import { SubmitBookingDto } from './submit-booking.dto';
import { IBooking } from '../types/booking.interface';

export class SubmitBookingResponseDto extends SubmitBookingDto {
  id: Types.ObjectId;
  orderNumber: string;

  static mapToResponse(booking: IBooking): SubmitBookingResponseDto {
    return {
      id: booking._id,
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      numberOfPersons: booking.numberOfPersons,
      tourName: booking.tourName,
      dateStartingTour: booking.dateStartingTour,
      orderNumber: booking.orderNumber,
    };
  }
}
