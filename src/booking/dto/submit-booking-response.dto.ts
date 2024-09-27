import { SubmitBookingDto } from './submit-booking.dto';
import { BookingStatus } from '../types/booking-status';
import { IAllDescriptionBooking } from 'src/dashboard/types/description.interface';

export class SubmitBookingResponseDto extends SubmitBookingDto {
  orderNumber: string;
  status: BookingStatus;
  changeHistory: IAllDescriptionBooking[];
  orderLink: string;
  actualPrice: string;

  static mapToResponse(order: any): SubmitBookingResponseDto {
    return {
      name: order.name,
      email: order.email,
      phone: order.phone,
      numberOfPersons: order.numberOfPersons,
      tourName: order.tourName,
      dateStartingTour: order.dateStartingTour,
      orderNumber: order.orderNumber,
      status: order.status,
      changeHistory: order.changeHistory,
      orderLink: order.orderLink,
      actualPrice: order.actualPrice,
    };
  }
}
