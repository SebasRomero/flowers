import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TourNames } from '../types/submit-booking.types';
import { HydratedDocument } from 'mongoose';
import { BookingStatus } from '../types/booking-status';
import { IAllDescriptionBooking } from 'src/dashboard/types/description.interface';

export type BookingDocument = HydratedDocument<Booking>;
@Schema({ versionKey: false, timestamps: true })
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

  @Prop()
  isArchived: boolean;

  @Prop({ enum: BookingStatus })
  status: BookingStatus;

  @Prop()
  orderNumber: string;

  @Prop()
  changeHistory: IAllDescriptionBooking[];

  @Prop({ isRequired: false })
  createdAt: Date;

  @Prop({ isRequired: false })
  updatedAt: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
