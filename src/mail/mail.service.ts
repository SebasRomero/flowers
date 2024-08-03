import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IInfoForm } from 'src/form/dto/info-form.dto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mailjet = require('node-mailjet');

@Injectable()
export class MailService {
  constructor(private configService: ConfigService) {}
  sendEmail(infoForm: IInfoForm) {
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
              Email: infoForm.email,
              Name: infoForm.name,
            },
          ],
          Subject: 'Your tour!',
          TextPart: `tour: ${infoForm.tourName}
            starts: ${infoForm.dateStartingTour}`,
          HTMLPart: '<h3>Test/h3><br />Test',
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
