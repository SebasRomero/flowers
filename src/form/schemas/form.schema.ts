import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TourNames } from '../types/submit-form.types';
import { HydratedDocument } from 'mongoose';
import { BookingStatus } from '../types/booking-status';

export type FormDocument = HydratedDocument<Form>;
@Schema({ versionKey: false })
export class Form {
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

export const FormSchema = SchemaFactory.createForClass(Form);
