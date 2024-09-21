import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IOrder } from '../types/order.type';

export type ClientDocument = HydratedDocument<Client>;
@Schema({ versionKey: false, timestamps: true })
export class Client {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  orders: IOrder[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
