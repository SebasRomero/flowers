import { IPhoneNumber } from '../types/contact.interface';

export interface IInfoContactForm {
  name: string;
  email: string;
  phone: IPhoneNumber;
  message: string;
}
