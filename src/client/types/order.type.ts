import { BookingStatus } from 'src/booking/types/booking-status';
import { IAllDescriptionBooking } from 'src/dashboard/types/description.interface';

export interface IOrder {
  tourName?: string;
  dateStartingTour?: Date;
  phone?: string;
  numberOfPersons: number;
  name?: string;
  orderId?: string;
  email?: string;
  orderNumber?: string;
  statusPayment?: string;
  isArchived?: boolean;
  statusOrder?: BookingStatus;
  changeHistory?: IAllDescriptionBooking[];
  createdAt?: Date;
}
