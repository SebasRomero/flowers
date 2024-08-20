import { Types } from 'mongoose';

export interface IContactForm {
  _id: Types.ObjectId;
  name: string;
  email: string;
  phone: IPhoneNumber;
  message: string;
}

export interface IPhoneNumber {
  prefix: string;
  phoneNumber: string;
}
