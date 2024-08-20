import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MailService } from 'src/mail/mail.service';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { SubmitContactDto } from './dto/submit-contact.dto';
import { SubmitContactResponseDto } from './dto/submit-contact-response.dto';
import { IContactForm } from './types/contact.interface';
import { Model } from 'mongoose';
import { Contact } from './schemas/contact.schema';

@Injectable()
export class ContactService {
  constructor(
    private utilitiesService: UtilitiesService,
    @InjectModel(Contact.name) private readonly contactModel: Model<Contact>,
    private mailService: MailService,
  ) {}

  async submitContactForm(
    contactForm: SubmitContactDto,
  ): Promise<SubmitContactResponseDto> {
    const refactoredForm: SubmitContactDto = {
      email: contactForm.email.toLowerCase(),
      name: contactForm.name.toLowerCase(),
      phone: {
        phoneNumber: contactForm.phone.phoneNumber,
        prefix: contactForm.phone.prefix,
      },
      message: contactForm.message,
    };

    const createdContactForm: IContactForm = (
      await this.contactModel.create(refactoredForm)
    ).toObject();

    this.mailService.sendContactEmail({
      email: createdContactForm.email,
      message: createdContactForm.message,
      name: this.utilitiesService.capitalizeFirstLetter(
        createdContactForm.name,
      ),
      phone: {
        phoneNumber: createdContactForm.phone.phoneNumber,
        prefix: createdContactForm.phone.prefix,
      },
    });

    return SubmitContactResponseDto.mapToResponse(createdContactForm);
  }
}
