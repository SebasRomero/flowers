import { Form } from '../entities/form.entity';
import { CreateFormDto } from './create-form.dto';

export class SubmitFormResponseDto extends CreateFormDto {
  id: number;

  static mapToResponse(form: Form): SubmitFormResponseDto {
    return {
      id: form.id,
      name: form.name,
      email: form.email,
    };
  }
}
