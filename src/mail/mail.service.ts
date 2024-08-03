import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mailjet = require('node-mailjet');

@Injectable()
export class MailService {
  constructor(private configService: ConfigService) {}
  sendEmail(email: string) {
    const mailjet = Mailjet.apiConnect(
      this.configService.get('API_KEY_MAIL'),
      this.configService.get('SECRET_KEY_MAIL'),
      { config: {}, options: {} },
    );

    const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'sebastian_eromero@hotmail.com',
            Name: 'Sebastian',
          },
          To: [
            {
              Email: email,
              Name: 'Elias',
            },
          ],
          Subject: 'Your gmail flight plan!',
          TextPart:
            'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
          HTMLPart:
            '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
        },
      ],
    });

    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.log(err.statusCode);
      });
  }
}
