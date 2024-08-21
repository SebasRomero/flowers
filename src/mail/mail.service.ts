import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IInfoBooking } from 'src/booking/dto/info-booking.dto';
import {
  htmlMessageContact,
  htmlMessageForm,
  plainMessageContact,
  plainMessageForm,
} from './messages/messages';
import { IInfoContactForm } from 'src/contact/dto/info-contact.dto';
import { senderEmail, senderName } from './types/constants';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mailjet = require('node-mailjet');

@Injectable()
export class MailService {
  private mailjet = Mailjet.apiConnect(
    this.configService.get('API_KEY_MAIL'),
    this.configService.get('SECRET_KEY_MAIL'),
    { config: {}, options: {} },
  );
  constructor(private configService: ConfigService) {}

  sendRegularFormEmail(infoBooking: IInfoBooking) {
    this.mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: senderEmail,
            Name: senderName,
          },
          To: [
            {
              Email: infoBooking.email,
              Name: infoBooking.name,
            },
          ],
          Subject: 'Your tour!',
          TextPart: plainMessageForm(infoBooking),
          HTMLPart: htmlMessageForm(infoBooking),
        },
      ],
    });
  }

  sendContactEmail(infoContactForm: IInfoContactForm) {
    this.mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: senderEmail,
            Name: senderName,
          },
          To: [
            {
              Email: infoContactForm.email,
              Name: infoContactForm.name,
            },
          ],
          Subject: 'Hey!',
          TextPart: plainMessageContact(infoContactForm),
          HTMLPart: htmlMessageContact(infoContactForm),
        },
      ],
    });
  }
}
