import { Types } from 'mongoose';

import { SubmitContactDto } from './submit-contact.dto';
import { IContactForm } from '../types/contact.interface';

export class SubmitContactResponseDto extends SubmitContactDto {
  id: Types.ObjectId;

  static mapToResponse(contact: IContactForm): SubmitContactResponseDto {
    return {
      id: contact._id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      message: contact.message,
    };
  }
}
