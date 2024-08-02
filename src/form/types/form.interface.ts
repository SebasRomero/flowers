import { Types } from 'mongoose';
import { TourNames } from './submit-form.types';

export interface IForm {
  _id: Types.ObjectId;
  name: string;
  phone: string;
  email: string;
  numberOfPersons: number;
  tourName: TourNames;
  dateStartingTour: Date;
}
