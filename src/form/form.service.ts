import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { SubmitFormResponseDto } from './dto/submit-form-response.dto';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private formRepository: Repository<Form>,
  ) {}

  findAll(): Promise<Form[]> {
    return this.formRepository.find();
  }

  async submitForm(form: CreateFormDto): Promise<SubmitFormResponseDto> {
    const createdForm = await this.formRepository.save(form);
    return SubmitFormResponseDto.mapToResponse(createdForm);
  }
}
