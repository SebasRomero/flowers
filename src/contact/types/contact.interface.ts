import { Types } from 'mongoose';

export interface IContactForm {
  _id: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  message: string;
}
