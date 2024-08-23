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
  phone: string;

  @Prop()
  message: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
