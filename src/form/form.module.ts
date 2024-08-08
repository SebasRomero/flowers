import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { Form, FormSchema } from './schemas/form.schema';
import { MailModule } from 'src/mail/mail.module';
import { MailService } from 'src/mail/mail.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { UtilitiesModule } from 'src/utilities/utilities.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
    MailModule,
    UtilitiesModule,
  ],
  providers: [FormService, MailService, UtilitiesService],
  controllers: [FormController],
})
export class FormModule {}
