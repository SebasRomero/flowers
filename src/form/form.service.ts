import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { Repository } from 'typeorm';
import { SubmitFormDto } from './dto/submit-form.dto';
import { SubmitFormResponseDto } from './dto/submit-form-response.dto';
import { MailService } from 'src/mail/mail.service';
import { TourNames } from './types/submit-form.types';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private formRepository: Repository<Form>,
    private mailService: MailService,
  ) {}

  findAll(): Promise<Form[]> {
    return this.formRepository.find();
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

    const createdForm = await this.formRepository.save(refactoredForm);
    // this.mailService.sendEmail();
    return SubmitFormResponseDto.mapToResponse(createdForm);
  }
}
