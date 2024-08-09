import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Form } from './schemas/form.schema';
import { SubmitFormDto } from './dto/submit-form.dto';
import { SubmitFormResponseDto } from './dto/submit-form-response.dto';
import { MailService } from 'src/mail/mail.service';
import { TourNames } from './types/submit-form.types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UtilitiesService } from 'src/utilities/utilities.service';

@Injectable()
export class FormService {
  constructor(
    private utilitiesService: UtilitiesService,
    @InjectModel(Form.name) private formModel: Model<Form>,
    private mailService: MailService,
  ) {}

  findAll(): Promise<Form[]> {
    return this.formModel.find();
  }

  async submitForm(form: SubmitFormDto): Promise<SubmitFormResponseDto> {
    const refactoredForm: SubmitFormDto = {
      email: form.email.toLowerCase(),
      name: form.name.toLowerCase(),
      dateStartingTour: form.dateStartingTour,
      numberOfPersons: form.numberOfPersons,
      phone: form.phone,
      tourName: form.tourName,
    };

    if (!Object.values(TourNames).includes(form.tourName))
      throw new HttpException(
        'Tour name should be correct',
        HttpStatus.BAD_REQUEST,
      );

    const createdForm = await this.formModel.create(refactoredForm);

    this.mailService.sendEmail({
      email: refactoredForm.email,
      name: this.utilitiesService.capitalizeFirstLetter(refactoredForm.name),
      tourName: refactoredForm.tourName,
      dateStartingTour: refactoredForm.dateStartingTour,
    });

    return SubmitFormResponseDto.mapToResponse(createdForm);
  }
}
