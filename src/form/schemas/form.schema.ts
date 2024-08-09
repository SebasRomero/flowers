import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TourNames } from '../types/submit-form.types';
import { HydratedDocument } from 'mongoose';

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
}

export const FormSchema = SchemaFactory.createForClass(Form);
