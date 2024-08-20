import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from './schemas/contact.schema';
import { MailModule } from 'src/mail/mail.module';
import { UtilitiesModule } from 'src/utilities/utilities.module';
import { ContactService } from './contact.service';
import { MailService } from 'src/mail/mail.service';
import { UtilitiesService } from 'src/utilities/utilities.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
    MailModule,
    UtilitiesModule,
  ],
  providers: [ContactService, MailService, UtilitiesService],
  controllers: [ContactController],
})
export class ContactModule {}
