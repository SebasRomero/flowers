import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { SubmitFormResponseDto } from './dto/submit-form-response.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private formRepository: Repository<Form>,
    private mailService: MailService,
  ) {}

  findAll(): Promise<Form[]> {
    return this.formRepository.find();
  }

  async submitForm(form: CreateFormDto): Promise<SubmitFormResponseDto> {
    const createdForm = await this.formRepository.save(form);
    this.mailService.sendEmail();
    return SubmitFormResponseDto.mapToResponse(createdForm);
  }
}
