import { Form } from '../entities/form.entity';
import { SubmitFormDto } from './submit-form.dto';

export class SubmitFormResponseDto extends SubmitFormDto {
  id: number;

  static mapToResponse(form: Form): SubmitFormResponseDto {
    return {
      id: form.id,
      name: form.name,
      email: form.email,
      phone: form.phone,
      numberOfPersons: form.numberOfPersons,
      tourName: form.tourName,
      dateStartingTour: form.dateStartingTour,
    };
  }
}
