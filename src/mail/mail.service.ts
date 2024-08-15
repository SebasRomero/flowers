import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IInfoRegularForm } from 'src/form/dto/info-form.dto';
import {
  htmlMessageContact,
  htmlMessageForm,
  plainMessageContact,
  plainMessageForm,
} from './messages/messages';
import { IInfoContactForm } from 'src/contact/dto/info-contact.dto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mailjet = require('node-mailjet');

@Injectable()
export class MailService {
  constructor(private configService: ConfigService) {}
  private mailjet = Mailjet.apiConnect(
    this.configService.get('API_KEY_MAIL'),
    this.configService.get('SECRET_KEY_MAIL'),
    { config: {}, options: {} },
  );

  sendRegularFormEmail(infoForm: IInfoRegularForm) {
    this.mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'sebastian_eromero@hotmail.com',
            Name: 'Sebastian',
          },
          To: [
            {
              Email: infoForm.email,
              Name: infoForm.name,
            },
          ],
          Subject: 'Your tour!',
          TextPart: plainMessageForm(infoForm),
          HTMLPart: htmlMessageForm(infoForm),
        },
      ],
    });
  }

  sendContactEmail(infoContactForm: IInfoContactForm) {
    this.mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'sebastian_eromero@hotmail.com',
            Name: 'Sebastian',
          },
          To: [
            {
              Email: infoContactForm.email,
              Name: infoContactForm.name,
            },
          ],
          Subject: 'Your tour!',
          TextPart: plainMessageContact(infoContactForm),
          HTMLPart: htmlMessageContact(infoContactForm),
        },
      ],
    });
  }
}
