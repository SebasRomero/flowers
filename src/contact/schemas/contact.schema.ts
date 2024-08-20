/* import mongoose from 'mongoose';

const PhoneSchema = new mongoose.Schema({
  phone: String,
  prefix: String,
});

export const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: PhoneSchema,
  message: String,
});

export const Contact = mongoose.model('Contact', ContactSchema);
 */

import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>;

@Schema({ versionKey: false })
export class Contact {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop(
    raw({
      prefix: { type: String },
      phoneNumber: { type: String },
    }),
  )
  phone: Record<string, any>;

  @Prop()
  message: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
