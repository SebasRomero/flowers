import { Types } from 'mongoose';

import { SubmitFormDto } from './submit-form.dto';
import { IForm } from '../types/form.interface';

export class SubmitFormResponseDto extends SubmitFormDto {
  id: Types.ObjectId;

  static mapToResponse(form: IForm): SubmitFormResponseDto {
    return {
      id: form._id,
      name: form.name,
      email: form.email,
      phone: form.phone,
      numberOfPersons: form.numberOfPersons,
      tourName: form.tourName,
      dateStartingTour: form.dateStartingTour,
    };
  }
}
