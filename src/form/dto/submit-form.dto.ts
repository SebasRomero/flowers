import { TourNames } from '../types/submit-form.types';

export class SubmitFormDto {
  name: string;
  email: string;
  phone: string;
  numberOfPersons: number;
  tourName: TourNames;
  dateStartingTour: Date;
}
