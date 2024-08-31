import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TourNames } from 'src/booking/types/submit-booking.types';

export type TourDocument = HydratedDocument<Tour>;

@Schema({ versionKey: false, timestamps: true })
export class Tour {
  @Prop()
  name: TourNames;

  @Prop()
  price: number;
}

export const TourSchema = SchemaFactory.createForClass(Tour);
