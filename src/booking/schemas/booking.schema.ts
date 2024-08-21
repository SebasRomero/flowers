import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TourNames } from '../types/submit-booking.types';
import { HydratedDocument } from 'mongoose';
import { BookingStatus } from '../types/booking-status';

export type BookingDocument = HydratedDocument<Booking>;
@Schema({ versionKey: false })
export class Booking {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  numberOfPersons: number;

  @Prop({ enum: TourNames })
  tourName: TourNames;

  @Prop()
  dateStartingTour: Date;

  @Prop({ enum: BookingStatus })
  status: BookingStatus;

  @Prop()
  orderNumber: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
